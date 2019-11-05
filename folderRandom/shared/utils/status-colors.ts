export function getOrderStatusColor(status: string) {
  switch (status) {
    case "Cancelled":
    case "Cloning Failed":
    case "Document Generation Failure":
    case "PDF Generation Failure":
    case "ZIP Generation Failure":
    case "Rejected":
      return "red";

    case "Order Selection Required":
    case "Review Required":
      return "orange";

    case "Inspection Complete":
      return "green";
  }
}
