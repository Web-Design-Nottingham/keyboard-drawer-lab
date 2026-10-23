import {clean,lines,selected,requireText,number,pence,pounds,section,report,enumValue,webAddress} from './customer-ui.js';
export const config = {
  "title": "Website Accessibility Walkthrough",
  "short": "Make your website easier to use",
  "audience": "For Nottingham business owners",
  "summary": "Try six everyday tasks on your own website, then leave with a clear list of things to improve.",
  "button": "Create my review list",
  "filename": "website-accessibility-review",
  "eyebrow": "A little time. A more usable website.",
  "time": "About 10 minutes",
  "outcome": "A practical list to share with your website designer.",
  "layout": "walkthrough",
  "intro": "Open your website in another tab. Try each task yourself and choose what happened. You do not need to know how the site was built.",
  "note": "These are introductory checks. They do not establish accessibility compliance or replace a full accessibility review.",
  "fields": [
    {
      "id": "business",
      "label": "Business name",
      "help": "Optional. Used only to label your review.",
      "required": false,
      "type": "text",
      "maxLength": 180
    },
    {
      "id": "keyboard",
      "label": "1. Can you reach and use the main links with your keyboard?",
      "options": [
        [
          "yes",
          "Yes"
        ],
        [
          "no",
          "No"
        ],
        [
          "unsure",
          "Not sure"
        ]
      ],
      "help": "Press Tab to move forward, Shift + Tab to move back and Enter to open a link. Try the menu too.",
      "required": true,
      "type": "select"
    },
    {
      "id": "focus",
      "label": "2. Can you see where the keyboard is on the page?",
      "options": [
        [
          "yes",
          "Yes"
        ],
        [
          "no",
          "No"
        ],
        [
          "unsure",
          "Not sure"
        ]
      ],
      "help": "Look for a clear outline or other visible mark on the link or button you are on.",
      "required": true,
      "type": "select"
    },
    {
      "id": "zoom",
      "label": "3. Does the page still work when you make text bigger?",
      "options": [
        [
          "yes",
          "Yes"
        ],
        [
          "no",
          "No"
        ],
        [
          "unsure",
          "Not sure"
        ]
      ],
      "help": "Use your browser zoom at 200%. Check the menu, main text and contact details for overlap or missing content.",
      "required": true,
      "type": "select"
    },
    {
      "id": "labels",
      "label": "4. Do form fields have a visible name?",
      "options": [
        [
          "yes",
          "Yes"
        ],
        [
          "no",
          "No"
        ],
        [
          "unsure",
          "Not sure"
        ]
      ],
      "help": "If the site has a form, check that names such as Email stay visible while you type. Choose Not sure if there is no form.",
      "required": true,
      "type": "select"
    },
    {
      "id": "errors",
      "label": "5. Does the form explain what needs correcting?",
      "options": [
        [
          "yes",
          "Yes"
        ],
        [
          "no",
          "No"
        ],
        [
          "unsure",
          "Not sure"
        ]
      ],
      "help": "Leave a required field blank and try the form without sending a real enquiry. Can you find the issue and fix it?",
      "required": true,
      "type": "select"
    },
    {
      "id": "contrast",
      "label": "6. Can you comfortably read text and buttons?",
      "options": [
        [
          "yes",
          "Yes"
        ],
        [
          "no",
          "No"
        ],
        [
          "unsure",
          "Not sure"
        ]
      ],
      "help": "Look for pale text, text on busy photographs and links that are difficult to spot. This visual check is not a measured contrast test.",
      "required": true,
      "type": "select"
    }
  ],
  "example": {
    "business": "Example Nottingham Studio",
    "keyboard": "yes",
    "focus": "no",
    "zoom": "no",
    "labels": "yes",
    "errors": "unsure",
    "contrast": "yes"
  },
  "sources": [
    [
      "W3C WAI introductory accessibility checks",
      "https://www.w3.org/WAI/test-evaluate/easy-checks/"
    ]
  ]
};
export function evaluate(v){const tasks=[['keyboard','Keyboard access','Ask your designer to make the menu, links and controls usable with Tab, Shift + Tab and Enter.'],['focus','Visible keyboard position','Ask for a clear focus style on every interactive element.'],['zoom','Larger text','Share the page and browser zoom level where content overlaps or disappears.'],['labels','Form labels','Give every field a persistent, visible label.'],['errors','Helpful form errors','Check that errors identify the field and explain how to correct it without losing other answers.'],['contrast','Readable text','Ask your designer to measure text and control contrast, especially over images.']];const fix=[],review=[],ok=[];for(const [id,label,action]of tasks){enumValue(v[id],['yes','no','unsure'],label);(v[id]==='no'?fix:v[id]==='unsure'?review:ok).push(v[id]==='yes'?label+' worked in your check.':label+': '+action);}return report((clean(v.business)||'Your website')+': accessibility review','Based on the tasks you tried, not an automated scan.',[section('Changes to discuss',fix.length?fix:['No problems reported in these six tasks. Other accessibility barriers may still exist.']),section('Check next',review.length?review:['Repeat the tasks on your phone and on a second important page.']),section('What worked in your check',ok),section('Share useful evidence',['Add the page address and a short description of each problem when sending this list to your designer.','A full review should also include assistive technology and user testing.'])]);}
