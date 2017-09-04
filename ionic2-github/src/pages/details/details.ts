import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {GithubService} from '../../service/github';

/**
 * Generated class for the DetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
  providers:[GithubService]
})
export class DetailsPage {
  public readme = '';
  public repo;


  constructor(private github: GithubService,
              public nav: NavController,
              public navParams: NavParams
              
  ) {

    this.repo = navParams.get('repo');

    this.github.getDetails(this.repo).subscribe(
      data =>this.readme =   data.text(),                 
      err =>{
        if(err.status == 404){
          this.readme = 'This repo does not have a README. :(';
        }else{
          console.error(err);
        }
      },
      () => console.log('getDetails Page completed')
    );
  }



}
