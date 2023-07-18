using GEPriceTrace.Models;

namespace GEPriceTrace.Repositories
{
    public interface IGEDBRepository
    {
        ScapeDBItem GetDBItemDetails(int itemId);
    }
}
