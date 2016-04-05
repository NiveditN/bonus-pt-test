var CardModel = {
  "_id": "",
  "name": "",
  "isActive": true,
  "description": "",
  "help": "'url'",
  "businessId": "",
  "rules": {
    "stampGift": {
      "side": false,
      "description": "",
      "rows": 2,
      "columns": 4,
      "stamp": {
        "image": "",
        "placeholder": ""
      },
      "style": {
        "left": "",
        "top": "",
        "z-index": "",
        "height": "",
        "width": ""
      },
      "gifts": [
        {
          "stampsRequired": 4,
          "name": "Free Drink",
          "description": "",
          "image": "",
          "placeholderImage": ""
        },
        {
          "stampsRequired": 8,
          "name": "Free Ramen",
          "description": "",
          "image": "",
          "placeholderImage": ""
        }
      ],
      "transactionData": {
        "stampsAttained": {
          "defaultValue": 0,
          "editable": false
        },
        "stampsUsed": {
          "defaultValue": 0,
          "editable": false
        },
        "giftsClaimed": {
          "defaultValue": 0,
          "editable": false
        }
      },
      "transactions": {
        "issueStamp": {
          "permission": "issue-stamp",
          "logic": "stampsAttained+=1"
        },
        "revokeStamp": {
          "permission": "revoke-stamp",
          "logic": "stampsAttained-=1"
        },
        "issueGift": {
          "permission": "issue-gift",
          "logic": "giftsClaimed+=1"
        },
        "revokeGift": {
          "permission": "revoke-gift",
          "logic": "giftsClaimed-=1"
        }
      }
    },
    "startDate": {
      "side": false,
      "style": {
        "left": "%",
        "top": "%",
        "z-index": "",
        "height": "%",
        "width": "%",
        "font-family": "Arial",
        "font-size": "%",
        "color": "#000000",
        "font-weight": "bold",
        "font-style": "normal"
      },
      "dataFields": {
        "date": {
          "defaultValue": "today",
          "editable": true
        }
      }
    },
    "endDate": {
      "side": false,
      "style": {
        "left": "%",
        "top": "%",
        "z-index": "",
        "height": "%",
        "width": "%",
        "font-family": "Arial",
        "font-size": "%",
        "color": "#000000",
        "font-weight": "bold",
        "font-style": "normal"
      },
      "dataFields": {
        "date": {
          "defaultValue": "today",
          "editable": true
        }
      }
    }
  },
  "background": [
    {
      "side": true,
      "style": { 
        "background-color": "#FFFFFF",
        "background-image": "url('smiley.gif')",
        "background-repeat": "no-repeat",
        "background-attachment": "fixed",
        "background-position": "30% 20%"
      }      
    },
    {
      "side": false,
      "style": {
        "background-color": "#FFFFFF",
        "background-image": "url('smiley.gif')",
        "background-repeat": "no-repeat",
        "background-attachment": "fixed",
        "background-position": "30% 20%"  
      }      
    }
  ],
  "texts": [
    {
      "side": true,
      "content": "",
      "url": "",
      "style": {
        "left": "%",
        "top": "%",
        "z-index": "",
        "height": "%",
        "width": "%",
        "font-family": "Arial",
        "font-size": "%",
        "color": "#000000",
        "font-weight": "bold",
        "font-style": "normal"
      }
    }
  ],
  "images": [
    {
      "side": false,
      "url": "",
      "style": {
        "left": "",
        "top": "",
        "z-index": "",
        "height": "",
        "width": ""
      }
    }
  ],
  "fields": [
    {
      "side": true,
      "name": "collection_name.fieldName",
      "url": "",
      "style": {
        "left": "",
        "top": "",
        "z-index": "",
        "height": "",
        "width": "",
        "font-family": "",
        "font-size": "",
        "color": "",
        "font-weight": "bold",
        "font-style": "normal"
      }
    }
  ]
}