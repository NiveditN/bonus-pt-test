var CardModel = {
  "_id": "",
  "name": "",
  "status": "active/inactive",
  "description": "",
  "help": "",
  "businessId": "",
  "rules": {
    "stampGift": {
      "side": "'front/back'",
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
      "side": "front/back",
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
      "side": "front/back",
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
  "front": {
    "background": {
      "style": {
        "background-color": "#FFFFFF",
        "background-image": "url('smiley.gif')",
        "background-repeat": "no-repeat",
        "background-attachment": "fixed",
        "background-position": "30% 20%"
      }
    },
    "texts": [
      {
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
  },
  "back": {
    "background": {
      "style": {
        "background-color": "#FFFFFF",
        "background-image": "url('smiley.gif')",
        "background-repeat": "no-repeat",
        "background-attachment": "fixed",
        "background-position": "30% 20%"
      }
    },
    "texts": [
      {
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
}