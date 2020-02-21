import { Component } from '@angular/core';
import {
  IMarkdownNavigatorItem,
  TdMarkdownNavigatorWindowService,
  IMarkdownNavigatorWindowConfig,
} from '@covalent/markdown-navigator';

import { mdOptions } from './markdown-navigator.model';

function prettyJson(items: IMarkdownNavigatorItem[]): string {
  return JSON.stringify(items, undefined, 4);
}

@Component({
  selector: 'markdown-navigator-overview',
  styleUrls: ['./markdown-navigator.component.scss'],
  templateUrl: './markdown-navigator.component.html',
})
export class MarkdownNavigatorDemoComponent {
  public options: { name: string; value: IMarkdownNavigatorItem[] }[] = mdOptions;
  public selected: { name: string; value: IMarkdownNavigatorItem[] } = this.options[0];
  public currentTree: IMarkdownNavigatorItem[] = this.selected.value;
  public startAt: IMarkdownNavigatorItem;
  public input: string = prettyJson(this.currentTree);

  public selectOption(): void {
    this.startAt = undefined;
    this.use(this.selected.value);
  }

  public use(items: IMarkdownNavigatorItem[]): void {
    this.currentTree = items;
    this.input = prettyJson(this.currentTree);
  }
}
