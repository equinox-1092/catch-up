import {Component, inject, OnInit} from '@angular/core';
import {Source} from '../../../news/model/source.entity';
import {Article} from '../../../news/model/article.entity';
import {NewsApiService} from '../../../news/services/news-api.service';
import {LogoApiService} from '../../../shared/services/logo-api.service';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';

import {MatIconModule} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';
import {FooterContentComponent} from '../footer-content/footer-content.component';
import {SourceListComponent} from '../source-list/source-list.component';
import {LanguageSwitcherComponent} from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-side-navigation-bar',
  imports: [
    MatSidenavModule,
    MatToolbar,

    MatIconModule,
    MatIconButton,
    FooterContentComponent,
    SourceListComponent,
    LanguageSwitcherComponent
  ],
  templateUrl: './side-navigation-bar.component.html',
  styleUrls: ['./side-navigation-bar.component.css']
})
export class SideNavigationBarComponent implements OnInit {
  sources: Array<Source> = [];
  articles: Array<Article> = [];

  private newsApi = inject(NewsApiService);
  private logoApi = inject(LogoApiService);

  searchArticlesForSource(source: Source):void {
    console.log(`Current source: ${source.id}`);
    this.newsApi.getArticlesBySourceId(source.id)
      .subscribe(articles => {
        this.articles = articles;
        this.articles.forEach(article => {
          article.source.urlToLogo = source.urlToLogo;
          article.source.url = source.url;
        });
        console.log('Articles for source:', this.articles);
      });
  }

  onSourceSelected(source: Source) {
    this.searchArticlesForSource(source);
  }

  ngOnInit(): void {
    this.newsApi.getSources().subscribe(sources => {
      this.sources = sources;
      this.sources.forEach(source => source.urlToLogo = this.logoApi.getUrlToLogo(source));
      this.searchArticlesForSource(this.sources[0]);
    });
  }

}
