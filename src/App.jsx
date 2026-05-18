// -----------------------------------------------------------------------------
// ODUWA PREMIUM BACKEND SYSTEM (Standalone Production Engine)
// Core Architect: Senior Full-Stack Engineer
// Target: Google Spreadsheet & Luxury Email Engine
// -----------------------------------------------------------------------------

// Core Target Spreadsheet ID
const SPREADSHEET_ID = "1YKmN18XBKC0nsvdW0nnohCVkIKBCJ_Z_zLVY03tHxBI";

// Sheet tab database configuration
const SHEET_BOOKINGS    = "Bookings";
const SHEET_SUBSCRIBERS = "Subscribers";
const SHEET_CHECKOUTS   = "Orders";

// Mail Dispatch Configurations
const SENDER_EMAIL         = "booking@kingoduwa.com"; // Official Sender Outbound Alias
const INTERNAL_NOTIF_EMAIL = "booking@kingoduwa.com"; // Management Notification Endpoint

// Luxury Color Design Tokens
const COLOR_BRAND_GOLD  = "#EAB308"; // Premium Gold Accent
const COLOR_BRAND_BLACK = "#030303"; // Premium Onyx Deep Background
const COLOR_CARD_BLACK  = "#0D0D0D"; // Dark Card Fill
const COLOR_TEXT_LIGHT  = "#FAFAFA"; // Light Off-White Typography
const COLOR_TEXT_MUTED  = "#A3A3A3"; // Subdued Gray Text

/**
 * Resolves the Google Spreadsheet connection using the explicit ID.
 * Avoids getActiveSpreadsheet context issues in independent web app executions.
 */
function getTargetSpreadsheet() {
  try {
    return SpreadsheetApp.openById(SPREADSHEET_ID);
  } catch (err) {
    throw new Error("Unable to establish target connection to Spreadsheet (ID: " + SPREADSHEET_ID + "). Ensure correct sharing permissions are configured. Details: " + err.message);
  }
}

/**
 * Intercepts preflight options requests for browser-to-script communication.
 */
function doOptions(e) {
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Serves as the primary programmatic router for incoming HTTP POST payloads.
 */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) {
      throw new Error("Payload is empty or missing postData object.");
    }

    // Capture and clean post content to prevent parser failures
    let rawData = e.postData.contents.trim();
    
    // Remove potential non-JSON enclosing quotation markers if sent as plain text strings
    if (rawData.charAt(0) === '"' && rawData.charAt(rawData.length - 1) === '"') {
      rawData = rawData.substring(1, rawData.length - 1);
    }
    
    const data = JSON.parse(rawData);
    const action = data.action;
    
    // Ensure data sheet layouts are initialized
    initializeDatabase();
    
    let outcomeMessage = "";
    if (action === 'booking') {
      outcomeMessage = processBooking(data);
    } else if (action === 'subscribe') {
      outcomeMessage = processSubscription(data);
    } else if (action === 'checkout') {
      outcomeMessage = processCheckout(data);
    } else {
      throw new Error("Invalid Action Protocol submitted inside payload.");
    }
    
    return buildJsonResponse({ success: true, message: outcomeMessage });
    
  } catch (error) {
    Logger.log("Critical execution error registered: " + error.toString());
    return buildJsonResponse({ success: false, message: error.toString() });
  }
}

/**
 * Confirms database layouts are operational across active sheets.
 */
function initializeDatabase() {
  const ss = getTargetSpreadsheet();
  
  if (!ss.getSheetByName(SHEET_BOOKINGS)) {
    const bSheet = ss.insertSheet(SHEET_BOOKINGS);
    bSheet.appendRow(["Timestamp", "Booker Name", "Email", "Event Date", "Location", "Budget Range", "Special Notes"]);
    bSheet.getRange("A1:G1").setFontWeight("bold").setBackground("#1C1917").setFontColor("#FFFFFF");
  }
  
  if (!ss.getSheetByName(SHEET_SUBSCRIBERS)) {
    const sSheet = ss.insertSheet(SHEET_SUBSCRIBERS);
    sSheet.appendRow(["Timestamp", "Subscriber Email"]);
    sSheet.getRange("A1:B1").setFontWeight("bold").setBackground("#1C1917").setFontColor("#FFFFFF");
  }
  
  if (!ss.getSheetByName(SHEET_CHECKOUTS)) {
    const cSheet = ss.insertSheet(SHEET_CHECKOUTS);
    cSheet.appendRow(["Timestamp", "Customer Name", "Email", "Delivery Address", "Phone", "Items Purchased", "Total Price"]);
    cSheet.getRange("A1:G1").setFontWeight("bold").setBackground("#1C1917").setFontColor("#FFFFFF");
  }
}

