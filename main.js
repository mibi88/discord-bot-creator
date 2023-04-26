const blockly_area = document.getElementById("blockly_area");
const blockly_div = document.getElementById("blockly_div");

/* Discord.py blocks */

// generateUniqueName(workspace: Workspace) - create a unique variable

Blockly.Python.addReservedWords("discord,_client,_message,on_ready,on_message,_intents");

Blockly.defineBlocksWithJsonArray([{
    "type": "on_ready",
    "message0": "On bot ready",
    "args0": [],
    "message1": "do %1",
    "args1": [
        {"type": "input_statement", "name": "DO"}
    ],
    "previousStatement": "Action",
    "nextStatement": "Action",
    "colour": 40
}]);
Blockly.Python["on_ready"] = function(block) {
    Blockly.Python.definitions_["import_discord"] = "import discord";
    Blockly.Python.definitions_["_intents_=_discord.Intents.default()"] = "_intents = discord.Intents.default()";
    Blockly.Python.definitions_["_intents.message_content_=_True"] = "_intents.message_content = True";
    Blockly.Python.definitions_["_client_=_discord.Client(intents_=__intents)"] = "_client = discord.Client(intents = _intents)";
    var code = "@_client.event\nasync def on_ready():\n" + Blockly.Python.statementToCode(block, "DO");
    return code;
};

Blockly.defineBlocksWithJsonArray([{
    "type": "on_message",
    "message0": "On message sent",
    "args0": [],
    "message1": "do %1",
    "args1": [
        {"type": "input_statement", "name": "DO"}
    ],
    "previousStatement": "Action",
    "nextStatement": "Action",
    "colour": 40
}]);
Blockly.Python["on_message"] = function(block) {
    Blockly.Python.definitions_["import_discord"] = "import discord";
    Blockly.Python.definitions_["_intents_=_discord.Intents.default()"] = "_intents = discord.Intents.default()";
    Blockly.Python.definitions_["_intents.message_content_=_True"] = "_intents.message_content = True";
    Blockly.Python.definitions_["_client_=_discord.Client(intents_=__intents)"] = "_client = discord.Client(intents = _intents)";
    var code = "@_client.event\nasync def on_message(_message):\n" + Blockly.Python.statementToCode(block, "DO");
    return code;
};

