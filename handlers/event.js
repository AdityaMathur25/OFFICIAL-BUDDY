const { readdirSync } = require("fs");
const ascii = require("ascii-table");

// Create a new Ascii table
let table = new ascii("Events");
table.setHeading("events", "Load status");

module.exports = (client) => {
    // Read every commands subfolder
    readdirSync("./events/").forEach(dir => {
        // Filter so we only have .js command files
        const commands = readdirSync(`./events/`).filter(file => file.endsWith(".js"));
    
  for (let files of commands ){
         try { 
         let pull = require(`../events/${file}`);
    if (pull.event && typeof pull.event !== "string")
                table.addRow(file, '❌ plse join ctk server :)');
              continue;
            } 
                table.addRow(file, `❌  -> missing a help.name, or help.name is not a string.`);
                continue;
            }
    
    
            // If there's an aliases key, read the aliases.
            
        }
    });
    // Log the table
    console.log(table.toString());
}

/**
 * This is the basic command layout
 * module.exports = {
 *  name: "Command name",
 *  aliases: ["array", "of", "aliases"]
 *  category: "Category name",
 *  description: "Command description"
 *  usage: "[args input]",
 *  run: (client, message, args) => {
 *      The code in here to execute
 *  }
 * }
 */