/**
 * Wraps dynamic body content inside a luxury responsive HTML template structure.
 */
function buildBrandedHtmlEmail(headerText, bodyHtml) {
  return `
    <div style="background-color: ${COLOR_BRAND_BLACK}; color: ${COLOR_TEXT_LIGHT}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; padding: 40px 20px; max-width: 600px; margin: 0 auto; border-radius: 16px; border: 1px solid #1A1A1A;">
      <div style="text-align: center; margin-bottom: 35px; border-bottom: 1px solid #1A1A1A; padding-bottom: 25px;">
        <h1 style="font-size: 32px; letter-spacing: 0.3em; color: #FFFFFF; font-weight: 900; text-transform: uppercase; margin: 0 0 4px 0;">ODUWA</h1>
        <p style="font-size: 9px; letter-spacing: 0.55em; color: ${COLOR_BRAND_GOLD}; text-transform: uppercase; margin: 0; font-weight: bold;">The Sonic Architect</p>
      </div>
      
      <div style="padding: 10px 15px; line-height: 1.8; color: #E5E5E5; font-size: 15px;">
        <h2 style="color: #FFFFFF; font-size: 19px; text-transform: uppercase; letter-spacing: 0.12em; font-weight: bold; margin-bottom: 20px; border-left: 3px solid ${COLOR_BRAND_GOLD}; padding-left: 12px;">
          ${headerText}
        </h2>
        ${bodyHtml}
      </div>
      
      <div style="margin-top: 45px; border-top: 1px solid #1A1A1A; padding-top: 30px; text-align: center; font-size: 11px; color: ${COLOR_TEXT_MUTED};">
        <p style="letter-spacing: 0.2em; font-weight: bold; color: #FFFFFF; margin-bottom: 15px; font-size: 10px;">JOIN THE TRIBE IN REAL FREQUENCIES</p>
        <p style="margin-bottom: 25px;">
          <a href="https://instagram.com/oduwaiam" style="color: ${COLOR_BRAND_GOLD}; text-decoration: none; margin: 0 12px; font-weight: bold; letter-spacing: 0.05em;">INSTAGRAM</a> | 
          <a href="https://www.youtube.com/@ODUWAIAM?sub_confirmation=1" style="color: ${COLOR_BRAND_GOLD}; text-decoration: none; margin: 0 12px; font-weight: bold; letter-spacing: 0.05em;">YOUTUBE</a> | 
          <a href="https://twitter.com/oduwaiam" style="color: ${COLOR_BRAND_GOLD}; text-decoration: none; margin: 0 12px; font-weight: bold; letter-spacing: 0.05em;">X</a>
        </p>
        <p style="letter-spacing: 0.25em; font-size: 8px; text-transform: uppercase; color: #525252;">&copy; 2026 ODUWA | MANAGEMENT & DESIGNS LLC</p>
      </div>
    </div>
  `;
}

/**
 * Processes incoming booking payloads.
 */
