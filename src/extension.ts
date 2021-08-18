import * as vscode from 'vscode';
const core = require("./core");

export function activate(context: vscode.ExtensionContext) {
	
	let disposable = vscode.commands.registerCommand('stylesheet-generator.helloWorld', () => {
		const lineCount = vscode.window.activeTextEditor.document.lineCount;
		let code = vscode.window.activeTextEditor.document.getText();
		const convertedCode = core.codeConvert(code);
		if (convertedCode === "Oops!! error parsing the tree") {
		  // show error notification
		  vscode.window.showErrorMessage("Oops!! error parsing the tree");
		} else {
		  vscode.window.activeTextEditor.edit((editBuilder) => {
			editBuilder.replace(
			  new vscode.Range(0, 0, lineCount, 0),
			  convertedCode
			);
		  });
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
