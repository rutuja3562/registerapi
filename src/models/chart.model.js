const mongoose = require("mongoose");

let chartSchema = new mongoose.Schema({
  end_year: { type: String },
  intensity: { type: Number },
  sector: { type: String },
  topic: { type: String },
  insight: { type: String },
  url: { type: String },
  region: { type: String },
  start_year: { type: String },
  published: { type: String },
  impact: { type: String },
  added: { type: String },
  country: { type: String },
  relevance: { type:Number },
  pestle: { type: String },
  source: { type: String },
  title: { type: String },
  likelihood: { type: Number },
},
{
  timestamps: true,
  versionKey: false,
});

module.exports = mongoose.model("chart", chartSchema);

// "end_year": "",
// "intensity": 6,
// "sector": "",
// "topic": "market",
// "insight": "N-Hexane Market Hit at a CAGR of 5% by 2024 - PMR Report",
// "url": "http://www.sbwire.com/press-releases/n-hexane-market-hit-at-a-cagr-of-5-by-2024-pmr-report-761520.htm",
// "region": "World",
// "start_year": "",
// "impact": "",
// "added": "January, 19 2017 00:55:54",
// "published": "January, 18 2017 00:00:00",
// "country": "",
// "relevance": 2,
// "pestle": "Economic",
// "source": "SBWire",
// "title": "Polymerization will remain top 3 end-users in global n-Hexane Market.",
// "likelihood": 3