function processBooking(data) {
  const ss = getTargetSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_BOOKINGS);
  const timestamp = new Date();
  
  sheet.appendRow([
    timestamp,
    data.name || 'Anonymous Booker',
    data.email,
    data.date || 'TBD',
    data.location || 'TBD',
    data.budget || 'TBD',
    data.notes || ''
  ]);
  
  // Internal Alert Email body compilation
  const internalSubject = "🚨 NEW BOOKING REQUEST RECEIVED - ODUWA Portal";
  const internalBody = `
    <p>Management Team,</p>
    <p>A new global booking inquiry has been recorded and logged to the master spreadsheet:</p>
    <div style="background-color: ${COLOR_CARD_BLACK}; border: 1px solid #1D1D1D; padding: 15px; border-radius: 8px; font-size: 13px;">
      <p style="margin: 4px 0;"><strong>Company/Booker:</strong> ${data.name || 'Not Provided'}</p>
      <p style="margin: 4px 0;"><strong>Email Address:</strong> ${data.email}</p>
      <p style="margin: 4px 0;"><strong>Proposed Date:</strong> ${data.date || 'To be determined'}</p>
      <p style="margin: 4px 0;"><strong>Proposed Venue/Location:</strong> ${data.location || 'To be determined'}</p>
      <p style="margin: 4px 0;"><strong>Budget Bracket:</strong> ${data.budget || 'Unspecified'}</p>
      <p style="margin: 4px 0;"><strong>Specific Requirements:</strong> ${data.notes || 'None declared'}</p>
    </div>
  `;
  sendResilientEmail(INTERNAL_NOTIF_EMAIL, internalSubject, buildBrandedHtmlEmail("Internal Management Alert", internalBody), "A booking query has been received.");

  // External Customer Email body compilation
  const bookerSubject = "ODUWA | Booking Inquiry Received";
  const bookerBody = `
    <p>Dear <strong>${data.name || 'Representative'}</strong>,</p>
    <p>Thank you for initiating your project inquiry. Our agency representing the live and performance coordination department of ODUWA has successfully received your proposal.</p>
    
    <div style="background-color: ${COLOR_CARD_BLACK}; border: 1px solid #1D1D1D; border-radius: 8px; padding: 18px; margin: 20px 0;">
      <p style="margin: 4px 0; font-size: 12px;"><strong style="color: ${COLOR_BRAND_GOLD};">Target Date:</strong> ${data.date || 'To be determined'}</p>
      <p style="margin: 4px 0; font-size: 12px;"><strong style="color: ${COLOR_BRAND_GOLD};">Venue Profile:</strong> ${data.location || 'To be determined'}</p>
      <p style="margin: 4px 0; font-size: 12px;"><strong style="color: ${COLOR_BRAND_GOLD};">Allocated Bracket:</strong> ${data.budget || 'Under Negotiation'}</p>
    </div>
    
    <p>Our operations division actively evaluates rider profiles and schedules across continental borders. A representative will contact you with booking specifications within 48 business hours.</p>
    <p style="margin-top: 30px;">In collaboration,<br><em style="color: #FFFFFF; font-style: normal; font-weight: bold;">ODUWA Agency Services Desk</em></p>
  `;
  sendResilientEmail(data.email, bookerSubject, buildBrandedHtmlEmail("Request Under Review", bookerBody), "Thank you for booking ODUWA. We have received your query.");
  
  return "Booking request registered successfully.";
}

/**
 * Processes audience email subscription entry.
 */
function processSubscription(data) {
  const ss = getTargetSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_SUBSCRIBERS);
  const timestamp = new Date();
  
  // Verify user is not already recorded to avoid duplicates
  if (sheet.getLastRow() > 1) {
    const existingEmails = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getValues();
    for (let i = 0; i < existingEmails.length; i++) {
      if (existingEmails[i][0].toString().toLowerCase() === data.email.toLowerCase()) {
        return "Your coordinates are already mapped inside our directory.";
      }
    }
  }
  
  sheet.appendRow([timestamp, data.email]);
  
  // Internal Alert
  const internalSubject = "⚡ TRIBE MEMBERSHIP EXPANSION - New Sub";
  const internalBody = `<p>A new user has logged into the Oduwa ecosystem:</p><p><strong>Email Address:</strong> ${data.email}</p>`;
  sendResilientEmail(INTERNAL_NOTIF_EMAIL, internalSubject, buildBrandedHtmlEmail("Mailing List Activity", internalBody), `New Subscriber registered: ${data.email}`);

  // Welcome Email Body
  const subSubject = "ODUWA | Welcome to the Tribe";
  const subBody = `
    <p>You have entered the inner sanctum.</p>
    <p>Your digital frequency is now synchronized directly with the ODUWA platform database. You will henceforth receive priority allocations for concert ticket releases, early access to design cycles, and secret visual archives before public distribution.</p>
    
    <div style="border-left: 2px solid ${COLOR_BRAND_GOLD}; padding-left: 15px; margin: 25px 0;">
      <p style="color: #FFFFFF; font-weight: bold; margin: 0; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em;">BELLY DANCER OUT NOW - WORLDWIDE</p>
      <p style="margin: 5px 0 0 0; font-size: 12px; color: ${COLOR_TEXT_MUTED};">Visual systems streaming globally. Ready to transcend boundaries.</p>
    </div>
    
    <p>Welcome to the collaborative frequency.</p>
    <p style="margin-top: 30px;">In rhythm,<br><em style="color: #FFFFFF; font-style: normal; font-weight: bold;">ODUWA Inner Circle Management</em></p>
  `;
  sendResilientEmail(data.email, subSubject, buildBrandedHtmlEmail("Registry Verified", subBody), "Welcome to the Tribe. Your subscription is verified.");
  
  return "Subscription processed successfully.";
}

/**
 * Processes custom product checkout orders (Retained for future active store endpoints).
 */
