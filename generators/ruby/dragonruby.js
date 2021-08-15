// Runtime
Blockly.Ruby.gtk_state = function(block) {
  return ["$gtk.args.state", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_current_framerate = function(block) {
  return ["$gtk.current_framerate", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_tick_count = function(block) {
  return ["$gtk.tick_count", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_argv = function(block) {
  return ["$gtk.argv", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_platform = function(block) {
  return ["$gtk.platform", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_request_quit = function(block) {
  return "$gtk.request_quit\n";
};

Blockly.Ruby.gtk_write_file = function(block) {
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  var content = Blockly.Ruby.valueToCode(block, 'content', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.write_file(" + path + "," + content + ")\n";
};

Blockly.Ruby.gtk_write_file_root = function(block) {
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  var content = Blockly.Ruby.valueToCode(block, 'content', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.write_file_root(" + path + "," + content + ")\n";
};

Blockly.Ruby.gtk_read_file = function(block) {
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.read_file(" + path + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_parse_xml = function(block) {
  var str = Blockly.Ruby.valueToCode(block, 'string', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.parse_xml(" + str + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_parse_xml_file = function(block) {
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.parse_xml_file(" + path + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_parse_json = function(block) {
  var str = Blockly.Ruby.valueToCode(block, 'string', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.parse_json(" + str + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_parse_json_file = function(block) {
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.parse_json_file(" + path + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_http_get = function(block) {
  var url = Blockly.Ruby.valueToCode(block, 'url', Blockly.Ruby.ORDER_ATOMIC);
  var extra_headers = Blockly.Ruby.valueToCode(block, 'extra_headers', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.http_get(" + url + "," + extra_headers + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_http_post = function(block) {
  var url = Blockly.Ruby.valueToCode(block, 'url', Blockly.Ruby.ORDER_ATOMIC);
  var form_fields = Blockly.Ruby.valueToCode(block, 'form_fields', Blockly.Ruby.ORDER_ATOMIC);
  var extra_headers = Blockly.Ruby.valueToCode(block, 'extra_headers', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.http_post(" + url + "," + form_fields + "," + extra_headers + ")\n";
};

Blockly.Ruby.gtk_reset = function(block) {
  return "$gtk.reset\n";
};

Blockly.Ruby.gtk_stop_music = function(block) {
  return "$gtk.stop_music\n";
};

Blockly.Ruby.gtk_calcstringbox = function(block) {
  var string = Blockly.Ruby.valueToCode(block, 'string', Blockly.Ruby.ORDER_ATOMIC);
  var size_enum = Blockly.Ruby.valueToCode(block, 'size_enum', Blockly.Ruby.ORDER_ATOMIC);
  var font = Blockly.Ruby.valueToCode(block, 'font', Blockly.Ruby.ORDER_ATOMIC);
  var fontres = "";
  
  if (font === "" || font === "nil") {
    fontres = "";
  } else {
    fontres = "," + font;
  }
  
  return ["$gtk.calcstringbox(" + string + "," + size_enum + fontres + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_slowmo = function(block) {
  var factor = Blockly.Ruby.valueToCode(block, 'factor', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.slowmo!(" + factor + ")\n";
};

Blockly.Ruby.gtk_notify = function(block) {
  var msg = Blockly.Ruby.valueToCode(block, 'msg', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.notify!(" + msg + ")\n";
};

Blockly.Ruby.gtk_system = function(block) {
  var cmd = Blockly.Ruby.valueToCode(block, 'command', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.system(" + cmd + ")\n";
};

Blockly.Ruby.gtk_exec = function(block) {
  var cmd = Blockly.Ruby.valueToCode(block, 'command', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.exec(" + cmd + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_save_state = function(block) {
  return "$gtk.save_state\n";
};

Blockly.Ruby.gtk_load_state = function(block) {
  return "$gtk.load_state\n";
};

Blockly.Ruby.gtk_serialize = function(block) {
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  var state = Blockly.Ruby.valueToCode(block, 'state', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.serialize_state(" + path + "," + state + ")\n";
};

Blockly.Ruby.gtk_deserialize = function(block) {
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.deserialize_state(" + path + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_reset_sprite = function(block) {
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.reset_sprite(" + path + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_show_cursor = function(block) {
  return "$gtk.show_cursor\n";
};

Blockly.Ruby.gtk_hide_cursor = function(block) {
  return "$gtk.hide_cursor\n";
};

Blockly.Ruby.gtk_cursor_shown = function(block) {
  return ["$gtk.cursor_shown?", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_set_window_fullscreen = function(block) {
  var enabled = Blockly.Ruby.valueToCode(block, 'enabled', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.set_window_fullscreen(" + enabled + ")\n";
};

Blockly.Ruby.gtk_openurl = function(block) {
  var url = Blockly.Ruby.valueToCode(block, 'url', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.openurl(" + enabled + ")\n";
};

Blockly.Ruby.gtk_get_base_dir = function(block) {
  return ["$gtk.get_base_dir", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.gtk_get_game_dir = function(block) {
  return ["$gtk.get_game_dir", Blockly.Ruby.ORDER_ATOMIC];
};

// Audio
Blockly.Ruby.args_audio_play = function(block) {
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  var audio_name = Blockly.Ruby.valueToCode(block, 'audio_name', Blockly.Ruby.ORDER_ATOMIC);
  var x = Blockly.Ruby.valueToCode(block, 'x', Blockly.Ruby.ORDER_ATOMIC);
  var y = Blockly.Ruby.valueToCode(block, 'y', Blockly.Ruby.ORDER_ATOMIC);
  var z = Blockly.Ruby.valueToCode(block, 'z', Blockly.Ruby.ORDER_ATOMIC);
  var gain = Blockly.Ruby.valueToCode(block, 'gain', Blockly.Ruby.ORDER_ATOMIC);
  var pitch = Blockly.Ruby.valueToCode(block, 'pitch', Blockly.Ruby.ORDER_ATOMIC);
  var paused = Blockly.Ruby.valueToCode(block, 'paused', Blockly.Ruby.ORDER_ATOMIC);
  var looping = Blockly.Ruby.valueToCode(block, 'looping', Blockly.Ruby.ORDER_ATOMIC);
  
  return "$gtk.args.audio[" + audio_name +
         "] ||= {\n" +
         "  path: " + path + ",\n" +
         "  x: " + x + ",\n" +
         "  y: " + y + ",\n" +
         "  z: " + z + ",\n" +
         "  gain: " + gain + ",\n" +
         "  pitch: " + pitch + ",\n" +
         "  paused: " + paused + ",\n" +
         "  looping: " + looping + "\n}\n";
};

// Kernel
Blockly.Ruby.kernel_tick_count = function(block) {
  return ['Kernel::tick_count', Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.kernel_global_tick_count = function(block) {
  return ['Kernel::global_tick_count', Blockly.Ruby.ORDER_ATOMIC];
};

// Numeric extensions
Blockly.Ruby.numeric_frame_index = function(block) {
  var variable = Blockly.Ruby.valueToCode(block, 'variable', Blockly.Ruby.ORDER_ATOMIC);
  var number_of_sprites = Blockly.Ruby.valueToCode(block, 'number_of_sprites', Blockly.Ruby.ORDER_ATOMIC);
  var frames_each_sprite = Blockly.Ruby.valueToCode(block, 'frames_each_sprite', Blockly.Ruby.ORDER_ATOMIC);
  var does_sprite_loop = Blockly.Ruby.valueToCode(block, 'looping', Blockly.Ruby.ORDER_ATOMIC);
  
  return [variable + ".frame_index(" + number_of_sprites + "," + frames_each_sprite + "," + does_sprite_loop + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.numeric_half = function(block) {
  var variable = Blockly.Ruby.valueToCode(block, 'variable', Blockly.Ruby.ORDER_ATOMIC);
  return [variable + ".half", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.numeric_from_top = function(block) {
  var variable = Blockly.Ruby.valueToCode(block, 'variable', Blockly.Ruby.ORDER_ATOMIC);
  return [variable + ".from_top", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.numeric_created = function(block) {
  var variable = Blockly.Ruby.valueToCode(block, 'variable', Blockly.Ruby.ORDER_ATOMIC);
  return [variable + ".created?", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.numeric_seconds = function(block) {
  var variable = Blockly.Ruby.valueToCode(block, 'variable', Blockly.Ruby.ORDER_ATOMIC);
  return [variable + ".seconds", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.numeric_elapsed_time = function(block) {
  var variable = Blockly.Ruby.valueToCode(block, 'variable', Blockly.Ruby.ORDER_ATOMIC);
  return [variable + ".elapsed_time", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.numeric_elapsed = function(block) {
  var variable = Blockly.Ruby.valueToCode(block, 'variable', Blockly.Ruby.ORDER_ATOMIC);
  var time_variable = Blockly.Ruby.valueToCode(block, 'time', Blockly.Ruby.ORDER_ATOMIC);
  return [variable + ".elapsed_time?(" + time_variable + ")", Blockly.Ruby.ORDER_ATOMIC];
};

// Array
Blockly.Ruby.array_compact = function(block) {
  var array = Blockly.Ruby.valueToCode(block, 'array', Blockly.Ruby.ORDER_ATOMIC);
  return [array + ".compact", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.array_reject_false = function(block) {
  var array = Blockly.Ruby.valueToCode(block, 'array', Blockly.Ruby.ORDER_ATOMIC);
  return [array + ".reject_false", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.array_product = function(block) {
  var array = Blockly.Ruby.valueToCode(block, 'array', Blockly.Ruby.ORDER_ATOMIC);
  return [array + ".product", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.array_includes = function(block) {
  var array = Blockly.Ruby.valueToCode(block, 'array', Blockly.Ruby.ORDER_ATOMIC);
  var elem = Blockly.Ruby.valueToCode(block, 'element', Blockly.Ruby.ORDER_ATOMIC);
  return [array + ".include_any?(" + elem + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.array_intersect_rect = function(block) {
  var arr1 = Blockly.Ruby.valueToCode(block, 'arr1', Blockly.Ruby.ORDER_ATOMIC);
  var arr2 = Blockly.Ruby.valueToCode(block, 'arr2', Blockly.Ruby.ORDER_ATOMIC);
  return [arr1 + ".intersect_rect?(" + arr2 + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.array_map2d = function(block) {
  var array = Blockly.Ruby.valueToCode(block, 'array', Blockly.Ruby.ORDER_ATOMIC);
  var row = Blockly.Ruby.nameDB_.getName(block.getFieldValue('row'), Blockly.Variables.NAME_TYPE);
  var col = Blockly.Ruby.nameDB_.getName(block.getFieldValue('col'), Blockly.Variables.NAME_TYPE);
  var tile = Blockly.Ruby.nameDB_.getName(block.getFieldValue('tile'), Blockly.Variables.NAME_TYPE);
  var statements = Blockly.Ruby.statementToCode(block, 'statements');
  statements = Blockly.Ruby.addLoopTrap(statements);
  
  var code = array + ".map_2d do |" + row + "," + col + "," + tile + "|\n" + statements + "\nend\n";
  return [code, Blockly.Ruby.ORDER_ATOMIC];
};

// Grid
Blockly.Ruby.grid_get = function(block) {
  var dropdown_name = block.getFieldValue('member');
  return ["$gtk.args.grid." + dropdown_name, Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.grid_set = function(block) {
  var dropdown_name = block.getFieldValue('member');
  var value = Blockly.Ruby.valueToCode(block, 'value', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.args.grid." + dropdown_name + " = " + value + "\n";
};

Blockly.Ruby.grid_set_origin = function(block) {
  var dropdown_name = block.getFieldValue('origin');
  return "$gtk.args.grid." + dropdown_name + "!\n";
};

// Strings
Blockly.Ruby.string_wrapped_lines = function(block) {
  var string = Blockly.Ruby.valueToCode(block, 'string', Blockly.Ruby.ORDER_ATOMIC);
  var length = Blockly.Ruby.valueToCode(block, 'length', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.string.wrapped_lines(" + string + "," + length + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.string_wrapped_lines_recur = function(block) {
  var string = Blockly.Ruby.valueToCode(block, 'string', Blockly.Ruby.ORDER_ATOMIC);
  var rest = Blockly.Ruby.valueToCode(block, 'rest', Blockly.Ruby.ORDER_ATOMIC);
  var length = Blockly.Ruby.valueToCode(block, 'length', Blockly.Ruby.ORDER_ATOMIC);
  var aggregate = Blockly.Ruby.valueToCode(block, 'aggregate', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.string.wrapped_lines_recur(" + string + "," + rest + "," + length + "," + aggregate + ")", Blockly.Ruby.ORDER_ATOMIC];
};

// Layouts
Blockly.Ruby.layout_rect = function(block) {
  var col = Blockly.Ruby.valueToCode(block, 'col', Blockly.Ruby.ORDER_ATOMIC);
  var row = Blockly.Ruby.valueToCode(block, 'row', Blockly.Ruby.ORDER_ATOMIC);
  var w = Blockly.Ruby.valueToCode(block, 'w', Blockly.Ruby.ORDER_ATOMIC);
  var h = Blockly.Ruby.valueToCode(block, 'h', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.layout.rect({ col: " + col + ", row: " + row + ", w: " + w + ", h: " + h + " })", Blockly.Ruby.ORDER_ATOMIC];
};

// State
Blockly.Ruby.state_created_at_elapsed = function(block) {
  return ["$gtk.args.state.created_at_elapsed", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.state_init_variable = function(block) {
  var text_name = block.getFieldValue('name');
  var value = Blockly.Ruby.valueToCode(block, 'value', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.args.state." + text_name + " ||= " + value + "\n";
};

Blockly.Ruby.state_set_variable = function(block) {
  var text_name = block.getFieldValue('name');
  var value = Blockly.Ruby.valueToCode(block, 'value', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.args.state" + (text_name != "" ? ("." + text_name) : "") + " = " + value + "\n";
};

Blockly.Ruby.state_get_variable = function(block) {
  var text_name = block.getFieldValue('name');
  return ["$gtk.args.state" + (text_name != "" ? ("." + text_name) : ""), Blockly.Ruby.ORDER_ATOMIC];
};

// Outputs
Blockly.Ruby.outputs_new_color = function(block) {
  var r = Blockly.Ruby.valueToCode(block, 'r', Blockly.Ruby.ORDER_ATOMIC);
  var g = Blockly.Ruby.valueToCode(block, 'g', Blockly.Ruby.ORDER_ATOMIC);
  var b = Blockly.Ruby.valueToCode(block, 'b', Blockly.Ruby.ORDER_ATOMIC);
  var a = Blockly.Ruby.valueToCode(block, 'a', Blockly.Ruby.ORDER_ATOMIC);
  return ["{ r: " + r + ", g: " + g + ", b: " + b + ", a: " + a + " }", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.outputs_background_color = function(block) {
  var r = Blockly.Ruby.valueToCode(block, 'r', Blockly.Ruby.ORDER_ATOMIC);
  var g = Blockly.Ruby.valueToCode(block, 'g', Blockly.Ruby.ORDER_ATOMIC);
  var b = Blockly.Ruby.valueToCode(block, 'b', Blockly.Ruby.ORDER_ATOMIC);
  var a = Blockly.Ruby.valueToCode(block, 'a', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.args.outputs.background_color = [" + r + "," + g + "," + b + "," + a + "]\n";
};

Blockly.Ruby.outputs_play_sound = function(block) {
  var path = Blockly.JavaScript.valueToCode(block, 'path', Blockly.JavaScript.ORDER_ATOMIC);
  return "$gtk.args.outputs.sounds << " + path + "\n";
};

Blockly.Ruby.outputs_solid = function(block) {
  var r = Blockly.Ruby.valueToCode(block, 'rect', Blockly.Ruby.ORDER_ATOMIC);
  var c = Blockly.Ruby.valueToCode(block, 'color', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.args.outputs.primitives << (" + r + ").merge(" + c + ").to_solid\n";
};

Blockly.Ruby.outputs_border = function(block) {
  var r = Blockly.Ruby.valueToCode(block, 'rect', Blockly.Ruby.ORDER_ATOMIC);
  var c = Blockly.Ruby.valueToCode(block, 'color', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.args.outputs.primitives << (" + r + ").merge(" + c + ").to_border\n";
};

Blockly.Ruby.outputs_line = function(block) {
  var l = Blockly.Ruby.valueToCode(block, 'line', Blockly.Ruby.ORDER_ATOMIC);
  var c = Blockly.Ruby.valueToCode(block, 'color', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.args.outputs.primitives << (" + l + ").merge(" + c + ").to_line\n";
};

Blockly.Ruby.outputs_label = function(block) {
  var x = Blockly.Ruby.valueToCode(block, 'x', Blockly.Ruby.ORDER_ATOMIC);
  var y = Blockly.Ruby.valueToCode(block, 'y', Blockly.Ruby.ORDER_ATOMIC);
  var text = Blockly.Ruby.valueToCode(block, 'text', Blockly.Ruby.ORDER_ATOMIC);
  var size = Blockly.Ruby.valueToCode(block, 'size', Blockly.Ruby.ORDER_ATOMIC);
  var align = Blockly.Ruby.valueToCode(block, 'align', Blockly.Ruby.ORDER_ATOMIC);
  var valign = Blockly.Ruby.valueToCode(block, 'valign', Blockly.Ruby.ORDER_ATOMIC);
  var font = Blockly.Ruby.valueToCode(block, 'font', Blockly.Ruby.ORDER_ATOMIC); 
  var c = Blockly.Ruby.valueToCode(block, 'color', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.args.outputs.primitives << ({\n" +
         "  x: " + x + ",\n" +
         "  y: " + y + ",\n" +
         "  text: " + text + ",\n" +
         "  size_enum: " + size + ",\n" +
         "  alignment_enum: " + align + ",\n" +
         "  vertical_alignment_enum: " + valign + ",\n" +
         "  font: " + font + "\n}).merge(" + c + ").to_label\n";
};

Blockly.Ruby.outputs_sprite = function(block) {
  var rect = Blockly.Ruby.valueToCode(block, 'rect', Blockly.Ruby.ORDER_ATOMIC);
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  var angle = Blockly.Ruby.valueToCode(block, 'angle', Blockly.Ruby.ORDER_ATOMIC);
  
  return "$gtk.args.outputs.primitives << (" + rect + ").merge({\n" +
         "  path: " + path + ",\n" +
         "  angle: " + angle + "\n" +
         "}).to_sprite\n";
};

Blockly.Ruby.outputs_sprite_ex = function(block) {
  var rect = Blockly.Ruby.valueToCode(block, 'rect', Blockly.Ruby.ORDER_ATOMIC);
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  var angle = Blockly.Ruby.valueToCode(block, 'angle', Blockly.Ruby.ORDER_ATOMIC);
  var source_rect = Blockly.Ruby.valueToCode(block, 'source_rect', Blockly.Ruby.ORDER_ATOMIC);
  var color = Blockly.Ruby.valueToCode(block, 'color', Blockly.Ruby.ORDER_ATOMIC);
  
  return "$gtk.args.outputs.primitives << (" + rect + ").merge({\n" +
         "  path: " + path + ",\n" +
         "  angle: " + angle + "\n" +
         "}).merge(" + source_rect + ").merge(" + color + ").to_sprite\n";
};

Blockly.Ruby.outputs_sprite_full = function(block) {
  var rect = Blockly.Ruby.valueToCode(block, 'rect', Blockly.Ruby.ORDER_ATOMIC);
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  var angle = Blockly.Ruby.valueToCode(block, 'angle', Blockly.Ruby.ORDER_ATOMIC);
  var angle_anchor_x = Blockly.Ruby.valueToCode(block, 'angle_anchor_x', Blockly.Ruby.ORDER_ATOMIC);;
  var angle_anchor_y = Blockly.Ruby.valueToCode(block, 'angle_anchor_y', Blockly.Ruby.ORDER_ATOMIC);;
  var source_rect = Blockly.Ruby.valueToCode(block, 'source_rect', Blockly.Ruby.ORDER_ATOMIC);
  var tile_rect = Blockly.Ruby.valueToCode(block, 'tile_rect', Blockly.Ruby.ORDER_ATOMIC);
  var hflip = Blockly.Ruby.valueToCode(block, 'hflip', Blockly.Ruby.ORDER_ATOMIC);
  var vflip = Blockly.Ruby.valueToCode(block, 'vflip', Blockly.Ruby.ORDER_ATOMIC);
  var color = Blockly.Ruby.valueToCode(block, 'color', Blockly.Ruby.ORDER_ATOMIC);
  
  return "$gtk.args.outputs.primitives << (" + rect + ").merge({\n" +
         "  path: " + path + ",\n" +
         "  angle: " + angle + ",\n" +
         "  flip_horizontally: " + hflip + ",\n" +
         "  flip_vertically: " + vflip + ",\n" +
         "  angle_anchor_x: " + angle_anchor_x + ",\n" +
         "  angle_anchor_y: " + angle_anchor_y + "\n" +
         "}).merge(" + source_rect + ").merge(" + tile_rect + ").merge(" + color + ").to_sprite\n";
};

Blockly.Ruby.outputs_screenshot = function(block) {
  var rect = Blockly.Ruby.valueToCode(block, 'rect', Blockly.Ruby.ORDER_ATOMIC);
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  var color = Blockly.Ruby.valueToCode(block, 'color', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.args.outputs.screenshots << (" + rect + ").merge({ path: " + path + " }).merge(" + color + ")\n";
};

// Debug
Blockly.Ruby.debug_solid = function(block) {
  var r = Blockly.Ruby.valueToCode(block, 'rect', Blockly.Ruby.ORDER_ATOMIC);
  var c = Blockly.Ruby.valueToCode(block, 'color', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.args.outputs.debug << (" + r + ").merge(" + c + ").to_solid\n";
};

Blockly.Ruby.debug_border = function(block) {
  var r = Blockly.Ruby.valueToCode(block, 'rect', Blockly.Ruby.ORDER_ATOMIC);
  var c = Blockly.Ruby.valueToCode(block, 'color', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.args.outputs.debug << (" + r + ").merge(" + c + ").to_border\n";
};

Blockly.Ruby.debug_line = function(block) {
  var l = Blockly.Ruby.valueToCode(block, 'line', Blockly.Ruby.ORDER_ATOMIC);
  var c = Blockly.Ruby.valueToCode(block, 'color', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.args.outputs.debug << (" + l + ").merge(" + c + ").to_line\n";
};

Blockly.Ruby.debug_label = function(block) {
  var x = Blockly.Ruby.valueToCode(block, 'x', Blockly.Ruby.ORDER_ATOMIC);
  var y = Blockly.Ruby.valueToCode(block, 'y', Blockly.Ruby.ORDER_ATOMIC);
  var text = Blockly.Ruby.valueToCode(block, 'text', Blockly.Ruby.ORDER_ATOMIC);
  var size = Blockly.Ruby.valueToCode(block, 'size', Blockly.Ruby.ORDER_ATOMIC);
  var align = Blockly.Ruby.valueToCode(block, 'align', Blockly.Ruby.ORDER_ATOMIC);
  var valign = Blockly.Ruby.valueToCode(block, 'valign', Blockly.Ruby.ORDER_ATOMIC);
  var font = Blockly.Ruby.valueToCode(block, 'font', Blockly.Ruby.ORDER_ATOMIC); 
  var c = Blockly.Ruby.valueToCode(block, 'color', Blockly.Ruby.ORDER_ATOMIC);
  return "$gtk.args.outputs.debug << ({\n" +
         "  x: " + x + ",\n" +
         "  y: " + y + ",\n" +
         "  text: " + text + ",\n" +
         "  size_enum: " + size + ",\n" +
         "  alignment_enum: " + align + ",\n" +
         "  vertical_alignment_enum: " + valign + ",\n" +
         "  font: " + font + "\n}).merge(" + c + ").to_label\n";
};

Blockly.Ruby.debug_sprite = function(block) {
  var rect = Blockly.Ruby.valueToCode(block, 'rect', Blockly.Ruby.ORDER_ATOMIC);
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  var angle = Blockly.Ruby.valueToCode(block, 'angle', Blockly.Ruby.ORDER_ATOMIC);
  
  return "$gtk.args.outputs.debug << (" + rect + ").merge({\n" +
         "  path: " + path + ",\n" +
         "  angle: " + angle + "\n" +
         "}).to_sprite\n";
};

Blockly.Ruby.debug_sprite_ex = function(block) {
  var rect = Blockly.Ruby.valueToCode(block, 'rect', Blockly.Ruby.ORDER_ATOMIC);
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  var angle = Blockly.Ruby.valueToCode(block, 'angle', Blockly.Ruby.ORDER_ATOMIC);
  var source_rect = Blockly.Ruby.valueToCode(block, 'source_rect', Blockly.Ruby.ORDER_ATOMIC);
  var color = Blockly.Ruby.valueToCode(block, 'color', Blockly.Ruby.ORDER_ATOMIC);
  
  return "$gtk.args.outputs.debug << (" + rect + ").merge({\n" +
         "  path: " + path + ",\n" +
         "  angle: " + angle + "\n" +
         "}).merge(" + source_rect + ").merge(" + color + ").to_sprite\n";
};

Blockly.Ruby.debug_sprite_full = function(block) {
  var rect = Blockly.Ruby.valueToCode(block, 'rect', Blockly.Ruby.ORDER_ATOMIC);
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  var angle = Blockly.Ruby.valueToCode(block, 'angle', Blockly.Ruby.ORDER_ATOMIC);
  var angle_anchor_x = Blockly.Ruby.valueToCode(block, 'angle_anchor_x', Blockly.Ruby.ORDER_ATOMIC);;
  var angle_anchor_y = Blockly.Ruby.valueToCode(block, 'angle_anchor_y', Blockly.Ruby.ORDER_ATOMIC);;
  var source_rect = Blockly.Ruby.valueToCode(block, 'source_rect', Blockly.Ruby.ORDER_ATOMIC);
  var tile_rect = Blockly.Ruby.valueToCode(block, 'tile_rect', Blockly.Ruby.ORDER_ATOMIC);
  var hflip = Blockly.Ruby.valueToCode(block, 'hflip', Blockly.Ruby.ORDER_ATOMIC);
  var vflip = Blockly.Ruby.valueToCode(block, 'vflip', Blockly.Ruby.ORDER_ATOMIC);
  var color = Blockly.Ruby.valueToCode(block, 'color', Blockly.Ruby.ORDER_ATOMIC);
  
  return "$gtk.args.outputs.debug << (" + rect + ").merge({\n" +
         "  path: " + path + ",\n" +
         "  angle: " + angle + ",\n" +
         "  flip_horizontally: " + hflip + ",\n" +
         "  flip_vertically: " + vflip + ",\n" +
         "  angle_anchor_x: " + angle_anchor_x + ",\n" +
         "  angle_anchor_y: " + angle_anchor_y + "\n" +
         "}).merge(" + source_rect + ").merge(" + tile_rect + ").merge(" + color + ").to_sprite\n";
};

// Easings
Blockly.Ruby.easing_ease = function(block) {
  var start_tick = Blockly.Ruby.valueToCode(block, 'start_tick', Blockly.Ruby.ORDER_ATOMIC);
  var current_tick = Blockly.Ruby.valueToCode(block, 'current_tick', Blockly.Ruby.ORDER_ATOMIC);
  var duration = Blockly.Ruby.valueToCode(block, 'duration', Blockly.Ruby.ORDER_ATOMIC);
  var ease_func = block.getFieldValue('ease_func');
  return ["$gtk.args.easing.ease(" + start_tick + "," + current_tick + "," + duration + ",:" + ease_func + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.easing_ease_spline = function(block) {
  var start_tick = Blockly.Ruby.valueToCode(block, 'start_tick', Blockly.Ruby.ORDER_ATOMIC);
  var current_tick = Blockly.Ruby.valueToCode(block, 'current_tick', Blockly.Ruby.ORDER_ATOMIC);
  var duration = Blockly.Ruby.valueToCode(block, 'duration', Blockly.Ruby.ORDER_ATOMIC);
  var spline = Blockly.Ruby.valueToCode(block, 'spline', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.easing.ease_spline(" + start_tick + "," + current_tick + "," + duration + "," + spline + ")", Blockly.Ruby.ORDER_ATOMIC];
};

// Geometry
Blockly.Ruby.geometry_new_rect = function(block) {
  var x = Blockly.Ruby.valueToCode(block, 'x', Blockly.Ruby.ORDER_ATOMIC);
  var y = Blockly.Ruby.valueToCode(block, 'y', Blockly.Ruby.ORDER_ATOMIC);
  var w = Blockly.Ruby.valueToCode(block, 'w', Blockly.Ruby.ORDER_ATOMIC);
  var h = Blockly.Ruby.valueToCode(block, 'h', Blockly.Ruby.ORDER_ATOMIC);
  return ["{ x: " + x + ", y: " + y + ", w: " + w + ", h: " + h + " }", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_new_src_rect = function(block) {
  var x = Blockly.Ruby.valueToCode(block, 'x', Blockly.Ruby.ORDER_ATOMIC);
  var y = Blockly.Ruby.valueToCode(block, 'y', Blockly.Ruby.ORDER_ATOMIC);
  var w = Blockly.Ruby.valueToCode(block, 'w', Blockly.Ruby.ORDER_ATOMIC);
  var h = Blockly.Ruby.valueToCode(block, 'h', Blockly.Ruby.ORDER_ATOMIC);
  return ["{ source_x: " + x + ", source_y: " + y + ", source_w: " + w + ", source_h: " + h + " }", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_new_tile_rect = function(block) {
  var x = Blockly.Ruby.valueToCode(block, 'x', Blockly.Ruby.ORDER_ATOMIC);
  var y = Blockly.Ruby.valueToCode(block, 'y', Blockly.Ruby.ORDER_ATOMIC);
  var w = Blockly.Ruby.valueToCode(block, 'w', Blockly.Ruby.ORDER_ATOMIC);
  var h = Blockly.Ruby.valueToCode(block, 'h', Blockly.Ruby.ORDER_ATOMIC);
  return ["{ tile_x: " + x + ", tile_y: " + y + ", tile_w: " + w + ", tile_h: " + h + " }", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_new_line = function(block) {
  var x1 = Blockly.Ruby.valueToCode(block, 'x', Blockly.Ruby.ORDER_ATOMIC);
  var y1 = Blockly.Ruby.valueToCode(block, 'y', Blockly.Ruby.ORDER_ATOMIC);
  var x2 = Blockly.Ruby.valueToCode(block, 'x2', Blockly.Ruby.ORDER_ATOMIC);
  var y2 = Blockly.Ruby.valueToCode(block, 'y2', Blockly.Ruby.ORDER_ATOMIC);
  return ["{ x: " + x1 + ", y: " + y1 + ", x2: " + x2 + ", y2: " + y2 + " }", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_new_point = function(block) {
  var x = Blockly.Ruby.valueToCode(block, 'x', Blockly.Ruby.ORDER_ATOMIC);
  var y = Blockly.Ruby.valueToCode(block, 'y', Blockly.Ruby.ORDER_ATOMIC);
  return ["{ x: " + x + ", y: " + y + "}", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_inside_rect = function(block) {
  var r1 = Blockly.Ruby.valueToCode(block, 'r1', Blockly.Ruby.ORDER_ATOMIC);
  var r2 = Blockly.Ruby.valueToCode(block, 'r2', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.inside_rect?(" + r1 + "," + r2 + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_intersect_rect = function(block) {
  var r1 = Blockly.Ruby.valueToCode(block, 'r1', Blockly.Ruby.ORDER_ATOMIC);
  var r2 = Blockly.Ruby.valueToCode(block, 'r2', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.intersect_rect?(" + r1 + "," + r2 + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_scale_rect_array = function(block) {
  var array = Blockly.Ruby.valueToCode(block, 'array', Blockly.Ruby.ORDER_ATOMIC);
  var ratio = Blockly.Ruby.valueToCode(block, 'ratio', Blockly.Ruby.ORDER_ATOMIC);
  var anchor_x = Blockly.Ruby.valueToCode(block, 'anchor_x', Blockly.Ruby.ORDER_ATOMIC);
  var anchor_y = Blockly.Ruby.valueToCode(block, 'anchor_y', Blockly.Ruby.ORDER_ATOMIC);

  return [array + ".scale_rect(" + ratio + "," + anchor_x + "," + anchor_y + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_scale_rect = function(block) {
  var rect = Blockly.Ruby.valueToCode(block, 'rect', Blockly.Ruby.ORDER_ATOMIC);
  var xper = Blockly.Ruby.valueToCode(block, 'xper', Blockly.Ruby.ORDER_ATOMIC);
  var yper = Blockly.Ruby.valueToCode(block, 'yper', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.scale_rect(" + rect + "," + xper + "," + yper + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_angle_to = function(block) {
  var start_point = Blockly.Ruby.valueToCode(block, 'start_point', Blockly.Ruby.ORDER_ATOMIC);
  var end_point = Blockly.Ruby.valueToCode(block, 'end_point', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.angle_to(" + start_point + "," + end_point + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_angle_from = function(block) {
  var start_point = Blockly.Ruby.valueToCode(block, 'start_point', Blockly.Ruby.ORDER_ATOMIC);
  var end_point = Blockly.Ruby.valueToCode(block, 'end_point', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.angle_from(" + start_point + "," + end_point + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_point_inside_circle = function(block) {
  var point = Blockly.Ruby.valueToCode(block, 'point', Blockly.Ruby.ORDER_ATOMIC);
  var circle_point = Blockly.Ruby.valueToCode(block, 'circle_center_point', Blockly.Ruby.ORDER_ATOMIC);
  var radius = Blockly.Ruby.valueToCode(block, 'radius', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.point_inside_circle?(" + point + "," + circle_point + "," + radius + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_center_inside_rect = function(block) {
  var r1 = Blockly.Ruby.valueToCode(block, 'r1', Blockly.Ruby.ORDER_ATOMIC);
  var r2 = Blockly.Ruby.valueToCode(block, 'r2', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.center_inside_rect(" + r1 + "," + r2 + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_center_inside_rect_x = function(block) {
  var r1 = Blockly.Ruby.valueToCode(block, 'r1', Blockly.Ruby.ORDER_ATOMIC);
  var r2 = Blockly.Ruby.valueToCode(block, 'r2', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.center_inside_rect_x(" + r1 + "," + r2 + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_center_inside_rect_y = function(block) {
  var r1 = Blockly.Ruby.valueToCode(block, 'r1', Blockly.Ruby.ORDER_ATOMIC);
  var r2 = Blockly.Ruby.valueToCode(block, 'r2', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.center_inside_rect_y(" + r1 + "," + r2 + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_anchor_rect = function(block) {
  var rect = Blockly.Ruby.valueToCode(block, 'rect', Blockly.Ruby.ORDER_ATOMIC);
  var anchor_x = Blockly.Ruby.valueToCode(block, 'anchor_x', Blockly.Ruby.ORDER_ATOMIC);
  var anchor_y = Blockly.Ruby.valueToCode(block, 'anchor_y', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.anchor_rect(" + rect + "," + anchor_x + "," + anchor_y + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_shift_line = function(block) {
  var line = Blockly.Ruby.valueToCode(block, 'line', Blockly.Ruby.ORDER_ATOMIC);
  var x = Blockly.Ruby.valueToCode(block, 'x', Blockly.Ruby.ORDER_ATOMIC);
  var y = Blockly.Ruby.valueToCode(block, 'y', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.shift_line(" + line + "," + x + "," + y + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_line_y_intercept = function(block) {
  var line = Blockly.Ruby.valueToCode(block, 'line', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.line_y_intercept(" + line + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_angle_between_lines = function(block) {
  var line1 = Blockly.Ruby.valueToCode(block, 'line1', Blockly.Ruby.ORDER_ATOMIC);
  var line2 = Blockly.Ruby.valueToCode(block, 'line2', Blockly.Ruby.ORDER_ATOMIC);
  var inf = Blockly.Ruby.valueToCode(block, 'infinity_replacement', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.angle_between_lines(" + line1 + "," + line2 + "," + inf + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_line_slope = function(block) {
  var line = Blockly.Ruby.valueToCode(block, 'line', Blockly.Ruby.ORDER_ATOMIC);
  var inf = Blockly.Ruby.valueToCode(block, 'infinity_replacement', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.line_slope(" + line + "," + + inf + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_line_rise_run = function(block) {
  var line = Blockly.Ruby.valueToCode(block, 'line', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.line_rise_run(" + line + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_ray_test = function(block) {
  var line = Blockly.Ruby.valueToCode(block, 'line', Blockly.Ruby.ORDER_ATOMIC);
  var point = Blockly.Ruby.valueToCode(block, 'point', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.ray_test(" + line + "," + point + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_line_rect = function(block) {
  var line = Blockly.Ruby.valueToCode(block, 'line', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.line_rect(" + line + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_line_intersect = function(block) {
  var line1 = Blockly.Ruby.valueToCode(block, 'line1', Blockly.Ruby.ORDER_ATOMIC);
  var line2 = Blockly.Ruby.valueToCode(block, 'line2', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.line_intersect (" + line1 + "," + line2 + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_distance = function(block) {
  var point1 = Blockly.Ruby.valueToCode(block, 'point1', Blockly.Ruby.ORDER_ATOMIC);
  var point2 = Blockly.Ruby.valueToCode(block, 'point2', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.distance(" + point1 + "," + point2 + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.geometry_cubic_bezier = function(block) {
  var t = Blockly.Ruby.valueToCode(block, 't', Blockly.Ruby.ORDER_ATOMIC);
  var a = Blockly.Ruby.valueToCode(block, 'a', Blockly.Ruby.ORDER_ATOMIC);
  var b = Blockly.Ruby.valueToCode(block, 'b', Blockly.Ruby.ORDER_ATOMIC);
  var c = Blockly.Ruby.valueToCode(block, 'c', Blockly.Ruby.ORDER_ATOMIC);
  var d = Blockly.Ruby.valueToCode(block, 'd', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.geometry.cubic_bezier(" + t + "," + a + "," + b + "," + c + "," + d + ")", Blockly.Ruby.ORDER_ATOMIC];
};

// Touch
Blockly.Ruby.touch_finger_down = function(block) {
  var fingkey = block.getFieldValue('finger');  
  return ["!$gtk.args.inputs." + fingkey + ".nil?", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.touch_finger_x = function(block) {
  var fingkey = block.getFieldValue('finger');
  return ["$gtk.args.inputs." + fingkey + ".x", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.touch_finger_y = function(block) {
  var fingkey = block.getFieldValue('finger');
  return ["$gtk.args.inputs." + fingkey + ".y", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.touch_foreach_touches = function(block) {
  var index = Blockly.Ruby.nameDB_.getName(block.getFieldValue('index'), Blockly.Variables.NAME_TYPE);
  var touch = Blockly.Ruby.nameDB_.getName(block.getFieldValue('touch'), Blockly.Variables.NAME_TYPE);
  var statements = Blockly.Ruby.statementToCode(block, 'statements');
  statements = Blockly.Ruby.addLoopTrap(statements);
  return "$gtk.args.inputs.touch.each do |" + index + "," + touch + "|\n" + statements + "\nend\n";
};

// Mouse
Blockly.Ruby.mouse_button_state = function(block) {
  var mouse_button = block.getFieldValue('button');
  var mouse_state = block.getFieldValue('state');
  var code = "$gtk.args.inputs.mouse." + mouse_state;
  if (mouse_button != "any") {
    code += " && $gtk.args.inputs.mouse." + mouse_button;
  }
  return [code, Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.mouse_moving = function(block) {
  var fingkey = block.getFieldValue('finger');
  return ["$gtk.args.inputs.mouse.moved", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.mouse_get = function(block) {
  var memb = block.getFieldValue('member');
  return ["$gtk.args.inputs.mouse." + memb, Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.mouse_inside_rect = function(block) {
  var r = Blockly.Ruby.valueToCode(block, 'rect', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.inputs.mouse.inside_rect?(" + r + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.mouse_inside_circle = function(block) {
  var c = Blockly.Ruby.valueToCode(block, 'circle_center', Blockly.Ruby.ORDER_ATOMIC);
  var r = Blockly.Ruby.valueToCode(block, 'radius', Blockly.Ruby.ORDER_ATOMIC);
  return ["$gtk.args.inputs.mouse.inside_circle?(" + c + "," + r + ")", Blockly.Ruby.ORDER_ATOMIC];
};

// Joystick
Blockly.Ruby.joystick_connected = function(block) {
  var joy = block.getFieldValue('joystick');
  return ["!$gtk.args.inputs." + joy + ".nil?", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.joystick_button_state = function(block) {
  var joy = block.getFieldValue('joystick');
  var btn = block.getFieldValue('button');
  var state = block.getFieldValue('state');
  return ["$gtk.args.inputs." + joy + "." + state + "." + btn, Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.joystick_analog_state = function(block) {
  var joy = block.getFieldValue('joystick');
  var analog = block.getFieldValue('analog');
  var memb = block.getFieldValue('analog_property');
  return ["$gtk.args.inputs." + joy + "." + analog + "_" + memb, Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.joystick_direction_state = function(block) {
  var dir = block.getFieldValue('direction');
  var joy = block.getFieldValue('joystick');
  return ["$gtk.args.inputs." + joy + "." + dir, Blockly.Ruby.ORDER_ATOMIC];
};

// Keyboard
Blockly.Ruby.keyboard_key_state = function(block) {
  var key = block.getFieldValue('key');
  var state = block.getFieldValue('state');
  return ["$gtk.args.inputs.keyboard." + state + "." + key, Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.keyboard_ctrl_state = function(block) {
  var key = block.getFieldValue('key');
  var state = block.getFieldValue('state');
  return ["$gtk.args.inputs.keyboard." + state + ".ctrl_" + key, Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.keyboard_direction_state = function(block) {
  var dir = block.getFieldValue('direction');
  return ["$gtk.args.inputs.keyboard." + dir, Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.keyboard_char_keys = function(block) {
  return ["$gtk.args.inputs.text", Blockly.Ruby.ORDER_ATOMIC];
};

// Essentials
Blockly.Ruby.comment = function(block) {
  var comment = block.getFieldValue('comment');
  return "# " + comment + "\n";
};

Blockly.Ruby.return = function(block) {
  var v = Blockly.Ruby.valueToCode(block, 'value', Blockly.Ruby.ORDER_ATOMIC);
  return (v.length === 0) ? "return\n" : "return " + v + "\n";
};

Blockly.Ruby.require = function(block) {
  var path = Blockly.Ruby.valueToCode(block, 'path', Blockly.Ruby.ORDER_ATOMIC);
  return "require(" + path + ")\n";
};

Blockly.Ruby.eval_noreturn = function(block) {
  var code = Blockly.Ruby.valueToCode(block, 'code', Blockly.Ruby.ORDER_ATOMIC);
  return "eval(" + code + ")\n";
};

Blockly.Ruby.eval = function(block) {
  var code = Blockly.Ruby.valueToCode(block, 'code', Blockly.Ruby.ORDER_ATOMIC);
  return ["eval(" + code + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.join = function(block) {
  var args = Blockly.Ruby.valueToCode(block, 'args', Blockly.Ruby.ORDER_ATOMIC);
  return [args + ".join", Blockly.Ruby.ORDER_ATOMIC];    
};

Blockly.Ruby.color_hex_to_color_hash = function(block) {
  var hex = Blockly.Ruby.valueToCode(block, 'hex', Blockly.Ruby.ORDER_ATOMIC);
  var functionName = Blockly.Ruby.provideFunction_(
      'dragonruby_hex2color',
      ['def ' + Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_ +
           '(h)',
       '  color_r = h[1 .. 2].to_i(16)',
       '  color_g = h[3 .. 4].to_i(16)',
       '  color_b = h[5 .. 6].to_i(16)',
       '  return { r: color_r, g: color_g, b: color_b, a: 255 }',
       'end']);
       
  return ["dragonruby_hex2color(" + hex + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.color_hash_to_color_hex = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  var functionName = Blockly.Ruby.provideFunction_(
      'dragonruby_color2hex',
      ['def ' + Blockly.Ruby.FUNCTION_NAME_PLACEHOLDER_ + '(h)',
       '  color_r = ([100, [0, h.r].max].min * 2.55 + 0.5).floor',
       '  color_g = ([100, [0, h.g].max].min * 2.55 + 0.5).floor',
       '  color_b = ([100, [0, h.b].max].min * 2.55 + 0.5).floor',
       '  return format("#%02x%02x%02x", color_r, color_g, color_b)',
       'end']);
       
  return ["dragonruby_color2hex(" + h + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.to_a = function(block) {
  var v = Blockly.Ruby.valueToCode(block, 'var', Blockly.Ruby.ORDER_ATOMIC);
  return [v + ".to_a", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.to_f = function(block) {
  var v = Blockly.Ruby.valueToCode(block, 'var', Blockly.Ruby.ORDER_ATOMIC);
  return [v + ".to_f", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.to_h = function(block) {
  var v = Blockly.Ruby.valueToCode(block, 'var', Blockly.Ruby.ORDER_ATOMIC);
  return [v + ".to_h", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.to_i = function(block) {
  var v = Blockly.Ruby.valueToCode(block, 'var', Blockly.Ruby.ORDER_ATOMIC);
  var b = Blockly.Ruby.valueToCode(block, 'base', Blockly.Ruby.ORDER_ATOMIC);
  return [v + ".to_i(" + b + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.to_s = function(block) {
  var v = Blockly.Ruby.valueToCode(block, 'var', Blockly.Ruby.ORDER_ATOMIC);
  var b = Blockly.Ruby.valueToCode(block, 'base', Blockly.Ruby.ORDER_ATOMIC);
  return [v + ".to_s(" + b + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.to_sym = function(block) {
  var v = Blockly.Ruby.valueToCode(block, 'var', Blockly.Ruby.ORDER_ATOMIC);
  return [v + ".to_sym", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.as_hash = function(block) {
  var v = Blockly.Ruby.valueToCode(block, 'var', Blockly.Ruby.ORDER_ATOMIC);
  return [v + ".as_hash", Blockly.Ruby.ORDER_ATOMIC];
};

// Hash
Blockly.Ruby.hash_new = function(block) {
  return ["{}", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_sym = function(block) {
  var s = block.getFieldValue('sym');
  return [":" + s, Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_get = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  var k = Blockly.Ruby.valueToCode(block, 'key', Blockly.Ruby.ORDER_ATOMIC);
  return [h + ".fetch(" + k + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_set = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  var k = Blockly.Ruby.valueToCode(block, 'key', Blockly.Ruby.ORDER_ATOMIC);
  var v = Blockly.Ruby.valueToCode(block, 'value', Blockly.Ruby.ORDER_ATOMIC);
  return h + "[" + k + "] = " + v + "\n";
};

Blockly.Ruby.hash_clear = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  return h + ".clear\n";
};

Blockly.Ruby.hash_delete_noreturn = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  var k = Blockly.Ruby.valueToCode(block, 'key', Blockly.Ruby.ORDER_ATOMIC);
  return h + ".delete(" + k + ")\n";
};

Blockly.Ruby.hash_delete = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  var k = Blockly.Ruby.valueToCode(block, 'key', Blockly.Ruby.ORDER_ATOMIC);
  return [h + ".delete(" + k + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_empty = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  return [h + ".empty?", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_key_exist = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  var k = Blockly.Ruby.valueToCode(block, 'key', Blockly.Ruby.ORDER_ATOMIC);
  return [h + ".key?(" + k + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_value_exist = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  var v = Blockly.Ruby.valueToCode(block, 'value', Blockly.Ruby.ORDER_ATOMIC);
  return [h + ".value?(" + v + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_length = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  return [h + ".length", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_each = function(block) {
  var h = Blockly.Lua.valueToCode(block, 'hash', Blockly.Lua.ORDER_ATOMIC);
  var k = Blockly.Lua.nameDB_.getName(block.getFieldValue('key'), Blockly.Variables.NAME_TYPE);
  var v = Blockly.Lua.nameDB_.getName(block.getFieldValue('value'), Blockly.Variables.NAME_TYPE);
  var statements = Blockly.Lua.statementToCode(block, 'statements');
  statements = Blockly.Ruby.addLoopTrap(statements);
  return h + ".each do |" + k + "," + v + "|\n" + statements + "\nend\n";
};

Blockly.Ruby.hash_hash = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  return [h + ".hash", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_keys = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  return [h + ".keys", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_values = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  return [h + ".values", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_deleteif_noreturn = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  var k = Blockly.Ruby.nameDB_.getName(block.getFieldValue('key'), Blockly.Variables.NAME_TYPE);
  var v = Blockly.Ruby.nameDB_.getName(block.getFieldValue('value'), Blockly.Variables.NAME_TYPE);
  var cond = Blockly.Ruby.valueToCode(block, 'condition', Blockly.Ruby.ORDER_ATOMIC);
  return h + ".delete_if do |" + k + "," + v + "|\n" + cond + "\nend\n";
};

Blockly.Ruby.hash_deleteif = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  var k = Blockly.Ruby.nameDB_.getName(block.getFieldValue('key'), Blockly.Variables.NAME_TYPE);
  var v = Blockly.Ruby.nameDB_.getName(block.getFieldValue('value'), Blockly.Variables.NAME_TYPE);
  var cond = Blockly.Ruby.valueToCode(block, 'condition', Blockly.Ruby.ORDER_ATOMIC);
  return [h + ".delete_if do |" + k + "," + v + "|\n" + cond + "\nend", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_keepif_noreturn = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  var k = Blockly.Ruby.nameDB_.getName(block.getFieldValue('key'), Blockly.Variables.NAME_TYPE);
  var v = Blockly.Ruby.nameDB_.getName(block.getFieldValue('value'), Blockly.Variables.NAME_TYPE);
  var cond = Blockly.Ruby.valueToCode(block, 'condition', Blockly.Ruby.ORDER_ATOMIC);
  return h + ".keep_if do |" + k + "," + v + "|\n" + cond + "\nend\n";
};

Blockly.Ruby.hash_keepif = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  var k = Blockly.Ruby.nameDB_.getName(block.getFieldValue('key'), Blockly.Variables.NAME_TYPE);
  var v = Blockly.Ruby.nameDB_.getName(block.getFieldValue('value'), Blockly.Variables.NAME_TYPE);
  var cond = Blockly.Ruby.valueToCode(block, 'condition', Blockly.Ruby.ORDER_ATOMIC);
  return [h + ".keep_if do |" + k + "," + v + "|\n" + cond + "\nend", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_key_by_value = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  var v = Blockly.Ruby.valueToCode(block, 'value', Blockly.Ruby.ORDER_ATOMIC);
  return [h + ".key(" + v + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_merge_noreturn = function(block) {
  var h1 = Blockly.Ruby.valueToCode(block, 'hash1', Blockly.Ruby.ORDER_ATOMIC);
  var h2 = Blockly.Ruby.valueToCode(block, 'hash2', Blockly.Ruby.ORDER_ATOMIC);
  return h1 + ".merge!(" + h2 + ")";
};

Blockly.Ruby.hash_merge = function(block) {
  var h1 = Blockly.Ruby.valueToCode(block, 'hash1', Blockly.Ruby.ORDER_ATOMIC);
  var h2 = Blockly.Ruby.valueToCode(block, 'hash2', Blockly.Ruby.ORDER_ATOMIC);
  return [h1 + ".merge(" + h2 + ")", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_invert = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  return [h + ".invert", Blockly.Ruby.ORDER_ATOMIC];
};

Blockly.Ruby.hash_flatten = function(block) {
  var h = Blockly.Ruby.valueToCode(block, 'hash', Blockly.Ruby.ORDER_ATOMIC);
  var lvl = Blockly.Ruby.valueToCode(block, 'level', Blockly.Ruby.ORDER_ATOMIC);
  return [h + ".flatten(" + lvl + ")", Blockly.Ruby.ORDER_ATOMIC];
};
