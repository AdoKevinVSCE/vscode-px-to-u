import * as vscode from 'vscode';
import type Process from './Process';

export default class Provider implements vscode.CompletionItemProvider {
  private process: Process;
  constructor(process: Process) {
    this.process = process;
  }

  async provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    _token: vscode.CancellationToken
  ): Promise<vscode.CompletionItem[]> {
    const lineText = document.getText(new vscode.Range(position.with(undefined, 0), position));
    const res = this.process.convert(lineText);
    if (res.length === 0) {
      return [];
    }
    const hintArray = res.map((item) => {
      const completionItem = new vscode.CompletionItem(
        `${item.pxValue}px -> ${item.replaceText}`,
        vscode.CompletionItemKind.Snippet
      );
      completionItem.insertText = item.replaceText;
      return completionItem;
    });
    return hintArray;
  }
}
