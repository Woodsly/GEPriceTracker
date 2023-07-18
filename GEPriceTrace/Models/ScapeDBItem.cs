using System;
using System.Collections.Generic;

namespace GEPriceTrace.Models;

public partial class ScapeDBItem
{
    public int Id { get; set; }

    public string? Icon { get; set; }

    public string? IconLarge { get; set; }

    public int? ItemId { get; set; }

    public string? Type { get; set; }

    public string? TypeIcon { get; set; }

    public string? Name { get; set; }

    public string? Description { get; set; }

    public string? CurrentTrend { get; set; }

    public string? CurrentPrice { get; set; }

    public string? TodayTrend { get; set; }

    public string? TodayPrice { get; set; }

    public string? Members { get; set; }

    public string? Day30Trend { get; set; }

    public string? Day30Change { get; set; }

    public string? Day90Trend { get; set; }

    public string? Day90Change { get; set; }

    public string? Day180Trend { get; set; }

    public string? Day180Change { get; set; }
}
