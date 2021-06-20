// Type definitions for electron-prompt 1.6
// Project: https://github.com/p-sam/electron-prompt#readme
// Definitions by: Florian Imdahl <https://github.com/ffflorian> | amunim <https://github.com/amunim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

import { BrowserWindow } from 'electron';

declare namespace prompt {
    interface ButtonLabels {
        ok?: string;
        cancel?: string;
    }

    interface Options {
        /**
         * Whether the window should always stay on top of other windows.
         * Defaults to `false`.
         */
        alwaysOnTop?: boolean;
        /**
         * The text for the OK/cancel buttons. Properties are `ok` and `cancel`.
         * Defaults to `null`.
         */
        buttonLabels?: ButtonLabels | null;
        /**
         * The local path of a CSS file to stylize the prompt window.
         * Defaults to `null`.
         */
        customStylesheet?: 'dark' | string | null;
        /**
         * The height of the prompt window. Defaults to `130`.
         */
        height?: number;
        /**
         * The path to an icon image to use in the title bar.
         * Defaults to `null` and uses electron's icon.
         */
        icon?: string | null;
        /**
         * The attributes of the input field, analagous to the HTML attributes:
         * `{type: 'text', required: true}` -> `<input type="text" required>`.
         * Used if the type is `input`.
         */
        inputAttrs?: Record<string, string>;
        /**
         * The label which appears on the prompt for the input field.
         * Defaults to `Please input a value:`.
         */
        label?: string;
        /**
         * Whether to show the menubar or not. Defaults to `false`.
         */
        menuBarVisible?: boolean;
        /**
         * The minimum allowed height for the prompt window.
         * Same default value as `height`.
         */
        minHeight?: number;
        /**
         * The minimum allowed width for the prompt window.
         * Same default value as `width`.
         */
        minWidth?: number;
        /**
         * Whether the prompt window can be resized or not
         * (also sets `useContentSize`). Defaults to `false`.
         */
        resizable?: boolean;
        /**
         * The items for the select dropdown if using the 'select' type in the
         * format 'value': 'display text', where the value is what will be given
         * to the then block and the display text is what the user will see.
         */
        selectOptions?: Record<string, string> | null;
        /**
         * Whether to show the prompt window icon in taskbar. Defaults to true.
         */
        skipTaskbar?: boolean;
        /**
         * The title of the prompt window. Defaults to 'Prompt'.
         */
        title?: string;
        /**
         * The type of input field, either `input` for a standard text input
         * field or `select` for a dropdown type input. Defaults to `input`.
         */
        type?: 'input' | 'select' | 'counter' | 'keybind' | 'multiInput';
        /**
         * Whether the label should be interpreted as HTML or not.
         * Defaults to `false`.
         */
        useHtmlLabel?: boolean;
        /**
         * The default value for the input field. Defaults to `null`.
         */
        value?: string | null;
        /**
         * The width of the prompt window. Defaults to `370`.
         */
        width?: number;
        /*
        * Wether to create prompt with frame. Defaults to true.
        **/
       frame?: boolean;
        /*
        * The local path of a JS file to run on preload. Defaults to null.
        **/
        customScript?: string;
        /*
        * Wether the prompt window have remote modules activated, Defaults to false.
        **/
        enableRemoteModule?: boolean;
        /*
        * minimum and maximum of counter, and if continuous input is enabled. format: {minimum: %int%, maximum: %int%, multiFire: %boolean%. min+max values defaults to null and multiFire defaults to false.
        **/
        counterOptions?: {
            /*
            * default null
            */
            minimum?: number;
            /*
            * default null
            */
            maximum?: number;
            /*
            * default false
            */
            multiFire?: boolean;
        };
        /*
        * Required if type=keybind. represent an array of objects in format: {type: %string%, value: %string%, default: %string%}. default has to be a valid accelerator to work
        **/
        keybindOptions?: {
            value?: string;
            /*
            * Must be a valid accelerator to work!
            */
            default?: string;
            [key: string]: Record<string, string>;
        };
        /*
        * An Array of objects having options for every input, format: [{inputAttrs:{type:'email'}},{inputAttrs:{type:'password'}}], [object, object] to use it without passing any options simply [{},{},{}], just create x amount of empty objects to add x inputs.
        **/
        multiInputOptions?: Record<string, string>[];
        /*
        * adds a button after the success(OK) with a custom label, onClick and attributes. Object forma
        */
        button?: {
            /*
            * The label text of the button
            */
            label?: string;
            /*
            * The label text of the button
            */
            click?: () => void;
            /*
            * Custom attributes the button will use
            */
            attrs?: Record<string, string>;

        };
    }
}

declare function prompt(options?: prompt.Options, parentBrowserWindow?: BrowserWindow): Promise<string | Record<string,string>[] |Record<string, string> | null | any>;

export = prompt;