function processCheckout(data) {
  const ss = getTargetSpreadsheet();
  const sheet = ss.getSheetByName(SHEET_CHECKOUTS);
  const timestamp = new Date();
  
  sheet.appendRow([
    timestamp,
    data.name || 'Anonymous Customer',
    data.email,
    data.address || 'Standard Delivery',
    data.phone || 'None provided',
    data.items || 'Digital Order Selection',
    "$" + (data.total || "0.00")
  ]);
  
  // Internal dispatch email
  const internalSubject = "🛒 NEW APPAREL DISPATCH ORDER - ODUWA Merch Desk";
  const internalBody = `
    <p>Operational Crew,</p>
    <p>A customer has completed checking out their apparel selection:</p>
    <div style="background-color: ${COLOR_CARD_BLACK}; border: 1px solid #1D1D1D; padding: 15px; border-radius: 8px; font-size: 13px;">
      <p style="margin: 4px 0;"><strong>Customer Name:</strong> ${data.name || 'Not Declared'}</p>
      <p style="margin: 4px 0;"><strong>Shipping Coordinates:</strong> ${data.address || 'Standard Delivery'}</p>
      <p style="margin: 4px 0;"><strong>Direct Contact:</strong> ${data.phone || 'Unspecified'}</p>
      <p style="margin: 4px 0;"><strong>Items Demanded:</strong> ${data.items || 'Standard Selection'}</p>
      <p style="margin: 4px 0;"><strong>Total Cleared:</strong> $${data.total || '0.00'}</p>
    </div>
  `;
  sendResilientEmail(INTERNAL_NOTIF_EMAIL, internalSubject, buildBrandedHtmlEmail("Apparel Desk Allocation", internalBody), "New clothing checkout registered.");

  // Dispatch customer invoice email
  const customerSubject = "ODUWA | Design Allocation Receipt";
  const customerBody = `
    <p>Dear <strong>${data.name || 'Customer'}</strong>,</p>
    <p>Our global shipping warehouse has processed your order. The design components are selected and verified for immediate dispatching workflows.</p>
    
    <div style="background-color: ${COLOR_CARD_BLACK}; border: 1px solid #1D1D1D; border-radius: 8px; padding: 18px; margin: 20px 0;">
      <p style="margin: 4px 0; font-size: 12px;"><strong style="color: ${COLOR_BRAND_GOLD};">Design Portfolio:</strong> ${data.items || 'Standard Selection'}</p>
      <p style="margin: 4px 0; font-size: 12px;"><strong style="color: ${COLOR_BRAND_GOLD};">Consolidated Value:</strong> $${data.total || '0.00'}</p>
      <p style="margin: 4px 0; font-size: 12px;"><strong style="color: ${COLOR_BRAND_GOLD};">Fulfillment Destination:</strong> ${data.address || 'Standard Delivery'}</p>
    </div>
    
    <p>You will receive automated confirmation containing shipping transit tags once tracking numbers generate with courier partners.</p>
    <p>For any inventory modifications, write to us directly at <a href="mailto:Info@oduwaiam.com" style="color: ${COLOR_BRAND_GOLD}; text-decoration: none; font-weight: bold;">Info@oduwaiam.com</a>.</p>
    <p style="margin-top: 30px;">In collaboration,<br><em style="color: #FFFFFF; font-style: normal; font-weight: bold;">ODUWA Apparel Division</em></p>
  `;
  sendResilientEmail(data.email, customerSubject, buildBrandedHtmlEmail("Checkout Confirmed", customerBody), "Your order has been logged into our inventory system.");
  
  return "Order processed successfully.";
}

/**
 * Safely executes email sending processes. Checks for sender permissions, fallback routing to 
 * active script account if "booking@kingoduwa.com" is not configured as an alias.
 */
function sendResilientEmail(recipient, subject, htmlBody, plainFallback) {
  try {
    const aliases = GmailApp.getAliases();
    const hasAlias = aliases.indexOf(SENDER_EMAIL) > -1;
    
    let options = {
      name: "ODUWA Official",
      htmlBody: htmlBody
    };
    
    if (hasAlias) {
      options.from = SENDER_EMAIL;
    }
    
    GmailApp.sendEmail(recipient, subject, plainFallback, options);
    Logger.log("Outbound transmission queued successfully.");
  } catch (error) {
    Logger.log("Notice: Custom outbound alias unauthorized/inactive. Routing fallback via script execution profile. Context: " + error.toString());
    MailApp.sendEmail({
      to: recipient,
      subject: subject,
      body: plainFallback,
      htmlBody: htmlBody
    });
  }
}

/**
 * Builds standard browser-acceptable CORS-friendly JSON packages.
 */
function buildJsonResponse(payload) {
  const jsonString = JSON.stringify(payload);
  return ContentService.createTextOutput(jsonString)
    .setMimeType(ContentService.MimeType.JSON);
}
