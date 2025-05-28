using System.Net.Http;
using System.Net.Http.Json;
using SynapseBook.Models;

namespace SynapseBook.Services
{
    public class NotesService
    {
        private readonly HttpClient _httpClient;

        public NotesService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<List<Notes>> GetAllNotesAsync()
        {
            return await _httpClient.GetFromJsonAsync<List<Notes>>("api/notes");
        }
    }
}
