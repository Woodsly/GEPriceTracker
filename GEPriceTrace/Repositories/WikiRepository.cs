using GEPriceTrace.Models;
using System.Net.Http;
using System.Threading.Tasks;

namespace GEPriceTrace.Repositories
{
    public class WikiRepository : IWikiRepository
    {
        private readonly HttpClient _httpClient;

        public WikiRepository(HttpClient httpClient)
        {
            _httpClient = httpClient;
            _httpClient.DefaultRequestHeaders.UserAgent.ParseAdd("price tracker concw on disc - very nooby lol");
        }

        public async Task<WikiItems> GetAllWikiItems()
        {
            HttpResponseMessage response = await _httpClient.GetAsync("https://prices.runescape.wiki/api/v1/osrs/latest");
            response.EnsureSuccessStatusCode();
            WikiItems wikiItems = await response.Content.ReadFromJsonAsync<WikiItems>();
            return wikiItems;
        }

        public async Task<WikiItems> GetWikiItemById(int id)
        {
            HttpResponseMessage response = await _httpClient.GetAsync($"https://prices.runescape.wiki/api/v1/osrs/latest?id={id}");
            response.EnsureSuccessStatusCode();
            WikiItems wikiItem = await response.Content.ReadFromJsonAsync<WikiItems>();
            return wikiItem;
        }
    }
}
