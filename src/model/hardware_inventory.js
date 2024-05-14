const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    Item_Holder: {
        type: String,
        required: true,
    },
    Computer_1: {
        IsUsed:{
            type: Boolean,
            required: true,
        },
        Vendor:{
            type: String,
            required: true,
        },
        Brand:{
            type: String,
            required: true,
        },
        Price:{
            type: Number,
            required: true,
        },
        Dates:{
            Purchased:{
                type: Date,
                required: true,
            },
            Warranty_End:{
                type: Date,
                required: true,
            },
        },
        Model:{
            type: String,
            required: true,
        },
        Serial_Number:{
            type: String,
            required: true,
        },
        Asset_ID:{
            type: String,
            required: true,
        },
        PC_ID:{
            type: String,
            required: true,
        },
        CPU:{
            Model:{
                type: String,
                required: true,
            },
            Speed:{
                type: Number,
                required: true,
            },
        },
        RAM:{
            Size:{
                type: Number,
                required: true,
            },
            Type:{
                type: String,
                required: true,
            },
            Speed:{
                type: Number,
                required: true,
            },
        },
        Storage:{
            Disk_1:{
                Type:{
                    type: String,
                    required: true,
                },
                Size:{
                    type: Number,
                    required: true,
                },
            },
            Disk_2:{
                Type:{
                    type: String,
                    required: true,
                },
                Size:{
                    type: Number,
                    required: true,
                },
            },
            Disk_3:{
                Type:{
                    type: String,
                    required: true,
                },
                Size:{
                    type: Number,
                    required: true,
                },
            },
            Disk_4:{
                Type:{
                    type: String,
                    required: true,
                },
                Size:{
                    type: Number,
                    required: true,
                },
            },
        },
        Optical_Drive:{
            type: Boolean,
            required: true,
        },
        OS:{
            Preloaded:{
                type: Boolean,
                required: true,
            },
            Platform:{
                type: String,
            },
            Version:{
                type: String,
            },
        },
        Hostname:{
            type: String,
        },
        Remarks:{
            type: String,
        }
    },
    Computer_2: {
        IsUsed:{
            type: Boolean,
            required: true,
        },
        Vendor:{
            type: String,
            required: true,
        },
        Brand:{
            type: String,
            required: true,
        },
        Price:{
            type: Number,
            required: true,
        },
        Dates:{
            Purchased:{
                type: Date,
                required: true,
            },
            Warranty_End:{
                type: Date,
                required: true,
            },
        },
        Model:{
            type: String,
            required: true,
        },
        Serial_Number:{
            type: String,
            required: true,
        },
        Asset_ID:{
            type: String,
            required: true,
        },
        PC_ID:{
            type: String,
            required: true,
        },
        CPU:{
            Model:{
                type: String,
                required: true,
            },
            Speed:{
                type: Number,
                required: true,
            },
        },
        RAM:{
            Size:{
                type: Number,
                required: true,
            },
            Type:{
                type: String,
                required: true,
            },
            Speed:{
                type: Number,
                required: true,
            },
        },
        Storage:{
            Disk_1:{
                Type:{
                    type: String,
                    required: true,
                },
                Size:{
                    type: Number,
                    required: true,
                },
            },
            Disk_2:{
                Type:{
                    type: String,
                    required: true,
                },
                Size:{
                    type: Number,
                    required: true,
                },
            },
            Disk_3:{
                Type:{
                    type: String,
                    required: true,
                },
                Size:{
                    type: Number,
                    required: true,
                },
            },
            Disk_4:{
                Type:{
                    type: String,
                    required: true,
                },
                Size:{
                    type: Number,
                    required: true,
                },
            },
        },
        Optical_Drive:{
            type: Boolean,
            required: true,
        },
        OS:{
            Preloaded:{
                type: Boolean,
                required: true,
            },
            Platform:{
                type: String,
            },
            Version:{
                type: String,
            },
        },
        Hostname:{
            type: String,
        },
        Remarks:{
            type: String,
        }
    },
    Computer_3: {
        IsUsed:{
            type: Boolean,
            required: true,
        },
        Vendor:{
            type: String,
            required: true,
        },
        Brand:{
            type: String,
            required: true,
        },
        Price:{
            type: Number,
            required: true,
        },
        Dates:{
            Purchased:{
                type: Date,
                required: true,
            },
            Warranty_End:{
                type: Date,
                required: true,
            },
        },
        Model:{
            type: String,
            required: true,
        },
        Serial_Number:{
            type: String,
            required: true,
        },
        Asset_ID:{
            type: String,
            required: true,
        },
        PC_ID:{
            type: String,
            required: true,
        },
        CPU:{
            Model:{
                type: String,
                required: true,
            },
            Speed:{
                type: Number,
                required: true,
            },
        },
        RAM:{
            Size:{
                type: Number,
                required: true,
            },
            Type:{
                type: String,
                required: true,
            },
            Speed:{
                type: Number,
                required: true,
            },
        },
        Storage:{
            Disk_1:{
                Type:{
                    type: String,
                    required: true,
                },
                Size:{
                    type: Number,
                    required: true,
                },
            },
            Disk_2:{
                Type:{
                    type: String,
                    required: true,
                },
                Size:{
                    type: Number,
                    required: true,
                },
            },
            Disk_3:{
                Type:{
                    type: String,
                    required: true,
                },
                Size:{
                    type: Number,
                    required: true,
                },
            },
            Disk_4:{
                Type:{
                    type: String,
                    required: true,
                },
                Size:{
                    type: Number,
                    required: true,
                },
            },
        },
        Optical_Drive:{
            type: Boolean,
            required: true,
        },
        OS:{
            Preloaded:{
                type: Boolean,
                required: true,
            },
            Platform:{
                type: String,
            },
            Version:{
                type: String,
            },
        },
        Hostname:{
            type: String,
        },
        Remarks:{
            type: String,
        }
    },


    Monitor_1: {
        IsUsed:{
            type: Boolean,
            required: true,
        },
        Vendor:{
            type: String,
            required: true,
        },
        Brand:{
            type: String,
            required: true,
        },
        Price:{
            type: Number,
            required: true,
        },
        Dates:{
            Purchased:{
                type: Date,
                required: true,
            },
            Warranty_End:{
                type: Date,
                required: true,
            },
        },
        Model:{
            type: String,
            required: true,
        },
        Serial_Number:{
            type: String,
            required: true,
        },
        Asset_ID:{
            type: String,
            required: true,
        },
        Monitor_ID:{
            type: String,
            required: true,
        },
        Size:{
            type: Number,
        },
        Resolution:{
            type: String,
        },
        Remarks:{
            type: String,
        }
    },
    Monitor_2: {
        IsUsed:{
            type: Boolean,
            required: true,
        },
        Vendor:{
            type: String,
            required: true,
        },
        Brand:{
            type: String,
            required: true,
        },
        Price:{
            type: Number,
            required: true,
        },
        Dates:{
            Purchased:{
                type: Date,
                required: true,
            },
            Warranty_End:{
                type: Date,
                required: true,
            },
        },
        Model:{
            type: String,
            required: true,
        },
        Serial_Number:{
            type: String,
            required: true,
        },
        Asset_ID:{
            type: String,
            required: true,
        },
        Monitor_ID:{
            type: String,
            required: true,
        },
        Size:{
            type: Number,
        },
        Resolution:{
            type: String,
        },
        Remarks:{
            type: String,
        }
    },
    Monitor_3: {
        IsUsed:{
            type: Boolean,
            required: true,
        },
        Vendor:{
            type: String,
            required: true,
        },
        Brand:{
            type: String,
            required: true,
        },
        Price:{
            type: Number,
            required: true,
        },
        Dates:{
            Purchased:{
                type: Date,
                required: true,
            },
            Warranty_End:{
                type: Date,
                required: true,
            },
        },
        Model:{
            type: String,
            required: true,
        },
        Serial_Number:{
            type: String,
            required: true,
        },
        Asset_ID:{
            type: String,
            required: true,
        },
        Monitor_ID:{
            type: String,
            required: true,
        },
        Size:{
            type: Number,
        },
        Resolution:{
            type: String,
        },
        Remarks:{
            type: String,
        }
    },

});

module.exports = mongoose.model("hardware_inventory", articleSchema);
