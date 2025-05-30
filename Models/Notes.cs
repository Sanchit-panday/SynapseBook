namespace SynapseBook.Models
{
    public class Notes
    {
        public required int Id {  get; set; }
        public required string ReferenceNo { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
    }
}
