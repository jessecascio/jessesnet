
import MedalTable from "./MedalTable";

const medals = ["SOL MOZ BOT", "JOR CUB GUA", "TPE MRI BLR", "KEN NRU KSA", "PAK BLR TPE", "MLT CZE BRA", "KAZ TLS NCA", "TLS ECU GBS", "NRU ECU TAN", "ANG PAR CAF", "KGZ KUW PLE", "NRU AZE ANT", "BEL YUG NCA", "CHA KGZ GRE", "PUR CUB KGZ", "PAK THA PUR", "TLS GUA NRU", "KUW GBS ANT", "UGA ARG GBS", "SRI ARG BOT", "ANT MOZ PAK", "SOL EST PUR", "THA GRN RSA", "MLT MRI GBS", "UGA GUY MRI", "KEN CGO KSA", "GBS BOT UGA", "AZE PAK EST", "BOT NGR GRN", "KAZ KUW GUY", "NCA MLT AZE"];

const table = MedalTable.generate(medals);

console.log(table);