Blockly.defineBlocksWithJsonArray([{
    "type": "get_messagecontent",
    "message0": "Get message content",
    "args0": [],
    "output": "String",
    "colour": 40
}]);
Blockly.Python["get_messagecontent"] = function(block) {
    Blockly.Python.definitions_["import_discord"] = "import discord";
    Blockly.Python.definitions_["_intents_=_discord.Intents.default()"] = "_intents = discord.Intents.default()";
    Blockly.Python.definitions_["_intents.message_content_=_True"] = "_intents.message_content = True";
    Blockly.Python.definitions_["_client_=_discord.Client(intents_=__intents)"] = "_client = discord.Client(intents = _intents)";
    Blockly.Python.definitions_["_message_=_None"] = "_message = None";
    var code = "str(_message.content) if _message else \"\"";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.defineBlocksWithJsonArray([{
    "type": "get_messageuser",
    "message0": "Get message author",
    "args0": [],
    "output": "discord.ClientUser",
    "colour": 40
}]);
Blockly.Python["get_messageuser"] = function(block) {
    Blockly.Python.definitions_["import_discord"] = "import discord";
    Blockly.Python.definitions_["_intents_=_discord.Intents.default()"] = "_intents = discord.Intents.default()";
    Blockly.Python.definitions_["_intents.message_content_=_True"] = "_intents.message_content = True";
    Blockly.Python.definitions_["_client_=_discord.Client(intents_=__intents)"] = "_client = discord.Client(intents = _intents)";
    Blockly.Python.definitions_["_message_=_None"] = "_message = None";
    var code = "_message.author if _message else None";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.defineBlocksWithJsonArray([{
    "type": "get_botuser",
    "message0": "Get bot user",
    "args0": [],
    "output": "discord.ClientUser",
    "colour": 40
}]);
Blockly.Python["get_botuser"] = function(block) {
    Blockly.Python.definitions_["import_discord"] = "import discord";
    Blockly.Python.definitions_["_intents_=_discord.Intents.default()"] = "_intents = discord.Intents.default()";
    Blockly.Python.definitions_["_intents.message_content_=_True"] = "_intents.message_content = True";
    Blockly.Python.definitions_["_client_=_discord.Client(intents_=__intents)"] = "_client = discord.Client(intents = _intents)";
    Blockly.Python.definitions_["_message_=_None"] = "_message = None";
    var code = "_client.user";
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.defineBlocksWithJsonArray([{
    "type": "start_bot",
    "message0": "Start bot with token %1",
    "args0": [
        {"type": "input_value", "name": "TOKEN", "check": "String"}
    ],
    "previousStatement": "Action",
    "colour": 40
}]);
Blockly.Python["start_bot"] = function(block) {
    Blockly.Python.definitions_["import_discord"] = "import discord";
    Blockly.Python.definitions_["_intents_=_discord.Intents.default()"] = "_intents = discord.Intents.default()";
    Blockly.Python.definitions_["_intents.message_content_=_True"] = "_intents.message_content = True";
    Blockly.Python.definitions_["_client_=_discord.Client(intents_=__intents)"] = "_client = discord.Client(intents = _intents)";
    var code = "_client.run(" + Blockly.Python.valueToCode(block, "TOKEN", Blockly.Python.ORDER_ATOMIC) + ")";
    return code;
};

Blockly.defineBlocksWithJsonArray([{
    "type": "send_message",
    "message0": "Send message %1",
    "args0": [
        {"type": "input_value", "name": "MESSAGE", "check": "String"}
    ],
    "previousStatement": "Action",
    "nextStatement": "Action",
    "colour": 40
}]);
Blockly.Python["send_message"] = function(block) {
    Blockly.Python.definitions_["import_discord"] = "import discord";
    Blockly.Python.definitions_["_intents_=_discord.Intents.default()"] = "_intents = discord.Intents.default()";
    Blockly.Python.definitions_["_intents.message_content_=_True"] = "_intents.message_content = True";
    Blockly.Python.definitions_["_client_=_discord.Client(intents_=__intents)"] = "_client = discord.Client(intents = _intents)";
    var code = "await _message.channel.send(" + Blockly.Python.valueToCode(block, "MESSAGE", Blockly.Python.ORDER_ATOMIC) + ") if _message else None";
    return code;
};

/*********************/

const toolbox = {
    "kind": "categoryToolbox",
    "contents": [
        {
            "kind": "category",
            "name": "Loops",
            "categorystyle": "loop_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "controls_for"
                },
                {
                    "kind": "block",
                    "type": "controls_forEach"
                },
                {
                    "kind": "block",
                    "type": "controls_whileUntil"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Logic",
            "categorystyle": "logic_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "controls_if"
                },
                {
                    "kind": "block",
                    "type": "logic_compare"
                },
                {
                    "kind": "block",
                    "type": "logic_operation"
                },
                {
                    "kind": "block",
                    "type": "logic_boolean"
                },
                {
                    "kind": "block",
                    "type": "logic_null"
                },
                {
                    "kind": "block",
                    "type": "logic_ternary"
                },
            ]
        },
        {
            "kind": "category",
            "name": "Math",
            "categorystyle": "math_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "math_number"
                },
                {
                    "kind": "block",
                    "type": "math_arithmetic"
                },
                {
                    "kind": "block",
                    "type": "math_single"
                },
                {
                    "kind": "block",
                    "type": "math_trig"
                },
                {
                    "kind": "block",
                    "type": "math_constant"
                },
                {
                    "kind": "block",
                    "type": "math_round"
                },
                {
                    "kind": "block",
                    "type": "math_on_list"
                },
                {
                    "kind": "block",
                    "type": "math_modulo"
                },
                {
                    "kind": "block",
                    "type": "math_constrain"
                },
                {
                    "kind": "block",
                    "type": "math_random_int"
                },
                {
                    "kind": "block",
                    "type": "math_random_float"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Text",
            "categorystyle": "text_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "text"
                },
                {
                    "kind": "block",
                    "type": "text_multiline"
                },
                {
                    "kind": "block",
                    "type": "text_join"
                },
                {
                    "kind": "block",
                    "type": "text_append"
                },
                {
                    "kind": "block",
                    "type": "text_length"
                },
                {
                    "kind": "block",
                    "type": "text_isEmpty"
                },
                {
                    "kind": "block",
                    "type": "text_indexOf"
                },
                {
                    "kind": "block",
                    "type": "text_charAt"
                },
                {
                    "kind": "block",
                    "type": "text_getSubstring"
                },
                {
                    "kind": "block",
                    "type": "text_changeCase"
                },
                {
                    "kind": "block",
                    "type": "text_trim"
                },
                {
                    "kind": "block",
                    "type": "text_count"
                },
                {
                    "kind": "block",
                    "type": "text_replace"
                },
                {
                    "kind": "block",
                    "type": "text_reverse"
                },
                {
                    "kind": "block",
                    "type": "text_print"
                },
                {
                    "kind": "block",
                    "type": "text_prompt_ext"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Lists",
            "categorystyle": "list_category",
            "contents": [
                {
                    "kind": "block",
                    "type": "lists_create_with"
                },
                {
                    "kind": "block",
                    "type": "lists_length"
                },
                {
                    "kind": "block",
                    "type": "lists_isEmpty"
                },
                {
                    "kind": "block",
                    "type": "lists_indexOf"
                },
                {
                    "kind": "block",
                    "type": "lists_getIndex"
                },
                {
                    "kind": "block",
                    "type": "lists_setIndex"
                },
                {
                    "kind": "block",
                    "type": "lists_getSublist"
                },
                {
                    "kind": "block",
                    "type": "lists_split"
                },
                {
                    "kind": "block",
                    "type": "lists_sort"
                },
                {
                    "kind": "block",
                    "type": "lists_reverse"
                }
            ]
        },
        {
            "kind": "category",
            "name": "Variables",
            "categorystyle": "variable_category",
            "custom": "VARIABLE"
        },
        {
            "kind": "category",
            "name": "Functions",
            "categorystyle": "procedure_category",
            "custom": "PROCEDURE"
        },
        {
            "kind": "category",
            "name": "Discord",
            "colour": "40",
            "contents": [
                {
                    "kind": "block",
                    "type": "on_ready"
                },
                {
                    "kind": "block",
                    "type": "on_message"
                },
                {
                    "kind": "block",
                    "type": "get_botuser"
                },
                {
                    "kind": "block",
                    "type": "get_messagecontent"
                },
                {
                    "kind": "block",
                    "type": "get_messageuser"
                },
                {
                    "kind": "block",
                    "type": "send_message"
                },
                {
                    "kind": "block",
                    "type": "start_bot"
                }
            ]
        }
    ]
}

const workspace = Blockly.inject(blockly_div,
    {toolbox: toolbox});
const onresize = function(e) {
    blockly_div.style.width = window.innerWidth + "px";
    blockly_div.style.height = window.innerHeight - 35 + "px";
    Blockly.svgResize(workspace);
};
window.addEventListener("resize", onresize, false);
onresize();

const save = function() {
    const serializer = new Blockly.serialization.blocks.BlockSerializer();
    const state = serializer.save(workspace);
    document.getElementById("out").readOnly = true;
    document.getElementById("out").value = JSON.stringify(state, null, 4);
    document.getElementById("dataio").style.display = "block";
    document.getElementById("load").style.display = "none";
}

const load = function() {
    const serializer = new Blockly.serialization.blocks.BlockSerializer();
    const state = serializer.save(workspace);
    document.getElementById("out").readOnly = false;
    document.getElementById("out").value = JSON.stringify(state, null, 4);
    document.getElementById("dataio").style.display = "block";
    document.getElementById("load").style.display = "block";
}

const load2 = function() {
    const serializer = new Blockly.serialization.blocks.BlockSerializer();
    try {
        var data = JSON.parse(document.getElementById('out').value);
        if(data != null) serializer.load(data, workspace);
    } catch (error) {
        window.alert("Oh oh something went wrong !\n" + error);
    }
}

const export_py = function() {
    document.getElementById("out").readOnly = true;
    const python_code = Blockly.Python.workspaceToCode(workspace);
    document.getElementById("out").value = python_code;
    document.getElementById("dataio").style.display = "block";
    document.getElementById("load").style.display = "none";
}
