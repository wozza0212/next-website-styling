# Compiler

Typescript compiler can be configured, most code editors can pick this up

How to plan projects and configure the Typescript compiler

### Create a tsconfig.json

This tells typescript how to behave

You can cerate this compiler with the command

```
tsc --init
```

This file allows you to configure typescripts behaviour, this command creates 
a file with every command, most of them commented out, you don't need to understand all of them.
You can learn about all the options [here](https://www.typescriptlang.org/tsconfig/) though

## Important Settings

### Languiage and environment
 
 This 'target' allows you to set which version of Javascript you want your code compiled to, it's one of the more crucial settings
 ```
 target: es2016
 ```

 the 'lib' settings allows you to set some standard libraries
 ```
 'lib': ['dom', 'multple-others']
 ``` 

 ### Modules

the 'module' setting allows you to manage how imports and exports work
```
'module': 'NodeNext'
```

the 'rootDir' setting allows you to control which folder contains your source files
```
'rootDirt': './src'
```

### Javascript Support
These settings can be turned on if you want to combine javascript and typescript files in your projects
To allow Javascript change the 'allowJs' setting
```
'allowJs': true
```

### Emit
The 'outDir' setting allows you specify the directory in which your complied files will be stored
```
'outDir': './dist'
```

### Other config settings
A few more decent setting to have on are 
```
{
  "noUnusedLocals": true, // helps you detect unused variable
  "noUnusedParameters": true, // helps you detect unused function parameters
  "noFallthroughCasesInSwitch": true // helps you detect switch cases without break or return
}

```

### Command to compile. the whole project

If you run the command to just run one typescript file e.g.
```
tsc scr/app
```
It wont run the compilersettings, as it's only running this one file, you have to run the full project with the command
```
tsc
```
 in order to compile everything

 ### Installation of packages
 use npm install or yarn add to install packages