import {Component, Prop, State} from '@stencil/core';

@Component({
  tag: 'collapsible-panel',
  styleUrl: 'collapsible-panel.scss'
})
export class CollapsiblePanel {
  @Prop() title: string;
  @State() collapsed: boolean;

  toggle() {
      this.collapsed = !this.collapsed;
  }

  render() {
    return (
        <div>
            <div id="header" onClick={this.toggle.bind(this)}>
                <span>{this.title}</span>
            </div>
            <div id="content" hidden={this.collapsed}>
                <slot />
            </div>
        </div>
    );
  }
}