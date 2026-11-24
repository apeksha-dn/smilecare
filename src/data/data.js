// PLACEHOLDERS: replace with real clinic details before launch.
export const CLINIC = { name:'SmileCare Dental Clinic', whatsapp:'910000000000', phone:'+91 00000 00000 (placeholder)', email:'hello@example.com (placeholder)', address:'123 Sample Street, Your City (placeholder address)', hours:'Mon–Sat 9:00–19:00, Sun closed (sample hours)' }
export const waLink = (text) => `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(text)}`

// [slug, name, short description, when it may be recommended]
const T = [
['general-dentistry','General Dentistry','Routine check-ups, fillings and preventive care for every age.','for regular check-ups, cavities or general oral health concerns'],
['teeth-cleaning','Teeth Cleaning','Professional scaling and polishing to remove plaque and tartar.','when plaque, tartar or surface stains build up between brushing'],
['teeth-whitening','Teeth Whitening','Supervised whitening to lighten surface and some deeper stains.','when teeth have stained or yellowed over time'],
['root-canal','Root Canal Treatment','Treatment to clean an infected tooth and save it from removal.','when the inner pulp of a tooth is infected or inflamed'],
['dental-implants','Dental Implants','A fixed replacement for missing teeth anchored in the jawbone.','when one or more teeth are missing and the jawbone is suitable'],
['orthodontics','Orthodontics','Assessment and correction of crooked teeth and bite problems.','for crowding, spacing or bite concerns'],
['braces-aligners','Braces and Clear Aligners','Metal, ceramic or clear options to straighten teeth.','when teeth need gradual alignment'],
['cosmetic-dentistry','Cosmetic Dentistry','Shape, colour and balance refinements for a natural-looking smile.','when you want to improve how your teeth look'],
['dental-veneers','Dental Veneers','Thin shells bonded to the front of teeth to change shape or shade.','for chipped, worn, discoloured or uneven front teeth'],
['tooth-extraction','Tooth Extraction','Careful removal of teeth that cannot be restored.','when a tooth is badly damaged, decayed or impacted'],
['pediatric-dentistry','Pediatric Dentistry','Gentle, child-friendly care from first teeth through the teens.','for children’s check-ups, cavities and prevention'],
['gum-treatment','Gum Treatment','Care for bleeding, swollen or receding gums.','when gums bleed, swell or show signs of periodontal disease'],
['crowns-bridges','Dental Crowns and Bridges','Caps and fixed bridges that restore damaged or missing teeth.','for weakened teeth or gaps left by missing teeth'],
['dentures','Dentures','Removable full or partial replacements for missing teeth.','when several or all teeth are missing']
]
export const treatments = T.map(([slug,name,desc,when]) => ({ slug,name,desc,when,
 benefits:['Plan tailored to your assessment','Comfort-focused approach','Clear explanation of options and costs'],
 steps:['Consultation and examination','Treatment planning and consent','Treatment, with comfort measures as needed','Aftercare advice and follow-up'],
 faqs:[['Is it painful?','Comfort measures such as local anaesthesia are used where appropriate. Your dentist will explain what to expect.'],['How long does it take?','Timing depends on your case. You will get an estimate after your examination.'],['Is it right for me?','Only an examination can confirm that. Results vary between patients.']] }))

// SAMPLE doctors: fictional, for demonstration only.
export const doctors = [
{slug:'dr-asha-rao',name:'Dr. Asha Rao (sample)',qual:'BDS, MDS (sample)',spec:'Cosmetic & Restorative Dentistry',exp:'12 years (sample)',bio:'Sample profile. Focuses on conservative, natural-looking restorative work.'},
{slug:'dr-karan-mehta',name:'Dr. Karan Mehta (sample)',qual:'BDS, MDS Orthodontics (sample)',spec:'Orthodontics',exp:'9 years (sample)',bio:'Sample profile. Treats children and adults with braces and clear aligners.'},
{slug:'dr-nisha-iyer',name:'Dr. Nisha Iyer (sample)',qual:'BDS, MDS Endodontics (sample)',spec:'Root Canal & Implants',exp:'15 years (sample)',bio:'Sample profile. Special interest in pain-free endodontics and implant care.'}]
