using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Globalization;
using Newtonsoft.Json.Converters;


namespace GEPriceTrace.Models
{

    public partial class WikiItems
    {
        [JsonProperty("data")]
        public Dictionary<string, Datum> Data { get; set; }
    }

    public partial class Datum
    {
        [JsonProperty("high")]
        public long? High { get; set; }

        [JsonProperty("highTime")]
        public long? HighTime { get; set; }

        [JsonProperty("low")]
        public long? Low { get; set; }

        [JsonProperty("lowTime")]
        public long? LowTime { get; set; }
    }


}

