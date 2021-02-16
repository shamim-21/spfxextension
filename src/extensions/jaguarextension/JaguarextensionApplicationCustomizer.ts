import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer,
  PlaceholderContent,
  PlaceholderName
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'JaguarextensionApplicationCustomizerStrings';
import styles from './AppCustomizer.module.scss';
import {escape} from '@microsoft/sp-lodash-subset';
const LOG_SOURCE: string = 'JaguarextensionApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IJaguarextensionApplicationCustomizerProperties {
  // This is an example; replace with your own property
  Top: string;
  Bottom: string;
  Logo: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class JaguarextensionApplicationCustomizer
  extends BaseApplicationCustomizer<IJaguarextensionApplicationCustomizerProperties> {
 // These have been added
 private _topPlaceholder: PlaceholderContent | undefined;
 private _bottomPlaceholder: PlaceholderContent | undefined;
  @override
  public onInit(): Promise<void> {
    
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    // wait for the placeholders to be created (or handle them being changed) and then render

    this.context.placeholderProvider.changedEvent.add(this, this._renderPlaceHolders);
    return Promise.resolve<void>();
   
  }

  private _renderPlaceHolders() : void{
    console.log("JaguarextensionApplicationCustomizer._renderPlaceHolders()");
    console.log(
      "Available placeholders: ",
      this.context.placeholderProvider.placeholderNames
      .map(name => PlaceholderName[name])
      .join(",")
    );

    //Handling the top placeholder
    if(!this._topPlaceholder){
      this._topPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Top,
        { onDispose: this._onDispose } // cleaning memory on page
      );

      // The extension should not assume that the expected placeholder is available
      if(!this._topPlaceholder) {
        console.error("The expected placeholdere (Top) was not found");
        return;
      }

      if(this.properties) {
        let topString: string = this.properties.Top;
        if(!topString) {
          topString = "(Top property was not defined)";
        }
        let logoString: string= this.properties.Logo;
        if(!logoString){
          console.error('Logo URL was not defined');
        }
        if(this._topPlaceholder.domElement) {
          this._topPlaceholder.domElement.innerHTML =`
          <div class = "${styles.app}">
          <div class= "${styles.top}">
          <div class="${styles.logo}"><a href= "${this.context.pageContext.web.absoluteUrl}"> 
          <img src="${escape(logoString)}" alt="${escape(topString)}"/></a><h1>${escape(topString)}</h1> </div>
         
          </div>
          </div>`;
        }
      }
    }
    //Handling the bottom placeholder
    if(!this._bottomPlaceholder){
      this._bottomPlaceholder = this.context.placeholderProvider.tryCreateContent(
        PlaceholderName.Bottom,
        { onDispose: this._onDispose } // cleaning memory on page
      );

      // The extension should not assume that the expected placeholder is available
      if(!this._bottomPlaceholder) {
        console.error("The expected placeholdere (Bottom) was not found");
        return;
      }

      if(this.properties) {
        let bottomString: string = this.properties.Bottom;
        if(!bottomString) {
          bottomString = "(Bottom property was not defined)";
        }

        if(this._bottomPlaceholder.domElement) {
          this._bottomPlaceholder.domElement.innerHTML =`
          <div class = "${styles.app}">
          <div class= "${styles.bottom}">
          <i class="ms-Icon ms-Tcon--Info" aria-hidden="true"></i> ${escape(
            bottomString
          )}
          </div>
        </div>`;
      } 
    }
  }
}

private _onDispose(): void{
  console.log('[HelloWorldApplicationCustomizer._onDispose] Disposed custom top and bottom part');

}
  }