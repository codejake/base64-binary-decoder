import { writeFileSync } from "fs";

function decodeBase64ToFile(base64String, outputPath) {
  // Convert Base64 URL safe format to standard Base64
  const standardBase64 = base64String.replace(/-/g, "+").replace(/_/g, "/");

  // Create a buffer from the Base64 string
  const buffer = Buffer.from(standardBase64, "base64");

  // Write buffer to file
  writeFileSync(outputPath, buffer);

  console.log(`File saved to ${outputPath}`);
}

// Usage example
const base64Data =
  "kaseP3rMsvK5H4-ULz8cJj0m_g7Mw-6nrkxGi6KDowo4MUZc2r_DdfEALruupskKUp84Ejn9gdoY93FIVZOVtJ1puRFTMj4svkOddinexbKbG2VP9CS7bDI7eH3f7ZoZfKtRBiNVQIYxev3Z_h6awEEeTR60jHylASRbtreyeSVLxQiCAwVajwBlX8gUEbsuTXtBYwSgw30oQVRtxmmvegqQXCV4cXvb-m4Oj0p0QrgQ4sLbxo6h1nkW56OsTzkudlSvvTm82OGv1gaJeXPMlt1vG7__9AXABvxLnhNUoZl0nWTHEGsH-u9aoU24he0SrGtNyC1_R7CCukXHKxMy7lmGWus9qoa1kA_KEbhjQm-2tWBwJoCZGOvh1GDtpFQQVAs_mWDJk3KqSg2k8VqBxw==";

decodeBase64ToFile(base64Data, "decoded_file.bin");
