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
    
        for(let files of commands ) {
       
          try { 
         let pull = require(`../events/${file}`);
    if (pull.event && typeof pull.event !== "string")
                table.addRow(file, '❌ plse join ctk server :)');
              continue;
          }
          pull.event = pull.event|| file.replace(".js", "")
          client.on(pull.event, pull.run.bind(null, client))
                table.addRow(file, `✔️`);
                continue;
          }
      catch(err){
              console.log("something went wrong")
              table.addRow(`✖️ CALL CTK OR DIE`)
      }})
                    console.log(table.tostring())
                                    }