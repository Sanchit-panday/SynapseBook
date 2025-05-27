namespace SynapseBook.Models
{
    public class Booking
    {
        // Identifiers
        public int Id { get; set; }
        public required string BookingReference { get; set; }

        // User Information
        public required string Username { get; set; }

        // Booking Timing
        public DateTime BookingDate { get; set; } = DateTime.UtcNow;
        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }

        // Booking Details
        public string? Description { get; set; }
        public required string BookingType { get; set; }
        public required string BookingStatus { get; set; }
        public string? Location { get; set; }
        public string? CustomerNotes { get; set; }

        // Payment Information
        public float Price { get; set; }
        public bool IsPaid { get; set; }
        public string? PaymentMethod { get; set; }

        // Hourly Billing (optional)
        public bool IsHourlyBased { get; set; } = false;      // true = charged per hour, false = fixed
        public float? HourlyRate { get; set; }     // Used only if IsHourlyBased is true
        public int? TotalHours { get; set; }
    }
}
