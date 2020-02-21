import { Component } from '@angular/core';
import {
  TdMarkdownNavigatorWindowService,
  IMarkdownNavigatorWindowConfig,
  IMarkdownNavigatorItem,
} from '@covalent/markdown-navigator';

import { singleLevelTree, biLevelTree, multiLevelTree, mdOptions } from './../../markdown-navigator.model';

function prettyJson(items: IMarkdownNavigatorItem[]): string {
  return JSON.stringify(items, undefined, 4);
}

@Component({
  selector: 'markdown-navigator-demo-basic',
  styleUrls: ['./markdown-navigator-demo-basic.component.scss'],
  templateUrl: './markdown-navigator-demo-basic.component.html',
  preserveWhitespaces: true,
})
export class MarkdownNavigatorDemoBasicComponent {
  public options: { name: string; value: IMarkdownNavigatorItem[] }[] = mdOptions;
  public selected: { name: string; value: IMarkdownNavigatorItem[] } = this.options[0];
  public currentTree: IMarkdownNavigatorItem[] = this.selected.value;
  public startAt: IMarkdownNavigatorItem;
  public input: string = prettyJson(this.currentTree);

  constructor(private _markdownNavigatorWindowService: TdMarkdownNavigatorWindowService) {}

  public compareByTitle: (o1: IMarkdownNavigatorItem, o2: IMarkdownNavigatorItem) => boolean = (
    o1: IMarkdownNavigatorItem,
    o2: IMarkdownNavigatorItem,
  ): boolean => o1.title === o2.title;

  public get windowConfig(): IMarkdownNavigatorWindowConfig {
    return { items: this.currentTree, startAt: this.startAt, compareWith: this.compareByTitle };
  }

  public selectOption(): void {
    this.startAt = undefined;
    this.use(this.selected.value);
  }

  public use(items: IMarkdownNavigatorItem[]): void {
    this.currentTree = items;
    this.input = prettyJson(this.currentTree);
    if (this._markdownNavigatorWindowService.isOpen) {
      this.openWindow();
    }
  }

  public applyInput(): void {
    this.use(JSON.parse(this.input));
    this.openWindow();
  }

  public demoStartAt(): void {
    this.selected = this.options[0];
    this.startAt = { title: 'tdLoading' };
    this.use(JSON.parse(JSON.stringify(this.selected.value)));
    this.openWindow();
  }

  public openWindow(): void {
    this._markdownNavigatorWindowService.open(this.windowConfig);
  }
}
