Blockly.Constants.DRAGONRUBY = {};
Blockly.Constants.DRAGONRUBY.HUE = 0;

// Runtime
Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
{
  "type": "gtk_state",
  "message0": "State",
  "output": null,
  "colour": 0,
  "tooltip": "Entity represents the args.state ($state) in DragonRuby.",
  "helpUrl": ""
},
{
  "type": "gtk_current_framerate",
  "message0": "Frames Per Second",
  "output": "Number",
  "colour": 0,
  "tooltip": "Returns current framerate (FPS) as float.",
  "helpUrl": ""
},
{
  "type": "gtk_tick_count",
  "message0": "Tick Count",
  "output": "Number",
  "colour": 0,
  "tooltip": "Returns the current tick of the game. This value is reset if you call $gtk.reset.",
  "helpUrl": "http://docs.dragonruby.org/#--docs---kernel--tick_count-"
},
{
  "type": "gtk_argv",
  "message0": "Arguments",
  "output": "String",
  "colour": 0,
  "tooltip": "Returns a String that represents the parameters passed into the ./dragonruby binary.",
  "helpUrl": "http://docs.dragonruby.org/#------argv-"
},
{
  "type": "gtk_platform",
  "message0": "Platform",
  "output": "String",
  "colour": 0,
  "tooltip": "Returns a String representing the operating system the game is running on.",
  "helpUrl": "http://docs.dragonruby.org/#------platform-"
},
{
  "type": "gtk_request_quit",
  "message0": "Quit Game",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Request that the runtime quit the game.",
  "helpUrl": "http://docs.dragonruby.org/#------request_quit-"
},
{
  "type": "gtk_write_file",
  "message0": "Write to File %1 Path %2 Content %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "content",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Writes/overwrites a file within the game directory + path.",
  "helpUrl": "http://docs.dragonruby.org/#------write_file-path--contents-"
},
{
  "type": "gtk_write_file_root",
  "message0": "Write to File (DragonRuby Path) %1 Path %2 Content %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "content",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Writes/overwrites a file within the root dragonruby binary directory + path.",
  "helpUrl": "http://docs.dragonruby.org/#------write_file_root-"
},
{
  "type": "gtk_read_file",
  "message0": "Read from File with Path %1",
  "args0": [
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
      "align": "RIGHT"
    },
  ],
  "output": "String",
  "colour": 0,
  "tooltip": "Reads a file from the sandboxed file system.",
  "helpUrl": "http://docs.dragonruby.org/#------read_file-path-"
},
{
  "type": "gtk_parse_xml",
  "message0": "Parse XML from String %1",
  "args0": [
    {
      "type": "input_value",
      "name": "string",
      "check": "String",
      "align": "RIGHT"
    },
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns a Hash for a String that represents XML.",
  "helpUrl": "http://docs.dragonruby.org/#------parse_xml-string--parse_xml_file-path-"
},
{
  "type": "gtk_parse_xml_file",
  "message0": "Parse XML from File %1",
  "args0": [
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
      "align": "RIGHT"
    },
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns a Hash for a String/File that represents XML.",
  "helpUrl": "http://docs.dragonruby.org/#------parse_xml-string--parse_xml_file-path-"
},
{
  "type": "gtk_parse_json",
  "message0": "Parse JSON from String %1",
  "args0": [
    {
      "type": "input_value",
      "name": "string",
      "check": "String",
      "align": "RIGHT"
    },
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns a Hash for a String/File that represents JSON.",
  "helpUrl": "http://docs.dragonruby.org/#------parse_json-string--parse_json_file-path-"
},
{
  "type": "gtk_parse_json_file",
  "message0": "Parse JSON from File %1",
  "args0": [
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
      "align": "RIGHT"
    },
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns a Hash for a String/File that represents JSON.",
  "helpUrl": "http://docs.dragonruby.org/#------parse_json-string--parse_json_file-path-"
},
{
  "type": "gtk_http_get",
  "message0": "Request HTTP GET %1 URL %2 Extra Headers %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "url",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "extra_headers",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Creates an async task to perform an HTTP GET.",
  "helpUrl": "http://docs.dragonruby.org/#------http_get-url--extra_headers-=-{}-"
},
{
  "type": "gtk_http_post",
  "message0": "Request HTTP POST %1 URL %2 Form Fields %3 Extra Headers %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "url",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "form_fields",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "extra_headers",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Creates an async task to perform an HTTP POST.",
  "helpUrl": "http://docs.dragonruby.org/#------http_post-url--form_fields-=-{}--extra_headers-=-{}-"
},
{
  "type": "gtk_reset",
  "message0": "Restart Game",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Resets the game by deleting all data in args.state and setting args.state.tick_count back to 0.",
  "helpUrl": "http://docs.dragonruby.org/#------reset-"
},
{
  "type": "gtk_stop_music",
  "message0": "Stop background music",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Stops all background music.",
  "helpUrl": "http://docs.dragonruby.org/#------stop_music-"
},
{
  "type": "gtk_calcstringbox",
  "message0": "Calculate String Box %1 String %2 Size %3 Font Filepath %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "string",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "size_enum",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "font",
      "align": "RIGHT"
    }
  ],
  "output": "Array",
  "colour": 0,
  "tooltip": "Returns a tuple with width and height of a string being rendered.",
  "helpUrl": "http://docs.dragonruby.org/#------calcstringbox-str--size_enum--font-"
},
{
  "type": "gtk_slowmo",
  "message0": "Slow Motion by Factor %1",
  "args0": [
    {
      "type": "input_value",
      "name": "factor",
      "check": "Number"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Slows the game down by the factor provided.",
  "helpUrl": "http://docs.dragonruby.org/#------slowmo!-factor-"
},
{
  "type": "gtk_notify",
  "message0": "Notify with message %1",
  "args0": [
    {
      "type": "input_value",
      "name": "msg",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Renders a toast message at the bottom of the screen.",
  "helpUrl": "http://docs.dragonruby.org/#------notify!-string-"
},
{
  "type": "gtk_system",
  "message0": "Execute Command %1",
  "args0": [
    {
      "type": "input_value",
      "name": "command",
      "check": "String"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Invokes a shell command and prints the result to the console.",
  "helpUrl": "http://docs.dragonruby.org/#------system-"
},
{
  "type": "gtk_exec",
  "message0": "Execute Command %1",
  "args0": [
    {
      "type": "input_value",
      "name": "command",
      "check": "String"
    }
  ],
  "output": "String",
  "colour": 0,
  "tooltip": "Invokes a shell command and returns a String that represents the result.",
  "helpUrl": "http://docs.dragonruby.org/#------exec-"
},
{
  "type": "gtk_save_state",
  "message0": "Save State",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Saves the game state to game_state.txt.",
  "helpUrl": "http://docs.dragonruby.org/#------save_state-"
},
{
  "type": "gtk_load_state",
  "message0": "Load State",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Load args.state from game_state.txt.",
  "helpUrl": "http://docs.dragonruby.org/#------load_state-"
},
{
  "type": "gtk_serialize",
  "message0": "Serialize State %1 File %2 State Hash %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "state",
      "align": "RIGHT"
    }
  ],
  "nextStatement": null,
  "previousStatement": null,
  "colour": 0,
  "tooltip": "Saves entity state to a file. If only one parameter is provided a string is returned for state instead of writing to a file.",
  "helpUrl": "http://docs.dragonruby.org/#------serialize_state-file--state-"
},
{
  "type": "gtk_deserialize",
  "message0": "Deserialize State from File %1",
  "args0": [
    {
      "type": "input_value",
      "name": "path",
      "check": "String"
    },
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns entity state from a file or serialization data represented as a String.",
  "helpUrl": "http://docs.dragonruby.org/#------deserialize_state-file-"
},
{
  "type": "gtk_reset_sprite",
  "message0": "Reset Sprite Cache from File %1",
  "args0": [
    {
      "type": "input_value",
      "name": "path",
      "check": "String"
    },
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Invalids the texture cache of a sprite.",
  "helpUrl": "http://docs.dragonruby.org/#------reset_sprite-path-"
},
{
  "type": "gtk_show_cursor",
  "message0": "Show Cursor",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Shows the mouse cursor.",
  "helpUrl": "http://docs.dragonruby.org/#------show_cursor-"
},
{
  "type": "gtk_hide_cursor",
  "message0": "Hide Cursor",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Hides the mouse cursor.",
  "helpUrl": "http://docs.dragonruby.org/#------hide_cursor-"
},
{
  "type": "gtk_cursor_shown",
  "message0": "Cursor Visible?",
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Returns true if the mouse cursor is shown.",
  "helpUrl": "http://docs.dragonruby.org/#------cursor_shown--"
},
{
  "type": "gtk_set_window_fullscreen",
  "message0": "Set Fullscreen to %1",
  "args0": [
    {
      "type": "input_value",
      "name": "enabled",
      "check": "Boolean"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Sets the game to either fullscreen (enabled=true) or windowed (enabled=false).",
  "helpUrl": "http://docs.dragonruby.org/#------set_window_fullscreen-enabled-"
},
{
  "type": "gtk_openurl",
  "message0": "Open URL %1",
  "args0": [
    {
      "type": "input_value",
      "name": "url",
      "check": "String"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Opens a url using the Operating System's default browser.",
  "helpUrl": "http://docs.dragonruby.org/#------openurl-url-"
},
{
  "type": "gtk_get_base_dir",
  "message0": "Get Base Directory",
  "output": "String",
  "colour": 0,
  "tooltip": "Returns the full path of the DragonRuby binary directory.",
  "helpUrl": "http://docs.dragonruby.org/#------get_base_dir-"
},
{
  "type": "gtk_get_game_dir",
  "message0": "Get Game Directory",
  "output": "String",
  "colour": 0,
  "tooltip": "Returns the full path of the game directory in its sandboxed environment.",
  "helpUrl": "http://docs.dragonruby.org/#------get_game_dir-"
}
]);

// Audio
Blockly.defineBlocksWithJsonArray([
{
  "type": "args_audio_play",
  "message0": "Play Audio %1 Audio Name %2 File Path %3 x %4 y %5 z %6 gain %7 pitch %8 paused %9 looping %10",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "audio_name",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "z",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "gain",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "pitch",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "paused",
      "check": "Boolean",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "looping",
      "check": "Boolean",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Creates a Hash that contains audio source to play.",
  "helpUrl": "http://docs.dragonruby.org/#--docs---gtk--args#audio-"
}
]);

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
  {
    "type": "kernel_tick_count",
    "message0": "Tick Count",
    "output": "Number",
    "colour": 0,
    "tooltip": "Returns the current tick of the game. This value is reset if you call $gtk.reset.",
    "helpUrl": "http://docs.dragonruby.org/#--docs---kernel--tick_count-"
  },
  {
    "type": "kernel_global_tick_count",
    "message0": "Global Tick Count",
    "output": "Number",
    "colour": 0,
    "tooltip": "Returns the current tick of the application from the point it was started. This value is never reset.",
    "helpUrl": "http://docs.dragonruby.org/#--docs---kernel--global_tick_count-"
  },
]);

// Numeric extensions
Blockly.defineBlocksWithJsonArray([
{
  "type": "numeric_frame_index",
  "message0": "Frame index of Sprite %1 Variable %2 Number of Sprites %3 Frames each Sprite %4 Looping %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "variable",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "number_of_sprites",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "frames_each_sprite",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "looping",
      "check": "Boolean",
      "align": "RIGHT"
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "This function is helpful for determining the index of frame-by-frame sprite animation.",
  "helpUrl": "http://docs.dragonruby.org/#--docs---numeric#frame_index-"
},
{
  "type": "numeric_half",
  "message0": "Half of %1",
  "args0": [
    {
      "type": "input_value",
      "name": "variable",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Returns half of number.",
  "helpUrl": ""
},
{
  "type": "numeric_from_top",
  "message0": "Top-Left Y %1",
  "args0": [
    {
      "type": "input_value",
      "name": "variable",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Returns Y position from top-left.",
  "helpUrl": ""
},
{
  "type": "numeric_seconds",
  "message0": "%1 Seconds",
  "args0": [
    {
      "type": "input_value",
      "name": "variable",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Returns seconds of number.",
  "helpUrl": ""
},
{
  "type": "numeric_elapsed_time",
  "message0": "Elapsed time of %1",
  "args0": [
    {
      "type": "input_value",
      "name": "variable",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "returns the elapsed frames since that number is returned.",
  "helpUrl": "http://docs.dragonruby.org/#--docs---numeric#elapsed_time-"
},
{
  "type": "numeric_created",
  "message0": "Number equals to current frame %1",
  "args0": [
    {
      "type": "input_value",
      "name": "variable",
      "check": "Number"
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Returns true if Numeric#elapsed_time == 0. Essentially communicating that number is equal to the current frame.",
  "helpUrl": "http://docs.dragonruby.org/#--docs---numeric#created--"
},
{
  "type": "numeric_elapsed",
  "message0": "Elapsed? %1 Variable %2 By time %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "variable",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "time",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Returns true if Numeric#elapsed_time is greater than the number.",
  "helpUrl": "http://docs.dragonruby.org/#--docs---numeric#elapsed--"
}
]);

// Array
Blockly.defineBlocksWithJsonArray([
{
  "type": "array_compact",
  "message0": "Compacted Array of Array %1",
  "args0": [
    {
      "type": "input_value",
      "name": "array",
      "check": "Array",
      "align": "RIGHT"
    }
  ],
  "output": "Array",
  "colour": 0,
  "tooltip": "Returns an Enumerable rejecting items that are nil.",
  "helpUrl": "http://docs.dragonruby.org/#--docs---array#reject_nil-"
},
{
  "type": "array_reject_false",
  "message0": "False-Rejected Array of Array %1",
  "args0": [
    {
      "type": "input_value",
      "name": "array",
      "check": "Array",
      "align": "RIGHT"
    }
  ],
  "output": "Array",
  "colour": 0,
  "tooltip": "Returns an Enumerable rejecting items that are nil or false.",
  "helpUrl": "http://docs.dragonruby.org/#--docs---array#reject_false-"
},
{
  "type": "array_product",
  "message0": "Product of Array %1",
  "args0": [
    {
      "type": "input_value",
      "name": "array",
      "check": "Array",
      "align": "RIGHT"
    }
  ],
  "output": "Array",
  "colour": 0,
  "tooltip": "Returns all combinations of values between two arrays. ",
  "helpUrl": "http://docs.dragonruby.org/#--docs---array#product-"
},
{
  "type": "array_includes",
  "message0": "Array Includes %1 Array %2 Element %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "array",
      "check": "Array",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "element",
      "align": "RIGHT"
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Given a collection of items, the function will return true if any of self's items exists in the collection of items passed in.",
  "helpUrl": "http://docs.dragonruby.org/#--docs---array#include_any--"
},
{
  "type": "array_intersect_rect",
  "message0": "Rectangle array intersects? %1 First Array %2 Second Array %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "arr1",
      "check": "Array",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "arr2",
      "check": "Array",
      "align": "RIGHT"
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "array_map2d",
  "message0": "Map 2D Array %1 %2 With %3 %4 %5 Do %6 %7",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "array",
      "check": "Array"
    },
    {
      "type": "field_variable",
      "name": "row",
      "variable": "row"
    },
    {
      "type": "field_variable",
      "name": "col",
      "variable": "col"
    },
    {
      "type": "field_variable",
      "name": "tile",
      "variable": "tile"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "output": "Array",
  "colour": 0,
  "tooltip": "Assuming the array is an array of arrays, Given a block, each 2D array index invoked against the block.",
  "helpUrl": "http://docs.dragonruby.org/#--docs---array#map_2d-"
}
]);

// Grid
Blockly.defineBlocksWithJsonArray([
{
  "type": "grid_get",
  "message0": "Get member %1 from Grid",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "member",
      "options": [
        [ "bottom", "bottom" ],
        [ "bottom_margin", "bottom_margin" ],
        [ "bottom_right", "bottom_right" ],
        [ "center", "center" ],
        [ "center_x", "center_x" ],
        [ "center_y", "center_y" ],
        [ "h", "h" ],
        [ "h_half", "h_half" ],
        [ "left", "left" ],
        [ "left_margin", "left_margin" ],
        [ "name", "name" ],
        [ "origin_x", "origin_x" ],
        [ "origin_y", "origin_y" ],
        [ "rect", "rect" ],
        [ "right", "right" ],
        [ "top", "top" ],
        [ "transform_x", "transform_x" ],
        [ "transform_y", "transform_y" ],
        [ "untransform_x", "untransform_x" ],
        [ "untransform_y", "untransform_y" ],
        [ "w", "w" ],
        [ "w_half", "w_half" ],
      ]
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Gets and returns value of member of the virtual grid for the game.",
  "helpUrl": "http://docs.dragonruby.org/#----args-grid-"
},
{
  "type": "grid_set",
  "message0": "Set member %1 from Grid to %2",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "member",
      "options": [
        [ "bottom", "bottom" ],
        [ "bottom_margin", "bottom_margin" ],
        [ "bottom_right", "bottom_right" ],
        [ "center", "center" ],
        [ "center_x", "center_x" ],
        [ "center_y", "center_y" ],
        [ "h", "h" ],
        [ "h_half", "h_half" ],
        [ "left", "left" ],
        [ "left_margin", "left_margin" ],
        [ "name", "name" ],
        [ "origin_x", "origin_x" ],
        [ "origin_y", "origin_y" ],
        [ "rect", "rect" ],
        [ "right", "right" ],
        [ "top", "top" ],
        [ "transform_x", "transform_x" ],
        [ "transform_y", "transform_y" ],
        [ "untransform_x", "untransform_x" ],
        [ "untransform_y", "untransform_y" ],
        [ "w", "w" ],
        [ "w_half", "w_half" ],
      ]
    },
    {
      "type": "input_value",
      "name": "value",
    }
  ],
  "nextStatement": null,
  "previousStatement": null,
  "colour": 0,
  "tooltip": "Sets value of member of the virtual grid for the game.",
  "helpUrl": "http://docs.dragonruby.org/#----args-grid-"
},
{
  "type": "grid_set_origin",
  "message0": "Set grid origin to %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "origin",
      "options": [
        [ "bottom_left", "bottom_left" ],
        [ "center", "center" ],
      ]
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Sets grid origin",
  "helpUrl": "http://docs.dragonruby.org/#----args-grid-"
},
]);

// Strings
Blockly.defineBlocksWithJsonArray([
{
  "type": "string_wrapped_lines",
  "message0": "Split string into lines %1 String %2 Line Length %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "string",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "length",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "Array",
  "colour": 0,
  "tooltip": "This function will return a collection of strings given an input string and max_character_length. The collection of strings returned will split the input string into strings of length <= max_character_length.",
  "helpUrl": "http://docs.dragonruby.org/#------wrapped_lines-string--max_character_length-"
},
{
  "type": "string_wrapped_lines_recur",
  "message0": "Split string into lines (Recursive) %1 String %2 Rest %3 Line Length %4 Aggregate %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "string",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "rest",
      "check": "Array",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "length",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "aggregate",
      "check": "Array",
      "align": "RIGHT"
    }
  ],
  "output": "Array",
  "colour": 0,
  "tooltip": "This function will return a collection of strings given an input string and max_character_length. The collection of strings returned will split the input string into strings of length <= max_character_length.",
  "helpUrl": "http://docs.dragonruby.org/#------wrapped_lines-string--max_character_length-"
}
]);

// Layouts
Blockly.defineBlocksWithJsonArray([
{
  "type": "layout_rect",
  "message0": "Layout Rectangle %1 Column %2 Row %3 Width %4 Height %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "col",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "row",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "w",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "h",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "",
  "helpUrl": ""
}
]);

// State
Blockly.defineBlocksWithJsonArray([
{
  "type": "state_created_at_elapsed",
  "message0": "State elapsed ticks count",
  "output": "Number",
  "colour": 0,
  "tooltip": "Returns the elapsed number of ticks since creation. ",
  "helpUrl": "http://docs.dragonruby.org/#--------created_at_elapsed-"
},
{
  "type": "state_init_variable",
  "message0": "Create state variable %1 with value %2",
  "args0": [
    {
      "type": "field_input",
      "name": "name",
      "text": "name"
    },
    {
      "type": "input_value",
      "name": "value",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Creates a variable for args.state",
  "helpUrl": ""
},
{
  "type": "state_set_variable",
  "message0": "Set value of state variable %1 to %2",
  "args0": [
    {
      "type": "field_input",
      "name": "name",
      "text": "name"
    },
    {
      "type": "input_value",
      "name": "value",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Set value of variable in args.state",
  "helpUrl": ""
},
{
  "type": "state_get_variable",
  "message0": "Get state variable %1",
  "args0": [
    {
      "type": "field_input",
      "name": "name",
      "text": "name"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Gets variable from args.state",
  "helpUrl": ""
},
]);

// Outputs
Blockly.defineBlocksWithJsonArray([
{
  "type": "outputs_new_color",
  "message0": "Create Color %1 Red %2 Green %3 Blue %4 Alpha %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "r",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "g",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "b",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "a",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Creates a Color Hash",
  "helpUrl": ""
},
{
  "type": "outputs_background_color",
  "message0": "Set Background Color %1 Red %2 Green %3 Blue %4 Alpha %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "r",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "g",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "b",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "a",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Set args.outputs.background_color to an Array with RGB values (eg. [255, 255, 255] for the color white).",
  "helpUrl": "http://docs.dragonruby.org/#------background_color-"
},
{
  "type": "outputs_play_sound",
  "message0": "Play Sound %1 Path %2",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Send a file path to this collection to play a sound.",
  "helpUrl": "http://docs.dragonruby.org/#------sounds-"
},
{
  "type": "outputs_solid",
  "message0": "Draw Rectangle %1 Rectangle %2 Color %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "color",
      "align": "RIGHT"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Send a Primitive to this collection to render a filled in rectangle to the screen. This collection is cleared at the end of every frame.",
  "helpUrl": "http://docs.dragonruby.org/#------solids-"
},
{
  "type": "outputs_border",
  "message0": "Draw Outlined Rectangle %1 Rectangle %2 Color %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "color",
      "align": "RIGHT"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Send a Primitive to this collection to render an unfilled rectangle to the screen.",
  "helpUrl": "http://docs.dragonruby.org/#------borders-----static_borders-"
},
{
  "type": "outputs_line",
  "message0": "Draw Line %1 Line %2 Color %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "line",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "color",
      "align": "RIGHT"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Send a Primitive to this collection to render a line to the screen.",
  "helpUrl": "http://docs.dragonruby.org/#------lines-----static_lines-"
},
{
  "type": "outputs_label",
  "message0": "Draw Text %1 X %2 Y %3 Text %4 Size %5 Horizontal Alignment %6 Vertical Alignment %7 Font Filepath %8 Color %9",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "text",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "size",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "align",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "valign",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "font",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "color",
      "align": "RIGHT"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Send a Primitive to this collection to render a line to the screen.",
  "helpUrl": "http://docs.dragonruby.org/#------labels-----static_labels-"
},
{
  "type": "outputs_sprite",
  "message0": "Draw Sprite %1 Rectangle %2 Path %3 Angle %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "angle",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Send a Primitive to this collection to render a sprite to the screen.",
  "helpUrl": "http://docs.dragonruby.org/#------sprites-----static_sprites-"
},
{
  "type": "outputs_sprite_ex",
  "message0": "Draw Sprite (Extended) %1 Rectangle %2 Path %3 Angle %4 Source Rectangle %5 Tint %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "angle",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "source_rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "color",
      "align": "RIGHT"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Send a Primitive to this collection to render a sprite to the screen.",
  "helpUrl": "http://docs.dragonruby.org/#------sprites-----static_sprites-"
},
{
  "type": "outputs_sprite_full",
  "message0": "Draw Sprite (Full) %1 Rectangle %2 Path %3 Angle %4 Angle Anchor X %5 Angle Anchor Y %6 Source Rectangle %7 Tile Rectangle %8 Flip Horizontally %9 Flip Vertically %10 Tint %11",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "angle",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "angle_anchor_x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "angle_anchor_y",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "source_rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "tile_rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "hflip",
      "check": "Boolean",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "vflip",
      "check": "Boolean",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "color",
      "align": "RIGHT"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Send a Primitive to this collection to render a sprite to the screen.",
  "helpUrl": "http://docs.dragonruby.org/#------sprites-----static_sprites-"
},
{
  "type": "outputs_screenshot",
  "message0": "Take Screenshot %1 Rectangle %2 Path %3 Tint %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "color",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Add a hash to this collection to take a screenshot and save as png file.",
  "helpUrl": "http://docs.dragonruby.org/#--docs---gtk--outputs#screenshots-"
}
]);

// Debug
Blockly.defineBlocksWithJsonArray([
{
  "type": "debug_solid",
  "message0": "Draw Rectangle (Debug) %1 Rectangle %2 Color %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "color",
      "align": "RIGHT"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Send any Primitive to this collection which represents things you render to the screen for debugging purposes. Primitives in this collection will not be rendered in a production release of your game.",
  "helpUrl": "http://docs.dragonruby.org/#------debug-----static_debug-"
},
{
  "type": "debug_border",
  "message0": "Draw Outlined Rectangle (Debug) %1 Rectangle %2 Color %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "color",
      "align": "RIGHT"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Send any Primitive to this collection which represents things you render to the screen for debugging purposes. Primitives in this collection will not be rendered in a production release of your game.",
  "helpUrl": "http://docs.dragonruby.org/#------debug-----static_debug-"
},
{
  "type": "debug_line",
  "message0": "Draw Line (Debug) %1 Line %2 Color %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "line",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "color",
      "align": "RIGHT"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Send any Primitive to this collection which represents things you render to the screen for debugging purposes. Primitives in this collection will not be rendered in a production release of your game.",
  "helpUrl": "http://docs.dragonruby.org/#------debug-----static_debug-"
},
{
  "type": "debug_label",
  "message0": "Draw Text (Debug) %1 X %2 Y %3 Text %4 Size %5 Horizontal Alignment %6 Vertical Alignment %7 Font Filepath %8 Color %9",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "text",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "size",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "align",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "valign",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "font",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "color",
      "align": "RIGHT"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Send any Primitive to this collection which represents things you render to the screen for debugging purposes. Primitives in this collection will not be rendered in a production release of your game.",
  "helpUrl": "http://docs.dragonruby.org/#------debug-----static_debug-"
},
{
  "type": "debug_sprite",
  "message0": "Draw Sprite (Debug) %1 Rectangle %2 Path %3 Angle %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "angle",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Send any Primitive to this collection which represents things you render to the screen for debugging purposes. Primitives in this collection will not be rendered in a production release of your game.",
  "helpUrl": "http://docs.dragonruby.org/#------debug-----static_debug-"
},
{
  "type": "debug_sprite_ex",
  "message0": "Draw Sprite (Debug, Extended) %1 Rectangle %2 Path %3 Angle %4 Source Rectangle %5 Tint %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "angle",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "source_rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "color",
      "align": "RIGHT"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Send any Primitive to this collection which represents things you render to the screen for debugging purposes. Primitives in this collection will not be rendered in a production release of your game.",
  "helpUrl": "http://docs.dragonruby.org/#------debug-----static_debug-"
},
{
  "type": "debug_sprite_full",
  "message0": "Draw Sprite (Debug, Full) %1 Rectangle %2 Path %3 Angle %4 Angle Anchor X %5 Angle Anchor Y %6 Source Rectangle %7 Tile Rectangle %8 Flip Horizontally %9 Flip Vertically %10 Tint %11",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "path",
      "check": "String",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "angle",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "angle_anchor_x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "angle_anchor_y",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "source_rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "tile_rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "hflip",
      "check": "Boolean",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "vflip",
      "check": "Boolean",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "color",
      "align": "RIGHT"
    },
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Send any Primitive to this collection which represents things you render to the screen for debugging purposes. Primitives in this collection will not be rendered in a production release of your game.",
  "helpUrl": "http://docs.dragonruby.org/#------debug-----static_debug-"
}
]);

// Easings
Blockly.defineBlocksWithJsonArray([
{
  "type": "easing_ease",
  "message0": "Ease %1 Start Tick %2 Current Tick %3 Duration %4 Easing Function %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "start_tick",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "current_tick",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "duration",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "field_dropdown",
      "name": "ease_func",
      "options": [
        [ "identity", "identity" ],
        [ "flip", "flip" ],
        [ "quad", "quad" ],
        [ "cube", "cube" ],
        [ "quart", "quart" ],
        [ "quint", "quint" ]
      ]
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Given a start, current, duration, and easing function names, ease returns a number between 0 and 1 that represents the progress of an easing function.",
  "helpUrl": "http://docs.dragonruby.org/#------ease-start_tick--current_tick--duration--easing_functions-"
},
{
  "type": "easing_ease_spline",
  "message0": "Ease Spline %1 Start Tick %2 Current Tick %3 Duration %4 Spline %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "start_tick",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "current_tick",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "duration",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "spline",
      "check": "Array",
      "align": "RIGHT"
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Given a start, current, duration, and a multiple bezier values, this function returns a number between 0 and 1 that represents the progress of an easing function.",
  "helpUrl": "http://docs.dragonruby.org/#------ease_spline-start_tick--current_tick--duration--spline-"
}
]);

// Geometry
Blockly.defineBlocksWithJsonArray([
{
  "type": "geometry_new_rect",
  "message0": "Create Rectangle %1 X %2 Y %3 Width %4 Height %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "w",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "h",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Creates a Rectangle Hash",
  "helpUrl": ""
},
{
  "type": "geometry_new_src_rect",
  "message0": "Create Source Rectangle %1 X %2 Y %3 Width %4 Height %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "w",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "h",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Creates a Source Rectangle Hash",
  "helpUrl": ""
},
{
  "type": "geometry_new_tile_rect",
  "message0": "Create Tile Rectangle %1 X %2 Y %3 Width %4 Height %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "w",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "h",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Creates a Tile Rectangle Hash",
  "helpUrl": ""
},
{
  "type": "geometry_new_line",
  "message0": "Create Line %1 X1 %2 Y1 %3 X2 %4 Y2 %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "x2",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y2",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Creates a Line Hash",
  "helpUrl": ""
},
{
  "type": "geometry_new_point",
  "message0": "Create Point %1 X %2 Y %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    },
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Creates a Point Hash",
  "helpUrl": ""
},
{
  "type": "geometry_inside_rect",
  "message0": "Rectangle inside Rectangle? %1 First Rectangle %2 Second Rectangle %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "r1",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "r2",
      "align": "RIGHT"
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Returns true if rect_1 is inside rect_2.",
  "helpUrl": "http://docs.dragonruby.org/#------inside_rect--rect_1--rect_2-"
},
{
  "type": "geometry_intersect_rect",
  "message0": "Rectangle intersects Rectangle? %1 First Rectangle %2 Second Rectangle %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "r1",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "r2",
      "align": "RIGHT"
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Returns true if rect_1 intersects rect_2.",
  "helpUrl": "http://docs.dragonruby.org/#------intersect_rect--rect_2--rect_2-"
},
{
  "type": "geometry_scale_rect_array",
  "message0": "Scale Rectangle Array %1 Array %2 Ratio %3 Anchor X %4 Anchor Y %5",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "array",
      "check": "Array",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "ratio",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "anchor_x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "anchor_y",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "Array",
  "colour": 0,
  "tooltip": "Scales array which presents a rectangle, And returns array of the rectangle scaled.",
  "helpUrl": "http://docs.dragonruby.org/#--docs---gtk--geometry#scale_rect-"
},
{
  "type": "geometry_scale_rect",
  "message0": "Scale Rectangle %1 Rectangle %2 X Percentage %3 Y Percentage X %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "xper",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "yper",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "colour": 0,
  "output": null,
  "tooltip": "Returns a new rectangle that is scaled by the percentages provided.",
  "helpUrl": "http://docs.dragonruby.org/#------scale_rect-rect--x_percentage--y_percentage-"
},
{
  "type": "geometry_angle_to",
  "message0": "Angle To %1 Start Point %2 End Point %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "start_point",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "end_point",
      "align": "RIGHT"
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Returns the angle in degrees between two points start_point to end_point.",
  "helpUrl": "http://docs.dragonruby.org/#------angle_to-start_point--end_point-"
},
{
  "type": "geometry_angle_from",
  "message0": "Angle From %1 Start Point %2 End Point %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "start_point",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "end_point",
      "align": "RIGHT"
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Returns the angle in degrees between two points start_point from end_point.",
  "helpUrl": "http://docs.dragonruby.org/#------angle_from-start_point--end_point-"
},
{
  "type": "geometry_point_inside_circle",
  "message0": "Point inside Circle? %1 Point %2 Circle Center Point %3 Radius %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "point",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "circle_center_point",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "radius",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Returns true if a point is inside a circle defined by its center and radius.",
  "helpUrl": "http://docs.dragonruby.org/#------point_inside_circle--point--circle_center_point--radius-"
},
{
  "type": "geometry_center_inside_rect",
  "message0": "Rectangle Center of Rectangle %1 First Rectangle %2 Second Rectangle %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "r1",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "r2",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns a new rectangle based of off rect that is centered inside of other_rect.",
  "helpUrl": "http://docs.dragonruby.org/#------center_inside_rect-rect--other_rect-"
},
{
  "type": "geometry_center_inside_rect_x",
  "message0": "Rectangle Center of Rectangle X %1 First Rectangle %2 Second Rectangle %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "r1",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "r2",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns a new rectangle based of off rect that is centered horizontally inside of other_rect.",
  "helpUrl": "http://docs.dragonruby.org/#------center_inside_rect_x-rect--other_rect-"
},
{
  "type": "geometry_center_inside_rect_y",
  "message0": "Rectangle Center of Rectangle Y %1 First Rectangle %2 Second Rectangle %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "r1",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "r2",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns a new rectangle based of off rect that is centered vertically inside of other_rect.",
  "helpUrl": "http://docs.dragonruby.org/#------center_inside_rect_y-rect--other_rect-"
},
{
  "type": "geometry_anchor_rect",
  "message0": "Anchor Rectangle of Rectangle %1 Rectangle %2 Anchor X %3 Anchor Y %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "rect",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "anchor_x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "anchor_y",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns a new rectangle based of off rect that has been repositioned based on the percentages passed into anchor_x, and anchor_y.",
  "helpUrl": "http://docs.dragonruby.org/#------anchor_rect-rect--anchor_x--anchor_y-"
},
{
  "type": "geometry_shift_line",
  "message0": "Shifted Line %1 Line %2 Offset X %3 Offset Y %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "line",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "x",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "y",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns a line that is offset by x, and y.",
  "helpUrl": "http://docs.dragonruby.org/#------shift_line-line--x--y-"
},
{
  "type": "geometry_line_y_intercept",
  "message0": "Line Y Interception of Line %1",
  "args0": [
    {
      "type": "input_value",
      "name": "line",
      "align": "RIGHT"
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Given a line, the b value is determined for the point slope form equation: y = mx + b.",
  "helpUrl": "http://docs.dragonruby.org/#------line_y_intercept-line-"
},
{
  "type": "geometry_angle_between_lines",
  "message0": "Angle between Lines %1 First Line %2 Second Line %3 Infinity Replacement %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "line1",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "line2",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "infinity_replacement",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Returns the angle between two lines as if they were infinitely long. A numeric value can be passed in for the last parameter which would represent lines that do not intersect.",
  "helpUrl": "http://docs.dragonruby.org/#------angle_between_lines-line_one--line_two--replace_infinity--"
},
{
  "type": "geometry_line_slope",
  "message0": "Line Slope %1 Line %2 Infinity Replacement %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "line",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "infinity_replacement",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Given a line, the m value is determined for the point slope form equation: y = mx + b.",
  "helpUrl": "http://docs.dragonruby.org/#------line_slope-line--replace_infinity--"
},
{
  "type": "geometry_line_rise_run",
  "message0": "Line Rise of Line %1",
  "args0": [
    {
      "type": "input_value",
      "name": "line",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Given a line, a Hash is returned that returns the slope as x and y properties with normalized values (the number is between -1 and 1).",
  "helpUrl": "http://docs.dragonruby.org/#------line_rise_run-"
},
{
  "type": "geometry_ray_test",
  "message0": "Ray Test %1 Point %2 Line %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "point",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "line",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Given a point and a line, :on, :left, or :right which represents the location of the point relative to the line.",
  "helpUrl": "http://docs.dragonruby.org/#------ray_test-point--line-"
},
{
  "type": "geometry_line_rect",
  "message0": "Bounding Rectangle for Line %1",
  "args0": [
    {
      "type": "input_value",
      "name": "line",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns the bounding rectangle for a line.",
  "helpUrl": "http://docs.dragonruby.org/#------line_rect-line-"
},
{
  "type": "geometry_line_intersect",
  "message0": "Lines Intersection %1 First Line %2 Second Line %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "line1",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "line2",
      "align": "RIGHT"
    },
  ],
  "colour": 0,
  "output": null,
  "tooltip": "Returns a point that represents the intersection of the lines.",
  "helpUrl": "http://docs.dragonruby.org/#------line_intersect-line_one--line_two-"
},
{
  "type": "geometry_distance",
  "message0": "Distance between Points %1 First Point %2 Second Point %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "point1",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "point2",
      "align": "RIGHT"
    },
  ],
  "colour": 0,
  "output": "Number",
  "tooltip": "Returns the distance between two points.",
  "helpUrl": "http://docs.dragonruby.org/#------distance-point_one--point_two-"
},
{
  "type": "geometry_cubic_bezier",
  "message0": "Cubic Bezier %1 Tick/Time %2 First Value %3 Second Value %4 Third Value %5 Fourth Value %6",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "t",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "a",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "b",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "c",
      "check": "Number",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "d",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Returns the cubic bezier function for tick_count t with anchors a, b, c, and d.",
  "helpUrl": "http://docs.dragonruby.org/#------cubic_bezier-t--a--b--c--d-"
}
]);

// Touch
Blockly.defineBlocksWithJsonArray([
{
  "type": "touch_finger_down",
  "message0": "%1 finger down?",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "finger",
      "options": [
        [ "first", "finger_one" ],
        [ "second", "finger_two" ],
      ]
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Is first or second finger down?",
  "helpUrl": ""
},
{
  "type": "touch_finger_x",
  "message0": "%1 finger X",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "finger",
      "options": [
        [ "first", "finger_one" ],
        [ "second", "finger_two" ],
      ]
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "X position of first or second finger.",
  "helpUrl": ""
},
{
  "type": "touch_finger_y",
  "message0": "%1 finger Y",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "finger",
      "options": [
        [ "first", "finger_one" ],
        [ "second", "finger_two" ],
      ]
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Y position of first or second finger.",
  "helpUrl": ""
},
{
  "type": "touch_foreach_touches",
  "message0": "Foreach touch With %1 %2 Do %3 %4",
  "args0": [
    {
      "type": "field_variable",
      "name": "index",
      "variable": "k"
    },
    {
      "type": "field_variable",
      "name": "touch",
      "variable": "v"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "nextStatement": null,
  "previousStatement": null,
  "colour": 0,
  "tooltip": "Iterate over existing touches, Useful if you wanna to use +2 fingers!",
  "helpUrl": ""
}
]);

// Mouse
Blockly.defineBlocksWithJsonArray([
{
  "type": "mouse_button_state",
  "message0": "Mouse button %1 %2 ?",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "button",
      "options": [
        [
          "left",
          "button_left"
        ],
        [
          "middle",
          "button_middle"
        ],
        [
          "right",
          "button_right"
        ],
        [
          "any",
          "any"
        ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "state",
      "options": [
        [
          "clicked",
          "click"
        ],
        [
          "previously_clicked",
          "previous_click"
        ],
        [
          "down",
          "down"
        ],
        [
          "up",
          "up"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Checks state of Mouse button.",
  "helpUrl": "http://docs.dragonruby.org/#------mouse-"
},
{
  "type": "mouse_get",
  "message0": "Mouse %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "member",
      "options": [
        [
          "X",
          "x"
        ],
        [
          "Y",
          "y"
        ],
        [
          "Wheel X",
          "wheel.x"
        ],
        [
          "Wheel Y",
          "wheel.y"
        ],
        [
          "Button Bits",
          "button_bits"
        ]
      ]
    }
  ],
  "output": [ "Number", "Array" ],
  "colour": 0,
  "tooltip": "Gets a mouse member (Position X/Y, Wheel X/Y, Bits)",
  "helpUrl": ""
},
{
  "type": "mouse_moving",
  "message0": "Mouse Moving?",
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Returns true if the mouse has moved on the current frame.",
  "helpUrl": "http://docs.dragonruby.org/#------mouse-"
},
{
  "type": "mouse_inside_rect",
  "message0": "Mouse inside Rectangle? %1",
  "args0": [
    {
      "type": "input_value",
      "name": "rect"
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "args.inputs.mouse.inside_rect? takes in any primitive that responds to x, y, w, h.",
  "helpUrl": "http://docs.dragonruby.org/#------mouse-"
},
{
  "type": "mouse_inside_circle",
  "message0": "Mouse inside Circle? %1 Circle Center Point %2 Radius %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "circle_center",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "radius",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Returns true if the mouse is inside of a specified circle. args.inputs.mouse.inside_circle? takes in any primitive that responds to x, y (which represents the circle's center), and takes in a radius.",
  "helpUrl": "http://docs.dragonruby.org/#------mouse-"
}
]);

// Joystick
Blockly.defineBlocksWithJsonArray([
{
  "type": "joystick_connected",
  "message0": "%1 Joystick Connected?",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "joystick",
      "options": [
        [
          "first",
          "controller_one"
        ],
        [
          "second",
          "controller_two"
        ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Returns true if first or second Joystick connected, Else returns false.",
  "helpUrl": "http://docs.dragonruby.org/#------controller_one-----controller_two-"
},
{
  "type": "joystick_button_state",
  "message0": "Joystick button %1 from %2 Joystick %3 ?",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "button",
      "options": [
        [ "DPAD Up", "directional_up" ],
        [ "DPAD Down", "directional_down" ],
        [ "DPAD Left", "directional_left" ],
        [ "DPAD Right", "directional_right" ],
        [ "A", "a" ],
        [ "B", "b" ],
        [ "X", "x" ],
        [ "Y", "y" ],
        [ "L1", "l1" ],
        [ "R1", "r1" ],
        [ "L2", "l2" ],
        [ "R2", "r2" ],
        [ "L3", "l3" ],
        [ "R3", "r3" ],
        [ "Start", "start" ],
        [ "Select", "select" ],
        [ "Home", "home" ],
        [ "Guide", "guide" ],
      ]
    },
    {
      "type": "field_dropdown",
      "name": "joystick",
      "options": [
        [ "first", "controller_one" ],
        [ "second", "controller_two" ],
      ]
    },
    {
      "type": "field_dropdown",
      "name": "state",
      "options": [
        [ "down", "key_down" ],
        [ "up", "key_up" ],
        [ "held", "key_held" ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Checks state of Joystick button.",
  "helpUrl": "http://docs.dragonruby.org/#------controller_one-----controller_two-"
},
{
  "type": "joystick_analog_state",
  "message0": "Get %1 of %2 Analog in %3 Joystick",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "analog_property",
      "options": [
        [ "X", "x_perc" ],
        [ "Y", "y_perc" ],
        [ "Raw X", "x_raw" ],
        [ "Raw Y", "y_raw" ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "analog",
      "options": [
        [ "left", "left_analog" ],
        [ "right", "right_analog" ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "joystick",
      "options": [
        [ "first", "controller_one" ],
        [ "second", "controller_two" ]
      ]
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Returns value of Joystick's Analog Axis.",
  "helpUrl": "http://docs.dragonruby.org/#------controller_one-----controller_two-"
},
{
  "type": "joystick_direction_state",
  "message0": "Get %1 direction value in %2 Joystick",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "direction",
      "options": [
        [ "left-right", "left_right" ],
        [ "up-down", "up_down" ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "joystick",
      "options": [
        [ "first", "controller_one" ],
        [ "second", "controller_two" ]
      ]
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Returns value of Joystick's directional X/Y Axis.",
  "helpUrl": "http://docs.dragonruby.org/#------controller_one-----controller_two-"
}
]);

// Keyboard
Blockly.defineBlocksWithJsonArray([
{
  "type": "keyboard_key_state",
  "message0": "Keyboard key %1 %2 ?",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "key",
      "options": [
        [ "Alt", "alt" ],
        [ "Meta", "meta" ],
        [ "Control", "control" ],
        [ "Shift", "shift" ],
        [ "Exclamation", "exclamation_point" ],
        [ "Zero", "zero" ],
        [ "One", "one" ],
        [ "Two", "two" ],
        [ "Three", "three" ],
        [ "Four", "four" ],
        [ "Five", "five" ],
        [ "Six", "six" ],
        [ "Seven", "seven" ],
        [ "Eight", "eight" ],
        [ "Nine", "nine" ],
        [ "Backspace", "backspace" ],
        [ "Delete", "delete" ],
        [ "Escape", "escape" ],
        [ "Enter", "enter" ],
        [ "Tab", "tab" ],
        [ "Open Round Brace", "open_round_brace" ],
        [ "Close Round Brace", "close_round_brace" ],
        [ "Open Curly Brace", "open_curly_brace" ],
        [ "Close Curly Brace", "close_curly_brace" ],
        [ "Open Square Brace", "open_square_brace" ],
        [ "Close Square Brace", "close_square_brace" ],
        [ "Colon", "colon" ],
        [ "Semicolon", "semicolon" ],
        [ "Equal", "equal_sign" ],
        [ "Hyphen", "hyphen" ],
        [ "Space", "space" ],
        [ "Dollar", "dollar_sign" ],
        [ "Double Quote", "double_quotation_mark" ],
        [ "Single Quote", "single_quotation_mark" ],
        [ "Backtick", "backtick" ],
        [ "Tilde", "tilde" ],
        [ "Period", "period" ],
        [ "Comma", "comma" ],
        [ "Pipe", "pipe" ],
        [ "Underscore", "underscore" ],
        [ "A", "a" ],
        [ "B", "b" ],
        [ "C", "c" ],
        [ "D", "d" ],
        [ "E", "e" ],
        [ "F", "f" ],
        [ "G", "g" ],
        [ "H", "h" ],
        [ "I", "i" ],
        [ "J", "j" ],
        [ "K", "k" ],
        [ "L", "l" ],
        [ "M", "m" ],
        [ "N", "n" ],
        [ "O", "o" ],
        [ "P", "p" ],
        [ "Q", "q" ],
        [ "R", "r" ],
        [ "S", "s" ],
        [ "T", "t" ],
        [ "U", "u" ],
        [ "V", "v" ],
        [ "W", "w" ],
        [ "X", "x" ],
        [ "Y", "y" ],
        [ "Z", "z" ],
        [ "Left", "left" ],
        [ "Right", "right" ],
        [ "Up", "up" ],
        [ "Down", "down" ],
        [ "Page Up", "pageup" ],
        [ "Page Down", "pagedown" ],
        [ "Any Character", "char" ],
        [ "Plus", "plus" ],
        [ "At", "at" ],
        [ "Forward Slash", "forward_slash" ],
        [ "Back Slash", "back_slash" ],
        [ "Asterisk", "asterisk" ],
        [ "Less Than", "less_than" ],
        [ "Greater Than", "greater_than" ],
        [ "Carat", "carat" ],
        [ "Ampersand", "ampersand" ],
        [ "Superscript Two", "superscript_two" ],
        [ "Circumflex", "circumflex" ],
        [ "Question", "question_mark" ],
        [ "Section", "section_sign" ],
        [ "Section", "section_sign" ],
        [ "Ordinal", "ordinal_indicator" ],
        [ "Left/Right", "left_right" ],
        [ "Up/Down", "up_down" ],
        [ "Directional", "directional_vector" ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "state",
      "options": [
        [ "down", "key_down" ],
        [ "up", "key_up" ],
        [ "held", "key_held" ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Checks state of Keyboard key.",
  "helpUrl": "http://docs.dragonruby.org/#------keyboard-"
},
{
  "type": "keyboard_ctrl_state",
  "message0": "Keyboard CTRL key with key %1 %2 ?",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "key",
      "options": [
        [ "Alt", "alt" ],
        [ "Meta", "meta" ],
        [ "Control", "control" ],
        [ "Shift", "shift" ],
        [ "Exclamation", "exclamation_point" ],
        [ "Zero", "zero" ],
        [ "One", "one" ],
        [ "Two", "two" ],
        [ "Three", "three" ],
        [ "Four", "four" ],
        [ "Five", "five" ],
        [ "Six", "six" ],
        [ "Seven", "seven" ],
        [ "Eight", "eight" ],
        [ "Nine", "nine" ],
        [ "Backspace", "backspace" ],
        [ "Delete", "delete" ],
        [ "Escape", "escape" ],
        [ "Enter", "enter" ],
        [ "Tab", "tab" ],
        [ "Open Round Brace", "open_round_brace" ],
        [ "Close Round Brace", "close_round_brace" ],
        [ "Open Curly Brace", "open_curly_brace" ],
        [ "Close Curly Brace", "close_curly_brace" ],
        [ "Open Square Brace", "open_square_brace" ],
        [ "Close Square Brace", "close_square_brace" ],
        [ "Colon", "colon" ],
        [ "Semicolon", "semicolon" ],
        [ "Equal", "equal_sign" ],
        [ "Hyphen", "hyphen" ],
        [ "Space", "space" ],
        [ "Dollar", "dollar_sign" ],
        [ "Double Quote", "double_quotation_mark" ],
        [ "Single Quote", "single_quotation_mark" ],
        [ "Backtick", "backtick" ],
        [ "Tilde", "tilde" ],
        [ "Period", "period" ],
        [ "Comma", "comma" ],
        [ "Pipe", "pipe" ],
        [ "Underscore", "underscore" ],
        [ "A", "a" ],
        [ "B", "b" ],
        [ "C", "c" ],
        [ "D", "d" ],
        [ "E", "e" ],
        [ "F", "f" ],
        [ "G", "g" ],
        [ "H", "h" ],
        [ "I", "i" ],
        [ "J", "j" ],
        [ "K", "k" ],
        [ "L", "l" ],
        [ "M", "m" ],
        [ "N", "n" ],
        [ "O", "o" ],
        [ "P", "p" ],
        [ "Q", "q" ],
        [ "R", "r" ],
        [ "S", "s" ],
        [ "T", "t" ],
        [ "U", "u" ],
        [ "V", "v" ],
        [ "W", "w" ],
        [ "X", "x" ],
        [ "Y", "y" ],
        [ "Z", "z" ],
        [ "Left", "left" ],
        [ "Right", "right" ],
        [ "Up", "up" ],
        [ "Down", "down" ],
        [ "Page Up", "pageup" ],
        [ "Page Down", "pagedown" ],
        [ "Any Character", "char" ],
        [ "Plus", "plus" ],
        [ "At", "at" ],
        [ "Forward Slash", "forward_slash" ],
        [ "Back Slash", "back_slash" ],
        [ "Asterisk", "asterisk" ],
        [ "Less Than", "less_than" ],
        [ "Greater Than", "greater_than" ],
        [ "Carat", "carat" ],
        [ "Ampersand", "ampersand" ],
        [ "Superscript Two", "superscript_two" ],
        [ "Circumflex", "circumflex" ],
        [ "Question", "question_mark" ],
        [ "Section", "section_sign" ],
        [ "Section", "section_sign" ],
        [ "Ordinal", "ordinal_indicator" ],
        [ "Left/Right", "left_right" ],
        [ "Up/Down", "up_down" ],
        [ "Directional", "directional_vector" ]
      ]
    },
    {
      "type": "field_dropdown",
      "name": "state",
      "options": [
        [ "down", "key_down" ],
        [ "up", "key_up" ],
        [ "held", "key_held" ]
      ]
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Checks state of Keyboard key along with CTRL.",
  "helpUrl": "http://docs.dragonruby.org/#------keyboard-"
},
{
  "type": "keyboard_direction_state",
  "message0": "Get %1 direction value in Keyboard",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "direction",
      "options": [
        [ "left-right", "left_right" ],
        [ "up-down", "up_down" ]
      ]
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Returns value of keyboard directional keys.",
  "helpUrl": "http://docs.dragonruby.org/#------keyboard-"
},
{
  "type": "keyboard_char_keys",
  "message0": "Keyboard pressed keys",
  "output": "Array",
  "colour": 0,
  "tooltip": "Returns an Array consists of pressed keys as chars.",
  "helpUrl": "http://docs.dragonruby.org/#------text--or---history-"
}
]);

// Essentials
Blockly.defineBlocksWithJsonArray([
{
  "type": "comment",
  "message0": "Comment %1",
  "args0": [
    {
      "type": "field_input",
      "name": "comment",
      "text": ""
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Adds a Single-Line comment into the code.",
  "helpUrl": ""
},
{
  "type": "return",
  "message0": "Return %1",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
    }
  ],
  "nextStatement": null,
  "previousStatement": null,
  "colour": 0,
  "tooltip": "Returns expression.",
  "helpUrl": ""
},
{
  "type": "require",
  "message0": "Require %1",
  "args0": [
    {
      "type": "input_value",
      "name": "path",
      "check": "String"
    }
  ],
  "nextStatement": null,
  "previousStatement": null,
  "colour": 0,
  "tooltip": "Require a Ruby module.",
  "helpUrl": ""
},
{
  "type": "eval_noreturn",
  "message0": "Eval Ruby Code %1",
  "args0": [
    {
      "type": "input_value",
      "name": "code",
      "check": "String"
    }
  ],
  "nextStatement": null,
  "previousStatement": null,
  "colour": 0,
  "tooltip": "Evals Ruby Code, With no return result.",
  "helpUrl": ""
},
{
  "type": "eval",
  "message0": "Eval Ruby Code %1",
  "args0": [
    {
      "type": "input_value",
      "name": "code",
      "check": "String"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Evals Ruby Code, With return result.",
  "helpUrl": ""
},
{
  "type": "join",
  "message0": "Join %1",
  "args0": [
    {
      "type": "input_value",
      "name": "args",
      "check": "Array"
    }
  ],
  "output": "String",
  "colour": 0,
  "tooltip": "Joins arguments which is array via .join and returns a String, Can be useful for concation.",
  "helpUrl": ""
},
{
  "type": "color_hex_to_color_hash",
  "message0": "Convert Hex String Color %1 to Color Hash",
  "args0": [
    {
      "type": "input_value",
      "name": "hex",
      "check": [ "String", "Colour" ]
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Converts Color Hex String (Blockly Color) to Hash (DragonRuby Color)",
  "helpUrl": ""
},
{
  "type": "color_hash_to_color_hex",
  "message0": "Convert Color Hash %1 to Color Hex String",
  "args0": [
    {
      "type": "input_value",
      "name": "hash",
    }
  ],
  "output": [ "String", "Colour" ],
  "colour": 0,
  "tooltip": "Converts Hash (DragonRuby Color) to Color Hex String (Blockly Color)",
  "helpUrl": ""
},
{
  "type": "to_a",
  "message0": "Convert %1 to Array",
  "args0": [
    {
      "type": "input_value",
      "name": "var"
    }
  ],
  "output": "Array",
  "colour": 0,
  "tooltip": "Converts variable to Array.",
  "helpUrl": ""
},
{
  "type": "to_f",
  "message0": "Convert %1 to Float",
  "args0": [
    {
      "type": "input_value",
      "name": "var"
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Converts variable to Float.",
  "helpUrl": ""
},
{
  "type": "to_h",
  "message0": "Convert %1 to Hash",
  "args0": [
    {
      "type": "input_value",
      "name": "var"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Converts variable to Hash.",
  "helpUrl": ""
},
{
  "type": "to_i",
  "message0": "Convert to Integer %1 Variable/Value %2 Base %3",
  "args0": [
    {
      "type": "input_dummy"
    },      
    {
      "type": "input_value",
      "name": "var",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "base",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Converts variable to Integer with Base.",
  "helpUrl": ""
},
{
  "type": "to_s",
  "message0": "Convert to String %1 Variable/Value %2 Base %3",
  "args0": [
    {
      "type": "input_dummy"
    },      
    {
      "type": "input_value",
      "name": "var",
      "align": "RIGHT" 
    },
    {
      "type": "input_value",
      "name": "base",
      "align": "RIGHT",
      "check": "Number"
    }
  ],
  "output": "String",
  "colour": 0,
  "tooltip": "Converts variable to String with Base.",
  "helpUrl": ""
},
{
  "type": "to_sym",
  "message0": "Convert %1 to Hash Symbol",
  "args0": [
    {
      "type": "input_value",
      "name": "var"
    }
  ],
  "output": "String",
  "colour": 0,
  "tooltip": "Converts variable to Hash Symbol.",
  "helpUrl": ""
},
{
  "type": "as_hash",
  "message0": "Cast Entity %1 to Hash",
  "args0": [
    {
      "type": "input_value",
      "name": "var"
    }
  ],
  "output": "String",
  "colour": 0,
  "tooltip": "Entity cast to a Hash so you can update values as if you were updating a Hash.",
  "helpUrl": "http://docs.dragonruby.org/#--------as_hash-"
}
]);

// Hash
Blockly.defineBlocksWithJsonArray([
{
  "type": "hash_new",
  "message0": "Create new Hash",
  "output": null,
  "colour": 0,
  "tooltip": "Returns an empty Hash",
  "helpUrl": ""
},
{
  "type": "hash_sym",
  "message0": "Hash Symbol %1",
  "args0": [
    {
      "type": "field_input",
      "name": "sym",
      "text": ""
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns a Hash Symbol, This can be used for Properties of Hash if key is not a String.",
  "helpUrl": ""
},
{
  "type": "hash_get",
  "message0": "Get Hash Key %1 Hash %2 Key %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "hash",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "key",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns value of key from Hash.",
  "helpUrl": ""
},
{
  "type": "hash_set",
  "message0": "Set Hash Key %1 Hash %2 Key %3 Value %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "hash",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "key",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "value",
      "align": "RIGHT"
    }
  ],
  "nextStatement": null,
  "previousStatement": null,
  "colour": 0,
  "tooltip": "Sets value of key from Hash.",
  "helpUrl": ""
},
{
  "type": "hash_clear",
  "message0": "Clear Hash %1",
  "args0": [
    {
      "type": "input_value",
      "name": "hash",
      "align": "RIGHT"
    }
  ],
  "nextStatement": null,
  "previousStatement": null,
  "colour": 0,
  "tooltip": "Clears a Hash.",
  "helpUrl": ""
},
{
  "type": "hash_delete_noreturn",
  "message0": "Delete Hash Key %1 Hash %2 Key %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "hash",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "key",
      "align": "RIGHT"
    }
  ],
  "nextStatement": null,
  "previousStatement": null,
  "colour": 0,
  "tooltip": "Deletes key from Hash, This version does not returns value of deleted key.",
  "helpUrl": ""
},
{
  "type": "hash_delete",
  "message0": "Delete Hash Key %1 Hash %2 Key %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "hash",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "key",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Deletes key from Hash, This version returns value of deleted key.",
  "helpUrl": ""
},
{
  "type": "hash_empty",
  "message0": "Hash %1 Empty?",
  "args0": [
    {
      "type": "input_value",
      "name": "hash",
    },
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Returns true if Hash is empty, Else returns false.",
  "helpUrl": ""
},
{
  "type": "hash_key_exist",
  "message0": "Hash Key Exist? %1 Hash %2 Key %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "hash",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "key",
      "align": "RIGHT"
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Returns true if key in Hash exists, Else returns false.",
  "helpUrl": ""
},
{
  "type": "hash_value_exist",
  "message0": "Hash Key Value Exist? %1 Hash %2 Value %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "hash",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "value",
      "align": "RIGHT"
    }
  ],
  "output": "Boolean",
  "colour": 0,
  "tooltip": "Returns true if value in Hash exists, Else returns false.",
  "helpUrl": ""
},
{
  "type": "hash_length",
  "message0": "Length of Hash %1",
  "args0": [
    {
      "type": "input_value",
      "name": "hash",
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Returns length/size of Hash.",
  "helpUrl": ""
},
{
  "type": "hash_each",
  "message0": "Foreach in Hash %1 with %2 and %3 do %4 %5",
  "args0": [
    {
      "type": "input_value",
      "name": "hash",
    },
    {
      "type": "field_variable",
      "name": "key",
      "variable": "key"
    },
    {
      "type": "field_variable",
      "name": "value",
      "variable": "value"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "statements"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Iterate over Hash's keys and their values.",
  "helpUrl": ""
},
{
  "type": "hash_hash",
  "message0": "Computed hash-code of Hash %1",
  "args0": [
    {
      "type": "input_value",
      "name": "hash",
    }
  ],
  "output": "Number",
  "colour": 0,
  "tooltip": "Returns computed hash-code of Hash.",
  "helpUrl": ""
},
{
  "type": "hash_keys",
  "message0": "Keys of Hash %1",
  "args0": [
    {
      "type": "input_value",
      "name": "hash",
    }
  ],
  "output": "Array",
  "colour": 0,
  "tooltip": "Returns keys of Hash in Array.",
  "helpUrl": ""
},
{
  "type": "hash_values",
  "message0": "Values of Hash %1",
  "args0": [
    {
      "type": "input_value",
      "name": "hash",
    }
  ],
  "output": "Array",
  "colour": 0,
  "tooltip": "Returns key values of Hash in Array.",
  "helpUrl": ""
},
{
  "type": "hash_deleteif_noreturn",
  "message0": "Foreach in Hash %1 with %2 and %3 delete key if %4 %5",
  "args0": [
    {
      "type": "input_value",
      "name": "hash"
    },
    {
      "type": "field_variable",
      "name": "key",
      "variable": "key"
    },
    {
      "type": "field_variable",
      "name": "value",
      "variable": "value"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "condition",
      "check": "Boolean"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Iterates over Hash and deletes keys depending on condition, This version does not return deleted stuff.",
  "helpUrl": ""
},
{
  "type": "hash_deleteif",
  "message0": "Foreach in Hash %1 with %2 and %3 delete key if %4 %5",
  "args0": [
    {
      "type": "input_value",
      "name": "hash"
    },
    {
      "type": "field_variable",
      "name": "key",
      "variable": "key"
    },
    {
      "type": "field_variable",
      "name": "value",
      "variable": "value"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "condition",
      "check": "Boolean"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Iterates over Hash and deletes keys depending on condition, This version returns deleted stuff.",
  "helpUrl": ""
},
{
  "type": "hash_keepif_noreturn",
  "message0": "Foreach in Hash %1 with %2 and %3 keep key if %4 %5",
  "args0": [
    {
      "type": "input_value",
      "name": "hash"
    },
    {
      "type": "field_variable",
      "name": "key",
      "variable": "key"
    },
    {
      "type": "field_variable",
      "name": "value",
      "variable": "value"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "condition",
      "check": "Boolean"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Iterates over Hash and retrieves keys depending on condition, This version does not return deleted stuff.",
  "helpUrl": ""
},
{
  "type": "hash_keepif",
  "message0": "Foreach in Hash %1 with %2 and %3 keep key if %4 %5",
  "args0": [
    {
      "type": "input_value",
      "name": "hash"
    },
    {
      "type": "field_variable",
      "name": "key",
      "variable": "key"
    },
    {
      "type": "field_variable",
      "name": "value",
      "variable": "value"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "condition",
      "check": "Boolean"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Iterates over Hash and retrieves keys depending on condition, This version returns deleted stuff.",
  "helpUrl": ""
},
{
  "type": "hash_key_by_value",
  "message0": "Hash Key from Value %1 Hash %2 Value %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "hash",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "value",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns Hash key from Value.",
  "helpUrl": ""
},
{
  "type": "hash_merge_noreturn",
  "message0": "Merge Hash with Hash %1 First Hash %2 Second Hash %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "hash1",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "hash2",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Merges Hash with another Hash, This does not return value but affects first Hash by merge.",
  "helpUrl": ""
},
{
  "type": "hash_merge",
  "message0": "Merge Hash with Hash %1 First Hash %2 Second Hash %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "hash1",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "hash2",
      "align": "RIGHT"
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns Hash resulted by merging Hash with another Hash.",
  "helpUrl": ""
},
{
  "type": "hash_invert",
  "message0": "Inversion of Hash %1",
  "args0": [
    {
      "type": "input_value",
      "name": "hash",
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Returns the Hash inverted.",
  "helpUrl": ""
},
{
  "type": "hash_flatten",
  "message0": "Flattening of Hash %1 Hash %2 Level %3",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "hash",
      "align": "RIGHT"
    },
    {
      "type": "input_value",
      "name": "level",
      "check": "Number",
      "align": "RIGHT"
    }
  ],
  "output": "Array",
  "colour": 0,
  "tooltip": "Returns a new Array that is flattening of Hash.",
  "helpUrl": ""
}
]);

// C Extensions
Blockly.defineBlocksWithJsonArray([
{
  "type": "cext_load",
  "message0": "Load C Extension %1",
  "args0": [
    {
      "type": "input_value",
      "name": "extname",
      "check": "String",
      "align": "RIGHT"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Loads a C extension for usage.",
  "helpUrl": ""
},
{
  "type": "cext_call_noreturn",
  "message0": "Call C function %1 with arguments %2",
  "args0": [
    {
      "type": "field_input",
      "name": "funcname",
      "text": ""
    },
    {
      "type": "field_input",
      "name": "args",
      "text": ""
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 0,
  "tooltip": "Calls a C function from loaded C extension with arguments.",
  "helpUrl": ""
},
{
  "type": "cext_call",
  "message0": "Call C function %1 with arguments %2",
  "args0": [
    {
      "type": "field_input",
      "name": "funcname",
      "text": ""
    },
    {
      "type": "field_input",
      "name": "args",
      "text": ""
    }
  ],
  "output": null,
  "colour": 0,
  "tooltip": "Calls a C function from loaded C extension with arguments.",
  "helpUrl": ""
}
]);
