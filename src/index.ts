import { type ExtensionContext, languages, workspace } from 'vscode';

import Process from './Process';
import Provider from './Provider';

export function activate(context: ExtensionContext) {
  const config = workspace.getConfiguration('px-to-u');
  const process = new Process(config);
  const provider = new Provider(process);
  const supportedLanguages = ['html', 'vue', 'css', 'less', 'scss', 'sass', 'stylus'];

  for (const lang of supportedLanguages) {
    const providerDisposable = languages.registerCompletionItemProvider(lang, provider);
    context.subscriptions.push(providerDisposable);
  }
}
