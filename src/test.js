const arr = `[{"Title":"Adjuster Information","description":"This is about a person called the adjuster who helps with claims."},{"Title":"Payment Agreement","description":"Someone will pay a certain amount of money to someone else."},{"Title":"Release from Claims","description":"The person receiving the payment agrees not to make more claims against ICBC or others for any past or future problems related to a vehicle."},{"Title":"Cooperation with ICBC","description":"The person will help ICBC if they need to take legal action regarding the claims."},{"Title":"Document Signing","description":"The person agrees to sign more documents if needed to follow the terms of this agreement."}][{"Title":"Attendance Agreement","description":"I will go where and when asked to help with an action."},{"Title":"Protection Clause","description":"ICBC will protect me from costs and damages unless I caused them myself."},{"Title":"No Admission of Fault","description":"The payment does not mean ICBC admits to being at fault."},{"Title":"Signatures","description":"There are spaces for signatures and witness information."}]`;
console.log(JSON.parse(arr));