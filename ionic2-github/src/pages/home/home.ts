import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GithubService} from '../../service/github';
import {DetailsPage} from '../details/details';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[GithubService]
})
export class HomePage {
  public foundRepos;
  public username;

  constructor(public github: GithubService,
              private nav: NavController) {

  }

  getRepos(){
    this.github.getRepos(this.username).subscribe(
      data => {
        this.foundRepos = data.json();
      },
      err => console.error(err),
      ()=> console.log('getRepos Completed')

      
    );
  }

  goToDetails(repo){
    this.nav.push(DetailsPage, {repo: repo});
  }

}
