
/**
* Utility for formatting.
*
* @namespace Extractor
*/
class Extract {
    static InputType = (keyboardType: string): string => {
        switch (keyboardType) {
            case "email-address":
                return "email";
            case "numeric":
            case "number-pad":
            case "decimal-pad":
                return "number";
            case "phone-pad":
                return "tel";
            case "url":
                return "url";
            case "visible-password":
                return "text";
            default:
                return "text";
        }
    };
    static AutoComplete = (textContentType: string): string => {
        switch (textContentType) {
            case "emailAddress":
                return "email";
            case "password":
                return "current-password";
            case "newPassword":
                return "new-password";
            case "username":
                return "username";
            case "name":
                return "name";
            case "givenName":
                return "given-name";
            case "familyName":
                return "family-name";
            case "telephoneNumber":
                return "tel";
            case "postalCode":
                return "postal-code";
            case "streetAddressLine1":
                return "address-line1";
            case "streetAddressLine2":
                return "address-line2";
            case "fullStreetAddress":
                return "street-address";
            case "countryName":
                return "country-name";
            case "creditCardNumber":
                return "cc-number";
            case "creditCardExpiration":
                return "cc-exp";
            case "creditCardSecurityCode":
                return "cc-csc";
            default:
                return "off";
        }
    };
}
export default Extract;