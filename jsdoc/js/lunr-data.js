window.lunrData = {
  "index": {
    "version": "1.0.0",
    "fields": [
      {
        "name": "longname",
        "boost": 1000
      },
      {
        "name": "name",
        "boost": 500
      },
      {
        "name": "tags",
        "boost": 300
      },
      {
        "name": "kind",
        "boost": 110
      },
      {
        "name": "title",
        "boost": 100
      },
      {
        "name": "summary",
        "boost": 70
      },
      {
        "name": "description",
        "boost": 50
      },
      {
        "name": "body",
        "boost": 1
      }
    ],
    "ref": "id",
    "tokenizer": "default",
    "documentStore": {
      "store": {
        "index.html": [
          "augmented.j",
          "develop",
          "index",
          "next",
          "readm",
          "simpli"
        ],
        "global.html": [
          "document",
          "global"
        ],
        "list_class.html": [
          "class",
          "document",
          "list",
          "list:class"
        ],
        "list_module.html": [
          "document",
          "list",
          "list:modul",
          "modul"
        ],
        "list_namespace.html": [
          "document",
          "list",
          "list:namespac",
          "namespac"
        ],
        "Application.html": [
          "app",
          "applic",
          "application.an",
          "application.appl",
          "class",
          "contain",
          "defin",
          "entir",
          "histori",
          "initi",
          "metadata",
          "normal",
          "page",
          "singl",
          "startup",
          "track",
          "us"
        ],
        "Application.html#started": [
          "applic",
          "application#start",
          "member",
          "properti",
          "start"
        ],
        "Application.html#name": [
          "applic",
          "application#nam",
          "member",
          "name"
        ],
        "Application.html#metadata": [
          "application#metadata",
          "map",
          "member",
          "metadata"
        ],
        "Application.html#datastore": [
          "applic",
          "application#datastor",
          "datastor",
          "get",
          "member"
        ],
        "Application.html#router": [
          "applic",
          "application#rout",
          "member",
          "properti",
          "router"
        ],
        "Application.html#initialize": [
          "applic",
          "application#initi",
          "dure",
          "event",
          "function",
          "initi",
          "startup"
        ],
        "Application.html#beforeInitialize": [
          "applic",
          "application#beforeiniti",
          "befor",
          "beforeiniti",
          "event",
          "function",
          "startup"
        ],
        "Application.html#afterInitialize": [
          "afteriniti",
          "applic",
          "application#afteriniti",
          "event",
          "function",
          "startup"
        ],
        "Application.html#setMetadataItem": [
          "application#setmetadataitem",
          "function",
          "item",
          "key",
          "metadata",
          "set",
          "setmetadataitem",
          "specif",
          "valu"
        ],
        "Application.html#getMetadataItem": [
          "application#getmetadataitem",
          "function",
          "getmetadataitem",
          "item",
          "key",
          "metadata",
          "specif"
        ],
        "Application.html#registerRouter": [
          "add",
          "applic",
          "application#registerrout",
          "function",
          "regist",
          "registerrout",
          "rout",
          "router"
        ],
        "Application.html#start": [
          "applic",
          "application#start",
          "event",
          "function",
          "histori",
          "start"
        ],
        "Application.html#stop": [
          "applic",
          "application#stop",
          "event",
          "function",
          "histori",
          "stop"
        ],
        "AbstractCollection.html": [
          "abstract",
          "abstractcollect",
          "augment",
          "class",
          "collect",
          "schema",
          "secur",
          "support",
          "valid"
        ],
        "AbstractCollection.html#preinitialize": [
          "abstractcollection#preiniti",
          "function",
          "messag",
          "preiniti",
          "properti",
          "valid"
        ],
        "AbstractCollection.html#toJSON": [
          "abstractcollection#tojson",
          "array",
          "attribut",
          "collect",
          "function",
          "json",
          "represent",
          "themodels&quot",
          "tojson"
        ],
        "AbstractCollection.html#add": [
          "abstractcollection#add",
          "add",
          "anycombin",
          "bemodel",
          "convert",
          "function",
          "javascript",
          "list",
          "model",
          "object",
          "raw",
          "set",
          "two"
        ],
        "AbstractCollection.html#remove": [
          "abstractcollection#remov",
          "collect",
          "collection.remov",
          "function",
          "quot;delete&quot",
          "remov"
        ],
        "AbstractCollection.html#set": [
          "abstractcollection#set",
          "ad",
          "collect",
          "contain",
          "core",
          "data",
          "exist",
          "function",
          "ing",
          "list",
          "longer",
          "merg",
          "model",
          "model#set,th",
          "necessari",
          "new",
          "ones,remov",
          "oper",
          "present",
          "set",
          "similar",
          "thatalreadi",
          "updat"
        ],
        "AbstractCollection.html#reset": [
          "abstractcollection#reset",
          "add",
          "bulk",
          "entir",
          "event",
          "finished.us",
          "fire",
          "firingani",
          "function",
          "granular",
          "individually,y",
          "item",
          "list",
          "model",
          "more",
          "new",
          "oper",
          "optim",
          "remov",
          "reset",
          "set",
          "want",
          "without"
        ],
        "AbstractCollection.html#push": [
          "abstractcollection#push",
          "add",
          "collect",
          "end",
          "function",
          "model",
          "push"
        ],
        "AbstractCollection.html#pop": [
          "abstractcollection#pop",
          "collect",
          "end",
          "function",
          "model",
          "pop",
          "remov"
        ],
        "AbstractCollection.html#unshift": [
          "abstractcollection#unshift",
          "add",
          "begin",
          "collect",
          "function",
          "model",
          "unshift"
        ],
        "AbstractCollection.html#shift": [
          "abstractcollection#shift",
          "begin",
          "collect",
          "function",
          "model",
          "remov",
          "shift"
        ],
        "AbstractCollection.html#slice": [
          "abstractcollection#slic",
          "array",
          "collect",
          "function",
          "model",
          "out",
          "slice",
          "sub"
        ],
        "AbstractCollection.html#get": [
          "abstractcollection#get",
          "attribut",
          "cid",
          "cidproperti",
          "function",
          "id",
          "model",
          "modelid",
          "object",
          "set",
          "through",
          "transform"
        ],
        "AbstractCollection.html#has": [
          "abstractcollection#ha",
          "collect",
          "function",
          "model",
          "return",
          "true"
        ],
        "AbstractCollection.html#at": [
          "abstractcollection#at",
          "function",
          "given",
          "index",
          "model"
        ],
        "AbstractCollection.html#find": [
          "abstractcollection#find",
          "attr",
          "find",
          "function",
          "match",
          "model",
          "properti"
        ],
        "AbstractCollection.html#filter": [
          "abstractcollection#filt",
          "attr",
          "filter",
          "function",
          "match",
          "model",
          "properti"
        ],
        "AbstractCollection.html#where": [
          "abstractcollection#wher",
          "attr",
          "attribut",
          "case",
          "filter",
          "function",
          "match",
          "model",
          "return",
          "simpl",
          "us"
        ],
        "AbstractCollection.html#findWhere": [
          "abstractcollection#findwher",
          "attribut",
          "casesof",
          "find",
          "findwher",
          "first",
          "function",
          "match",
          "model",
          "return",
          "simpl",
          "us"
        ],
        "AbstractCollection.html#sort": [
          "abstractcollection#sort",
          "ad",
          "call",
          "circumst",
          "collect",
          "don&quot;t",
          "each",
          "forc",
          "function",
          "itemi",
          "itself",
          "maintain",
          "need",
          "order",
          "re",
          "set",
          "sort",
          "undernorm"
        ],
        "AbstractCollection.html#pluck": [
          "abstractcollection#pluck",
          "attribut",
          "collect",
          "each",
          "function",
          "model",
          "pluck"
        ],
        "AbstractCollection.html#fetch": [
          "abstractcollection#fetch",
          "collect",
          "fetch",
          "function"
        ],
        "AbstractCollection.html#create": [
          "abstractcollection#cr",
          "add",
          "agre",
          "case",
          "collect",
          "creat",
          "function",
          "immedi",
          "instanc",
          "model",
          "new",
          "pass",
          "server",
          "thecollect",
          "true",
          "unless",
          "wait",
          "wewait"
        ],
        "AbstractCollection.html#parse": [
          "abstractcollection#pars",
          "ad",
          "convert",
          "default",
          "function",
          "implement",
          "list",
          "model",
          "pars",
          "pass",
          "respons",
          "thecollect",
          "through"
        ],
        "AbstractCollection.html#clone": [
          "abstractcollection#clon",
          "clone",
          "collect",
          "creat",
          "function",
          "ident",
          "list",
          "model",
          "new",
          "on"
        ],
        "AbstractCollection.html#modelId": [
          "abstractcollection#modelid",
          "collect",
          "defin",
          "function",
          "identifi",
          "model",
          "modelid",
          "uniqu"
        ],
        "AbstractCollection.html#values": [
          "abstractcollection#valu",
          "collect",
          "function",
          "iter",
          "model",
          "valu"
        ],
        "AbstractCollection.html#keys": [
          "abstractcollection#key",
          "collect",
          "function",
          "id",
          "iter",
          "key",
          "model"
        ],
        "AbstractCollection.html#entries": [
          "abstractcollection#entri",
          "collect",
          "entri",
          "function",
          "id",
          "iter",
          "model",
          "tupl"
        ],
        "AbstractCollection.html#supportsValidation": [
          "abstractcollection#supportsvalid",
          "collect",
          "function",
          "return",
          "support",
          "supportsvalid",
          "true",
          "valid"
        ],
        "AbstractCollection.html#isValid": [
          "abstractcollection#isvalid",
          "collect",
          "function",
          "isvalid",
          "return",
          "true",
          "valid"
        ],
        "AbstractCollection.html#getValidationMessages": [
          "abstractcollection#getvalidationmessag",
          "function",
          "getvalidationmessag",
          "messag",
          "return",
          "valid"
        ],
        "AbstractCollection.html#validate": [
          "abstractcollection#valid",
          "collect",
          "function",
          "valid"
        ],
        "AbstractCollection.html#sync": [
          "abstractcollection#sync",
          "collecion.sync",
          "function",
          "sync"
        ],
        "AbstractCollection.html#save": [
          "abstractcollection#sav",
          "collect",
          "collection.sav",
          "function",
          "quot;create&quot",
          "save"
        ],
        "AbstractCollection.html#update": [
          "abstractcollection#upd",
          "collect",
          "collection.upd",
          "function",
          "quot;update&quot",
          "updat"
        ],
        "AbstractCollection.html#sortByKey": [
          "abstractcollection#sortbykey",
          "collect",
          "function",
          "key",
          "properti",
          "sort",
          "sortbykey"
        ],
        "AbstractCollection.html#isEmpty": [
          "abstractcollection#isempti",
          "collect",
          "empti",
          "function",
          "isempti",
          "return",
          "true"
        ],
        "AbstractCollection.html#size": [
          "abstractcollection#s",
          "collect",
          "collection.s",
          "function",
          "return",
          "size"
        ],
        "AbstractCollection.html#toString": [
          "abstractcollection#tostr",
          "collect",
          "data",
          "function",
          "return",
          "string",
          "tostr"
        ],
        "CollectionIterator.html": [
          "allow",
          "betweencollect",
          "browser",
          "class",
          "collectioniter",
          "function",
          "implement",
          "interoper",
          "iter",
          "javascript",
          "javascript'",
          "librarieswhich",
          "loop",
          "modern",
          "oper",
          "parti",
          "protocol",
          "theus",
          "third"
        ],
        "CollectionIterator.html#next": [
          "alway",
          "collect",
          "collectioniterator#next",
          "collectiononc",
          "done",
          "exhaust",
          "function",
          "futurecal",
          "method",
          "model",
          "next",
          "refer",
          "remov",
          "return"
        ],
        "Logger.AbstractLogger.html": [
          "abstract",
          "abstractlogg",
          "augment",
          "class",
          "logger",
          "logger.abstractlogg",
          "lt;abstract&gt"
        ],
        "Logger.AbstractLogger.html#log": [
          "abstractlogger#log",
          "function",
          "level",
          "log",
          "logger.abstractlogger#log",
          "messag"
        ],
        "Logger.AbstractLogger.html#info": [
          "abstractlogger#info",
          "function",
          "info",
          "level",
          "log",
          "logger.abstractlogger#info",
          "messag"
        ],
        "Logger.AbstractLogger.html#error": [
          "abstractlogger#error",
          "error",
          "function",
          "level",
          "log",
          "logger.abstractlogger#error",
          "messag"
        ],
        "Logger.AbstractLogger.html#debug": [
          "abstractlogger#debug",
          "debug",
          "function",
          "level",
          "log",
          "logger.abstractlogger#debug",
          "messag"
        ],
        "Logger.AbstractLogger.html#warn": [
          "abstractlogger#warn",
          "function",
          "level",
          "log",
          "logger.abstractlogger#warn",
          "messag",
          "warn"
        ],
        "Logger.ColorConsoleLogger.html": [
          "class",
          "color",
          "colorconsolelogg",
          "consol",
          "logger",
          "logger.colorconsolelogg"
        ],
        "Logger.ConsoleLogger.html": [
          "class",
          "consol",
          "consolelogg",
          "logger",
          "logger.consolelogg"
        ],
        "Logger.LoggerFactory.html": [
          "class",
          "creat",
          "factori",
          "instanc",
          "logger",
          "logger.loggerfactori",
          "loggerfactori"
        ],
        "Logger.LoggerFactory.html#.getLogger": [
          "function",
          "getlogg",
          "instanc",
          "level",
          "logger",
          "logger.loggerfactory.getlogg",
          "loggerfactory.getlogg",
          "lt;static&gt",
          "type"
        ],
        "AbstractModel.html": [
          "abstractmodel",
          "class",
          "schema",
          "secur",
          "support",
          "valid"
        ],
        "AbstractModel.html#preinitialize": [
          "abstractmodel#preiniti",
          "function",
          "messag",
          "preiniti",
          "properti",
          "valid"
        ],
        "AbstractModel.html#get": [
          "abstractmodel#get",
          "attribut",
          "form",
          "function",
          "model"
        ],
        "AbstractModel.html#set": [
          "abstractmodel#set",
          "attribut",
          "chang",
          "core",
          "data",
          "fire",
          "function",
          "hash",
          "isth",
          "know",
          "model",
          "need",
          "notifyinganyon",
          "object",
          "oper",
          "primit",
          "quot;change&quot",
          "set",
          "state",
          "updat"
        ],
        "AbstractModel.html#escape": [
          "abstractmodel#escap",
          "attribut",
          "data",
          "escap",
          "function"
        ],
        "AbstractModel.html#has": [
          "abstractmodel#ha",
          "attribut",
          "function",
          "model"
        ],
        "AbstractModel.html#matches": [
          "abstractmodel#match",
          "case",
          "function",
          "match",
          "method",
          "proxi",
          "special",
          "underscore'"
        ],
        "AbstractModel.html#unset": [
          "abstractmodel#unset",
          "attribut",
          "doesn't",
          "exist",
          "fire",
          "function",
          "model",
          "noopif",
          "quot;change&quot",
          "remov",
          "unset"
        ],
        "AbstractModel.html#clear": [
          "abstractmodel#clear",
          "attribut",
          "clear",
          "fire",
          "function",
          "model",
          "quot;change&quot"
        ],
        "AbstractModel.html#toJSON": [
          "abstractmodel#tojson",
          "function",
          "model",
          "pure",
          "tojson",
          "transform"
        ],
        "AbstractModel.html#fetch": [
          "abstractmodel#fetch",
          "fetch",
          "function",
          "model"
        ],
        "AbstractModel.html#save": [
          "abstractmodel#sav",
          "creat",
          "function",
          "model",
          "save"
        ],
        "AbstractModel.html#destroy": [
          "abstractmodel#destroy",
          "delet",
          "destroy",
          "function",
          "model"
        ],
        "AbstractModel.html#url": [
          "abstractmodel#url",
          "call",
          "chang",
          "default",
          "endpointthat",
          "function",
          "method",
          "model'",
          "overrid",
          "represent",
          "rest",
          "server",
          "url",
          "you'reus"
        ],
        "AbstractModel.html#parse": [
          "abstractmodel#pars",
          "along",
          "attribut",
          "convert",
          "default",
          "function",
          "hash",
          "implement",
          "model",
          "onth",
          "pars",
          "pass",
          "respons",
          "set"
        ],
        "AbstractModel.html#clone": [
          "abstractmodel#clon",
          "attribut",
          "clone",
          "creat",
          "function",
          "ident",
          "model",
          "new",
          "on"
        ],
        "AbstractModel.html#isNew": [
          "abstractmodel#isnew",
          "function",
          "id",
          "isnew",
          "lack",
          "model",
          "never",
          "new",
          "save",
          "server"
        ],
        "AbstractModel.html#hasChanged": [
          "abstractmodel#haschang",
          "attribut",
          "chang",
          "determin",
          "event.if",
          "function",
          "haschang",
          "last",
          "model",
          "name",
          "quot;change&quot",
          "specifi"
        ],
        "AbstractModel.html#changedAttributes": [
          "abstractmodel#changedattribut",
          "against",
          "and/or",
          "attribut",
          "bepersist",
          "chang",
          "changedattribut",
          "contain",
          "determin",
          "diff",
          "function",
          "model,determin",
          "need",
          "object",
          "orfals",
          "pass",
          "return",
          "server",
          "set",
          "undefined.y",
          "unset",
          "updat",
          "us",
          "view",
          "whatpart"
        ],
        "AbstractModel.html#previous": [
          "abstractmodel#previ",
          "attribut",
          "event",
          "fire",
          "function",
          "last&quot;change&quot",
          "previou",
          "record",
          "time",
          "valu"
        ],
        "AbstractModel.html#previousAttributes": [
          "abstractmodel#previousattribut",
          "attribut",
          "event",
          "function",
          "model",
          "previous&quot;change&quot",
          "previousattribut",
          "time"
        ],
        "AbstractModel.html#supportsValidation": [
          "abstractmodel#supportsvalid",
          "function",
          "model",
          "return",
          "support",
          "supportsvalid",
          "true",
          "valid"
        ],
        "AbstractModel.html#isValid": [
          "abstractmodel#isvalid",
          "attribut",
          "function",
          "isvalid",
          "json",
          "level",
          "model",
          "return",
          "schema",
          "true",
          "two",
          "valid",
          "validrun"
        ],
        "AbstractModel.html#validate": [
          "abstractmodel#valid",
          "function",
          "model",
          "valid"
        ],
        "AbstractModel.html#getValidationMessages": [
          "abstractmodel#getvalidationmessag",
          "array",
          "function",
          "get",
          "getvalidationmessag",
          "messag",
          "valid"
        ],
        "AbstractModel.html#sync": [
          "abstractmodel#sync",
          "bound",
          "call",
          "data",
          "function",
          "model",
          "rest",
          "sync"
        ],
        "AbstractModel.html#reset": [
          "abstractmodel#reset",
          "clear",
          "data",
          "function",
          "model",
          "pass",
          "reset",
          "rewrit"
        ],
        "AbstractModel.html#isEmpty": [
          "abstractmodel#isempti",
          "empti",
          "function",
          "isempti",
          "model",
          "return",
          "true"
        ],
        "AbstractModel.html#toString": [
          "abstractmodel#tostr",
          "data",
          "function",
          "model",
          "return",
          "string",
          "tostr"
        ],
        "AbstractModel.html#update": [
          "abstractmodel#upd",
          "function",
          "model",
          "updat"
        ],
        "Object.html": [
          "augment",
          "class",
          "extend",
          "object",
          "objectbas"
        ],
        "AbstractSecurityClient.html": [
          "abstract",
          "abstractsecuritycli",
          "class",
          "client",
          "extend",
          "secur",
          "us"
        ],
        "AbstractSecurityClient.html#uri": [
          "abstractsecurityclient#uri",
          "member",
          "uri"
        ],
        "AbstractSecurityClient.html#type": [
          "abstractsecurityclient#typ",
          "member",
          "type"
        ],
        "Security.Client.ACLClient.html": [
          "acl",
          "aclclient",
          "class",
          "client.aclcli",
          "role/privileg",
          "secur",
          "security.client.aclcli"
        ],
        "Security.Client.ACLClient.html#authenticate": [
          "aclclient#authent",
          "authent",
          "client.aclclient#authent",
          "function",
          "password",
          "security.client.aclclient#authent",
          "user",
          "usernam"
        ],
        "Security.AuthenticationFactory.html": [
          "authenticationfactori",
          "class",
          "client",
          "given",
          "return",
          "secur",
          "security.authenticationfactori",
          "type",
          "us"
        ],
        "Security.AuthenticationFactory.html#.getSecurityClient": [
          "authenticationfactory.getsecuritycli",
          "client",
          "clienttyp",
          "function",
          "getsecuritycli",
          "instanc",
          "lt;static&gt",
          "secur",
          "security.authenticationfactory.getsecuritycli"
        ],
        "Security.Context.html": [
          "augmented.security.contextus",
          "class",
          "context",
          "data",
          "secur",
          "security.context",
          "storag"
        ],
        "Security.Context.html#.Context#principal": [
          "context",
          "context#princip",
          "context.context#princip",
          "getprincip",
          "lt;static&gt",
          "member",
          "princip",
          "security.context.context#princip"
        ],
        "Security.Context.html#.Context#permissions": [
          "context#permiss",
          "context.context#permiss",
          "lt;static&gt",
          "member",
          "permiss",
          "princip",
          "security.context.context#permiss",
          "set",
          "setpermiss"
        ],
        "Security.Context.html#.Context#addPermission": [
          "add",
          "addpermiss",
          "context#addpermiss",
          "context.context#addpermiss",
          "function",
          "lt;static&gt",
          "new",
          "permiss",
          "princip",
          "security.context.context#addpermiss"
        ],
        "Security.Context.html#.Context#removePermission": [
          "context#removepermiss",
          "context.context#removepermiss",
          "function",
          "lt;static&gt",
          "permiss",
          "princip",
          "remov",
          "removepermiss",
          "security.context.context#removepermiss"
        ],
        "Security.Context.html#.Context#hasPermission": [
          "check",
          "context#haspermiss",
          "context.context#haspermiss",
          "function",
          "haspermiss",
          "lt;static&gt",
          "permiss",
          "princip",
          "security.context.context#haspermiss"
        ],
        "Security.Entry.html": [
          "class",
          "entri",
          "permiss",
          "resourc",
          "secur",
          "security.entri",
          "us",
          "via"
        ],
        "Security.Entry.html#permissions": [
          "entry#permiss",
          "member",
          "permiss",
          "security.entry#permiss",
          "set"
        ],
        "Security.Entry.html#isNegative": [
          "entry#isneg",
          "flag",
          "function",
          "isneg",
          "neg",
          "security.entry#isneg"
        ],
        "Security.Entry.html#addPermission": [
          "add",
          "addpermiss",
          "entry#addpermiss",
          "function",
          "permiss",
          "security.entry#addpermiss"
        ],
        "Security.Entry.html#removePermission": [
          "entry#removepermiss",
          "function",
          "permiss",
          "remov",
          "removepermiss",
          "security.entry#removepermiss"
        ],
        "Security.Entry.html#hasPermission": [
          "entri",
          "entry#haspermiss",
          "function",
          "haspermiss",
          "permiss",
          "return",
          "security.entry#haspermiss"
        ],
        "Security.Entry.html#setNegative": [
          "entri",
          "entry#setneg",
          "function",
          "neg",
          "negaiv",
          "posit",
          "security.entry#setneg",
          "set",
          "setneg"
        ],
        "Security.Client.OAUTH2Client.html": [
          "class",
          "client",
          "client.oauth2cli",
          "oauth2",
          "oauth2client",
          "security.client.oauth2cli"
        ],
        "Security.Client.OAUTH2Client.html#authorize": [
          "application/service/modul",
          "author",
          "client.oauth2client#author",
          "function",
          "name",
          "oauth",
          "oauth2client#author",
          "security.client.oauth2client#author",
          "via"
        ],
        "Security.Client.OAUTH2Client.html#access": [
          "access",
          "application/service/modul",
          "client.oauth2client#access",
          "function",
          "oauth",
          "oauth2client#access",
          "princip",
          "security.client.oauth2client#access",
          "via"
        ],
        "Security.Principal.html": [
          "abstract",
          "class",
          "impliment",
          "object",
          "part",
          "pricip",
          "princip",
          "secur",
          "security.princip",
          "us"
        ],
        "Utility.AugmentedMap.html": [
          "augmentedmap",
          "class",
          "es6",
          "map",
          "marshal",
          "utility.augmentedmap"
        ],
        "Utility.AugmentedMap.html#set": [
          "augmentedmap#set",
          "function",
          "key",
          "map",
          "set",
          "utility.augmentedmap#set",
          "valu"
        ],
        "Utility.AugmentedMap.html#get": [
          "augmentedmap#get",
          "function",
          "key",
          "map",
          "utility.augmentedmap#get",
          "valu"
        ],
        "Utility.AugmentedMap.html#indexOf": [
          "augmentedmap#indexof",
          "function",
          "index",
          "indexof",
          "key",
          "map",
          "utility.augmentedmap#indexof"
        ],
        "Utility.AugmentedMap.html#remove": [
          "augmentedmap#remov",
          "function",
          "key",
          "map",
          "remov",
          "utility.augmentedmap#remov",
          "valu"
        ],
        "Utility.AugmentedMap.html#has": [
          "augmentedmap#ha",
          "exist",
          "function",
          "key",
          "map",
          "return",
          "utility.augmentedmap#ha",
          "whether"
        ],
        "Utility.AugmentedMap.html#forEach": [
          "augmentedmap#foreach",
          "fn",
          "foreach",
          "function",
          "iter",
          "key",
          "map",
          "utility.augmentedmap#foreach",
          "valu"
        ],
        "Utility.AugmentedMap.html#key": [
          "augmentedmap#key",
          "function",
          "index",
          "key",
          "map",
          "utility.augmentedmap#key"
        ],
        "Utility.AugmentedMap.html#entries": [
          "augmentedmap#entri",
          "entri",
          "function",
          "map",
          "object",
          "utility.augmentedmap#entri",
          "valu"
        ],
        "Utility.AugmentedMap.html#values": [
          "array",
          "augmentedmap#valu",
          "function",
          "map",
          "utility.augmentedmap#valu",
          "valu"
        ],
        "Utility.AugmentedMap.html#clear": [
          "augmentedmap#clear",
          "clear",
          "function",
          "map",
          "utility.augmentedmap#clear"
        ],
        "Utility.AugmentedMap.html#size": [
          "augmentedmap#s",
          "function",
          "key",
          "map",
          "size",
          "utility.augmentedmap#s"
        ],
        "Utility.AugmentedMap.html#toJSON": [
          "augmentedmap#tojson",
          "function",
          "json",
          "map",
          "repres",
          "tojson",
          "utility.augmentedmap#tojson"
        ],
        "Utility.AugmentedMap.html#toString": [
          "augmentedmap#tostr",
          "function",
          "json",
          "map",
          "repres",
          "string",
          "tostr",
          "utility.augmentedmap#tostr"
        ],
        "Utility.AugmentedMap.html#isEmpty": [
          "augmentedmap#isempti",
          "check",
          "empti",
          "es6",
          "function",
          "isempti",
          "map",
          "utility.augmentedmap#isempti"
        ],
        "Utility.AugmentedMap.html#marshall": [
          "augmentedmap#marshal",
          "data",
          "datatomarshal",
          "follow",
          "function",
          "key/valu",
          "mapdatatomarshal",
          "marshal",
          "object",
          "parse:json",
          "properti",
          "type",
          "utility.augmentedmap#marshal"
        ],
        "Utility.AsynchronousQueue.html": [
          "async",
          "asynchronousqueu",
          "augmented.utility.asynchronousqueu",
          "chain",
          "class",
          "function",
          "handl",
          "queue",
          "utility.asynchronousqueu"
        ],
        "Utility.AsynchronousQueue.html#timeout": [
          "asynchronousqueue#timeout",
          "member",
          "queue",
          "timeout",
          "utility.asynchronousqueue#timeout"
        ],
        "Utility.AsynchronousQueue.html#queue": [
          "asynchronousqueue#queu",
          "full",
          "member",
          "queue",
          "utility.asynchronousqueue#queu"
        ],
        "Utility.AsynchronousQueue.html#add": [
          "ad",
          "add",
          "asynchronousqueue#add",
          "function",
          "method",
          "process",
          "queue",
          "utility.asynchronousqueue#add"
        ],
        "Utility.AsynchronousQueue.html#clear": [
          "asynchronousqueue#clear",
          "clear",
          "function",
          "process",
          "queue",
          "utility.asynchronousqueue#clear"
        ],
        "Utility.AsynchronousQueue.html#process": [
          "asynchronousqueue#process",
          "function",
          "process",
          "queue",
          "utility.asynchronousqueue#process"
        ],
        "Utility.Stack.html": [
          "augmented.utility.stack",
          "class",
          "data",
          "stack",
          "standard",
          "structur",
          "utility.stack"
        ],
        "Utility.Stack.html#empty": [
          "clear",
          "empti",
          "function",
          "method",
          "stack",
          "stack#empti",
          "utility.stack#empti"
        ],
        "Utility.Stack.html#peek": [
          "first",
          "function",
          "method",
          "peek",
          "return",
          "stack",
          "stack#peek",
          "utility.stack#peek"
        ],
        "Utility.Stack.html#pop": [
          "first",
          "function",
          "method",
          "pop",
          "remov",
          "return",
          "stack",
          "stack#pop",
          "utility.stack#pop"
        ],
        "Utility.Stack.html#push": [
          "add",
          "function",
          "item",
          "method",
          "push",
          "stack",
          "stack#push",
          "utility.stack#push"
        ],
        "Utility.Stack.html#search": [
          "exist",
          "function",
          "item",
          "method",
          "return",
          "search",
          "stack",
          "stack#search",
          "utility.stack#search"
        ],
        "Utility.Stack.html#size": [
          "function",
          "method",
          "return",
          "size",
          "stack",
          "stack#siz",
          "utility.stack#s"
        ],
        "Utility.Stack.html#clear": [
          "clear",
          "function",
          "method",
          "stack",
          "stack#clear",
          "utility.stack#clear"
        ],
        "Utility.Stack.html#toArray": [
          "array",
          "function",
          "method",
          "return",
          "stack",
          "stack#toarray",
          "toarray",
          "utility.stack#toarray"
        ],
        "Utility.Stack.html#toString": [
          "function",
          "method",
          "return",
          "stack",
          "stack#tostr",
          "string",
          "tostr",
          "utility.stack#tostr"
        ],
        "Utility.exports.Transformer.html": [
          "anoth",
          "array",
          "augmented.utility.transform",
          "class",
          "exports.transform",
          "object",
          "transform",
          "type",
          "utility.exports.transform"
        ],
        "ValidationFramework.html": [
          "abstract",
          "augmented.validationframework",
          "base",
          "build",
          "class",
          "class.provid",
          "framework",
          "librari",
          "valid",
          "validationframework",
          "wrapper"
        ],
        "ValidationFramework.html#supportsValidation": [
          "framework",
          "function",
          "return",
          "support",
          "supportsvalid",
          "valid",
          "validationframework#supportsvalid"
        ],
        "ValidationFramework.html#registerSchema": [
          "framework",
          "function",
          "ident",
          "regist",
          "registerschema",
          "schema",
          "validationframework#registerschema"
        ],
        "ValidationFramework.html#getSchema": [
          "function",
          "get",
          "getschema",
          "ident",
          "schema",
          "validationframework#getschema"
        ],
        "ValidationFramework.html#getSchemas": [
          "function",
          "get",
          "getschema",
          "schema",
          "validationframework#getschema"
        ],
        "ValidationFramework.html#clearSchemas": [
          "clear",
          "clearschema",
          "function",
          "schema",
          "validationframework#clearschema"
        ],
        "ValidationFramework.html#validate": [
          "data",
          "function",
          "schema",
          "valid",
          "validationframework#valid",
          "via"
        ],
        "ValidationFramework.html#getValidationMessages": [
          "data",
          "function",
          "getvalidationmessag",
          "schema",
          "valid",
          "validationframework#getvalidationmessag",
          "via"
        ],
        "ValidationFramework.html#generateSchema": [
          "data",
          "function",
          "generateschema",
          "model",
          "schema",
          "valid",
          "validationframework#generateschema",
          "via"
        ],
        "module-Augmented.html": [
          "augment",
          "augmented.j",
          "compon",
          "core",
          "modul",
          "module:aug",
          "next"
        ],
        "module-Augmented-Logger.html": [
          "augmented~logg",
          "logger",
          "module:augmented~logg",
          "namespac",
          "packag"
        ],
        "module-Augmented-Security.html": [
          "api",
          "augmented~secur",
          "module:augmented~secur",
          "namespac",
          "packag",
          "secur"
        ],
        "Security.Client.html": [
          "client",
          "namespac",
          "secur",
          "security.cli"
        ],
        "Augmented.Utility.BundleObject.html": [
          "augmented.utility.bundleobject",
          "bundl",
          "bundleobject",
          "configur",
          "namespac",
          "object",
          "resourcebundl",
          "us",
          "utility.bundleobject"
        ],
        "Augmented.Utility.ResourceBundle.html": [
          "augmented.utility.resourcebundl",
          "namespac",
          "resourcebundl",
          "utility.resourcebundl"
        ],
        "Augmented.Utility.ResourceBundle.html#.getBundle": [
          "augmented.utility.resourcebundl",
          "augmented.utility.resourcebundle.getbundl",
          "bundl",
          "bundle(",
          "function",
          "get",
          "getbundl",
          "lt;static&gt",
          "regist",
          "resourcebundle.getbundl",
          "utility.resourcebundle.getbundl"
        ],
        "Augmented.Utility.ResourceBundle.html#.getString": [
          "augmented.utility.resourcebundle.getstr",
          "bundl",
          "function",
          "get",
          "getstr",
          "lt;static&gt",
          "regist",
          "resourcebundle.getstr",
          "string",
          "utility.resourcebundle.getstr"
        ],
        "Augmented.Utility.MessageReader.html": [
          "augmented.utility.messageread",
          "bundl",
          "messag",
          "messageread",
          "namespac",
          "out",
          "read",
          "utility.messageread"
        ],
        "Augmented.Utility.MessageReader.html#.getMessage": [
          "againstop",
          "attribut",
          "augmented.utility.messagereader.getmessag",
          "back",
          "bracketsloop",
          "bundl",
          "bundle.if",
          "fallback",
          "found",
          "function",
          "getmessag",
          "key",
          "keywrap",
          "lt;static&gt",
          "messag",
          "messagereader.getmessag",
          "out",
          "path",
          "real",
          "remov",
          "resourcebundl",
          "return",
          "search",
          "squar",
          "thelast",
          "through",
          "utility.messagereader.getmessag"
        ],
        "Utility.html": [
          "namespac",
          "packag",
          "small",
          "util"
        ],
        "Utility.html#.TransformerType": [
          "augmented.utility.transformertyp",
          "lt;static&gt",
          "member",
          "symbol",
          "transform",
          "transformertyp",
          "type",
          "us",
          "utility.transformertyp"
        ],
        "Utility.html#.formatBinary": [
          "binari",
          "format",
          "formatbinari",
          "function",
          "lt;static&gt",
          "num",
          "number",
          "pre",
          "precis",
          "set",
          "string",
          "utility.formatbinari"
        ],
        "Utility.html#.formatDate": [
          "am/pm",
          "date",
          "format",
          "formatd",
          "function",
          "hh:mm",
          "lt;static&gt",
          "mm/dd/yyyi",
          "utility.formatd"
        ],
        "Utility.html#.sortObjects": [
          "array",
          "function",
          "key",
          "lt;static&gt",
          "object",
          "properi",
          "sort",
          "sortobject",
          "utility.sortobject"
        ],
        "Utility.html#.mergeSort": [
          "adjac",
          "algorithm",
          "array",
          "compar",
          "each",
          "function",
          "item",
          "list",
          "lt;static&gt",
          "mergesort",
          "order",
          "pair",
          "repeatedli",
          "simpl",
          "sort",
          "step",
          "swap",
          "through",
          "utility.mergesort",
          "wrong"
        ],
        "Utility.html#.QuickSort": [
          "arr",
          "array",
          "function",
          "impliment",
          "lt;static&gt",
          "quick",
          "quicksort",
          "sort",
          "utility.quicksort"
        ],
        "Utility.html#.SchemaGenerator": [
          "augmented.utility.schemageneratorgenr",
          "data",
          "function",
          "lt;static&gt",
          "schema",
          "schemagener",
          "set",
          "utility.schemagener"
        ],
        "Augmented.Utility.MessageKeyFormatter.html": [
          "attribut",
          "augmented.utility.messagekeyformatt",
          "augmented.utility.messagekeyformatterconcaten",
          "ex",
          "ignor",
          "ismiss",
          "key",
          "messag",
          "message.kind",
          "message.level",
          "messagekeyformatt",
          "namespac",
          "piec",
          "portion",
          "quot;rule&quot",
          "rest",
          "return",
          "togeth",
          "utility.messagekeyformatt"
        ],
        "Augmented.Utility.MessageKeyFormatter.html#.format": [
          "augmented.utility.messagekeyformatter.format",
          "format",
          "function",
          "key",
          "lt;static&gt",
          "messag",
          "messagekeyformatter.format",
          "utility.messagekeyformatter.format"
        ]
      },
      "length": 188
    },
    "tokenStore": {
      "root": {
        "docs": {},
        "a": {
          "docs": {},
          "u": {
            "docs": {},
            "g": {
              "docs": {},
              "m": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "AbstractCollection.html": {
                          "ref": "AbstractCollection.html",
                          "tf": 7.142857142857142
                        },
                        "Logger.AbstractLogger.html": {
                          "ref": "Logger.AbstractLogger.html",
                          "tf": 16.666666666666664
                        },
                        "Object.html": {
                          "ref": "Object.html",
                          "tf": 10
                        },
                        "module-Augmented.html": {
                          "ref": "module-Augmented.html",
                          "tf": 600
                        }
                      },
                      "e": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          ".": {
                            "docs": {},
                            "j": {
                              "docs": {
                                "index.html": {
                                  "ref": "index.html",
                                  "tf": 617.5
                                },
                                "module-Augmented.html": {
                                  "ref": "module-Augmented.html",
                                  "tf": 12.5
                                }
                              }
                            },
                            "s": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "y": {
                                            "docs": {},
                                            ".": {
                                              "docs": {},
                                              "c": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "x": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "u": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {
                                                                  "Security.Context.html": {
                                                                    "ref": "Security.Context.html",
                                                                    "tf": 10
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "u": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "l": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "y": {
                                          "docs": {},
                                          ".": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                "y": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "c": {
                                                      "docs": {},
                                                      "h": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {},
                                                              "o": {
                                                                "docs": {},
                                                                "u": {
                                                                  "docs": {},
                                                                  "s": {
                                                                    "docs": {},
                                                                    "q": {
                                                                      "docs": {},
                                                                      "u": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "u": {
                                                                            "docs": {
                                                                              "Utility.AsynchronousQueue.html": {
                                                                                "ref": "Utility.AsynchronousQueue.html",
                                                                                "tf": 7.142857142857142
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "s": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "k": {
                                                      "docs": {
                                                        "Utility.Stack.html": {
                                                          "ref": "Utility.Stack.html",
                                                          "tf": 10
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "c": {
                                                "docs": {},
                                                "h": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "m": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "g": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "t": {
                                                                      "docs": {},
                                                                      "o": {
                                                                        "docs": {},
                                                                        "r": {
                                                                          "docs": {},
                                                                          "g": {
                                                                            "docs": {},
                                                                            "e": {
                                                                              "docs": {},
                                                                              "n": {
                                                                                "docs": {},
                                                                                "r": {
                                                                                  "docs": {
                                                                                    "Utility.html#.SchemaGenerator": {
                                                                                      "ref": "Utility.html#.SchemaGenerator",
                                                                                      "tf": 12.5
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "t": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {},
                                                      "f": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "m": {
                                                              "docs": {
                                                                "Utility.exports.Transformer.html": {
                                                                  "ref": "Utility.exports.Transformer.html",
                                                                  "tf": 5.555555555555555
                                                                }
                                                              },
                                                              "e": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {},
                                                                    "y": {
                                                                      "docs": {},
                                                                      "p": {
                                                                        "docs": {
                                                                          "Utility.html#.TransformerType": {
                                                                            "ref": "Utility.html#.TransformerType",
                                                                            "tf": 10
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "b": {
                                              "docs": {},
                                              "u": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "b": {
                                                            "docs": {},
                                                            "j": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "c": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {
                                                                      "Augmented.Utility.BundleObject.html": {
                                                                        "ref": "Augmented.Utility.BundleObject.html",
                                                                        "tf": 1100
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "r": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "c": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "b": {
                                                              "docs": {},
                                                              "u": {
                                                                "docs": {},
                                                                "n": {
                                                                  "docs": {},
                                                                  "d": {
                                                                    "docs": {},
                                                                    "l": {
                                                                      "docs": {
                                                                        "Augmented.Utility.ResourceBundle.html": {
                                                                          "ref": "Augmented.Utility.ResourceBundle.html",
                                                                          "tf": 1150
                                                                        },
                                                                        "Augmented.Utility.ResourceBundle.html#.getBundle": {
                                                                          "ref": "Augmented.Utility.ResourceBundle.html#.getBundle",
                                                                          "tf": 12.5
                                                                        }
                                                                      },
                                                                      "e": {
                                                                        "docs": {},
                                                                        ".": {
                                                                          "docs": {},
                                                                          "g": {
                                                                            "docs": {},
                                                                            "e": {
                                                                              "docs": {},
                                                                              "t": {
                                                                                "docs": {},
                                                                                "b": {
                                                                                  "docs": {},
                                                                                  "u": {
                                                                                    "docs": {},
                                                                                    "n": {
                                                                                      "docs": {},
                                                                                      "d": {
                                                                                        "docs": {},
                                                                                        "l": {
                                                                                          "docs": {
                                                                                            "Augmented.Utility.ResourceBundle.html#.getBundle": {
                                                                                              "ref": "Augmented.Utility.ResourceBundle.html#.getBundle",
                                                                                              "tf": 1075
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                },
                                                                                "s": {
                                                                                  "docs": {},
                                                                                  "t": {
                                                                                    "docs": {},
                                                                                    "r": {
                                                                                      "docs": {
                                                                                        "Augmented.Utility.ResourceBundle.html#.getString": {
                                                                                          "ref": "Augmented.Utility.ResourceBundle.html#.getString",
                                                                                          "tf": 1075
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "m": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "g": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {},
                                                                "d": {
                                                                  "docs": {
                                                                    "Augmented.Utility.MessageReader.html": {
                                                                      "ref": "Augmented.Utility.MessageReader.html",
                                                                      "tf": 1100
                                                                    }
                                                                  },
                                                                  "e": {
                                                                    "docs": {},
                                                                    "r": {
                                                                      "docs": {},
                                                                      ".": {
                                                                        "docs": {},
                                                                        "g": {
                                                                          "docs": {},
                                                                          "e": {
                                                                            "docs": {},
                                                                            "t": {
                                                                              "docs": {},
                                                                              "m": {
                                                                                "docs": {},
                                                                                "e": {
                                                                                  "docs": {},
                                                                                  "s": {
                                                                                    "docs": {},
                                                                                    "s": {
                                                                                      "docs": {},
                                                                                      "a": {
                                                                                        "docs": {},
                                                                                        "g": {
                                                                                          "docs": {
                                                                                            "Augmented.Utility.MessageReader.html#.getMessage": {
                                                                                              "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                                                                                              "tf": 1075
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "k": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "y": {
                                                                "docs": {},
                                                                "f": {
                                                                  "docs": {},
                                                                  "o": {
                                                                    "docs": {},
                                                                    "r": {
                                                                      "docs": {},
                                                                      "m": {
                                                                        "docs": {},
                                                                        "a": {
                                                                          "docs": {},
                                                                          "t": {
                                                                            "docs": {},
                                                                            "t": {
                                                                              "docs": {
                                                                                "Augmented.Utility.MessageKeyFormatter.html": {
                                                                                  "ref": "Augmented.Utility.MessageKeyFormatter.html",
                                                                                  "tf": 1100
                                                                                }
                                                                              },
                                                                              "e": {
                                                                                "docs": {},
                                                                                "r": {
                                                                                  "docs": {},
                                                                                  "c": {
                                                                                    "docs": {},
                                                                                    "o": {
                                                                                      "docs": {},
                                                                                      "n": {
                                                                                        "docs": {},
                                                                                        "c": {
                                                                                          "docs": {},
                                                                                          "a": {
                                                                                            "docs": {},
                                                                                            "t": {
                                                                                              "docs": {},
                                                                                              "e": {
                                                                                                "docs": {},
                                                                                                "n": {
                                                                                                  "docs": {
                                                                                                    "Augmented.Utility.MessageKeyFormatter.html": {
                                                                                                      "ref": "Augmented.Utility.MessageKeyFormatter.html",
                                                                                                      "tf": 2.7777777777777777
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  },
                                                                                  ".": {
                                                                                    "docs": {},
                                                                                    "f": {
                                                                                      "docs": {},
                                                                                      "o": {
                                                                                        "docs": {},
                                                                                        "r": {
                                                                                          "docs": {},
                                                                                          "m": {
                                                                                            "docs": {},
                                                                                            "a": {
                                                                                              "docs": {},
                                                                                              "t": {
                                                                                                "docs": {
                                                                                                  "Augmented.Utility.MessageKeyFormatter.html#.format": {
                                                                                                    "ref": "Augmented.Utility.MessageKeyFormatter.html#.format",
                                                                                                    "tf": 1075
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "v": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "d": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "f": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "m": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "w": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "k": {
                                                                  "docs": {
                                                                    "ValidationFramework.html": {
                                                                      "ref": "ValidationFramework.html",
                                                                      "tf": 4.545454545454546
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "m": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "p": {
                                "docs": {
                                  "Utility.AugmentedMap.html": {
                                    "ref": "Utility.AugmentedMap.html",
                                    "tf": 650
                                  }
                                },
                                "#": {
                                  "docs": {},
                                  "s": {
                                    "docs": {
                                      "Utility.AugmentedMap.html#size": {
                                        "ref": "Utility.AugmentedMap.html#size",
                                        "tf": 100
                                      }
                                    },
                                    "e": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "Utility.AugmentedMap.html#set": {
                                            "ref": "Utility.AugmentedMap.html#set",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "g": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "Utility.AugmentedMap.html#get": {
                                            "ref": "Utility.AugmentedMap.html#get",
                                            "tf": 150
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "i": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "x": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "f": {
                                                "docs": {
                                                  "Utility.AugmentedMap.html#indexOf": {
                                                    "ref": "Utility.AugmentedMap.html#indexOf",
                                                    "tf": 100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "s": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "m": {
                                          "docs": {},
                                          "p": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "i": {
                                                "docs": {
                                                  "Utility.AugmentedMap.html#isEmpty": {
                                                    "ref": "Utility.AugmentedMap.html#isEmpty",
                                                    "tf": 100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "r": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "v": {
                                            "docs": {
                                              "Utility.AugmentedMap.html#remove": {
                                                "ref": "Utility.AugmentedMap.html#remove",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "h": {
                                    "docs": {},
                                    "a": {
                                      "docs": {
                                        "Utility.AugmentedMap.html#has": {
                                          "ref": "Utility.AugmentedMap.html#has",
                                          "tf": 150
                                        }
                                      }
                                    }
                                  },
                                  "f": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "c": {
                                              "docs": {},
                                              "h": {
                                                "docs": {
                                                  "Utility.AugmentedMap.html#forEach": {
                                                    "ref": "Utility.AugmentedMap.html#forEach",
                                                    "tf": 100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "k": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "y": {
                                        "docs": {
                                          "Utility.AugmentedMap.html#key": {
                                            "ref": "Utility.AugmentedMap.html#key",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "i": {
                                            "docs": {
                                              "Utility.AugmentedMap.html#entries": {
                                                "ref": "Utility.AugmentedMap.html#entries",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "v": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "u": {
                                          "docs": {
                                            "Utility.AugmentedMap.html#values": {
                                              "ref": "Utility.AugmentedMap.html#values",
                                              "tf": 100
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "c": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "r": {
                                            "docs": {
                                              "Utility.AugmentedMap.html#clear": {
                                                "ref": "Utility.AugmentedMap.html#clear",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "t": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "j": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "n": {
                                              "docs": {
                                                "Utility.AugmentedMap.html#toJSON": {
                                                  "ref": "Utility.AugmentedMap.html#toJSON",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "s": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "r": {
                                            "docs": {
                                              "Utility.AugmentedMap.html#toString": {
                                                "ref": "Utility.AugmentedMap.html#toString",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "m": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "h": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "l": {
                                                "docs": {
                                                  "Utility.AugmentedMap.html#marshall": {
                                                    "ref": "Utility.AugmentedMap.html#marshall",
                                                    "tf": 100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "~": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "g": {
                                  "docs": {},
                                  "g": {
                                    "docs": {
                                      "module-Augmented-Logger.html": {
                                        "ref": "module-Augmented-Logger.html",
                                        "tf": 100
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "s": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "r": {
                                      "docs": {
                                        "module-Augmented-Security.html": {
                                          "ref": "module-Augmented-Security.html",
                                          "tf": 100
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "h": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Security.Client.ACLClient.html#authenticate": {
                          "ref": "Security.Client.ACLClient.html#authenticate",
                          "tf": 633.3333333333334
                        }
                      },
                      "i": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "f": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {
                                                    "Security.AuthenticationFactory.html": {
                                                      "ref": "Security.AuthenticationFactory.html",
                                                      "tf": 756.25
                                                    }
                                                  }
                                                },
                                                "y": {
                                                  "docs": {},
                                                  ".": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "s": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "c": {
                                                                "docs": {},
                                                                "u": {
                                                                  "docs": {},
                                                                  "r": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "t": {
                                                                        "docs": {},
                                                                        "y": {
                                                                          "docs": {},
                                                                          "c": {
                                                                            "docs": {},
                                                                            "l": {
                                                                              "docs": {},
                                                                              "i": {
                                                                                "docs": {
                                                                                  "Security.AuthenticationFactory.html#.getSecurityClient": {
                                                                                    "ref": "Security.AuthenticationFactory.html#.getSecurityClient",
                                                                                    "tf": 100
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "o": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Security.Client.OAUTH2Client.html#authorize": {
                        "ref": "Security.Client.OAUTH2Client.html#authorize",
                        "tf": 637.5
                      }
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "p": {
              "docs": {
                "Application.html": {
                  "ref": "Application.html",
                  "tf": 2.631578947368421
                }
              },
              "l": {
                "docs": {},
                "i": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "Application.html": {
                        "ref": "Application.html",
                        "tf": 1905.2631578947369
                      },
                      "Application.html#started": {
                        "ref": "Application.html#started",
                        "tf": 16.666666666666664
                      },
                      "Application.html#name": {
                        "ref": "Application.html#name",
                        "tf": 25
                      },
                      "Application.html#datastore": {
                        "ref": "Application.html#datastore",
                        "tf": 16.666666666666664
                      },
                      "Application.html#router": {
                        "ref": "Application.html#router",
                        "tf": 16.666666666666664
                      },
                      "Application.html#initialize": {
                        "ref": "Application.html#initialize",
                        "tf": 12.5
                      },
                      "Application.html#beforeInitialize": {
                        "ref": "Application.html#beforeInitialize",
                        "tf": 12.5
                      },
                      "Application.html#afterInitialize": {
                        "ref": "Application.html#afterInitialize",
                        "tf": 16.666666666666664
                      },
                      "Application.html#registerRouter": {
                        "ref": "Application.html#registerRouter",
                        "tf": 10
                      },
                      "Application.html#start": {
                        "ref": "Application.html#start",
                        "tf": 12.5
                      },
                      "Application.html#stop": {
                        "ref": "Application.html#stop",
                        "tf": 12.5
                      }
                    },
                    "a": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              ".": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "n": {
                                    "docs": {
                                      "Application.html": {
                                        "ref": "Application.html",
                                        "tf": 2.631578947368421
                                      }
                                    }
                                  },
                                  "p": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "l": {
                                        "docs": {
                                          "Application.html": {
                                            "ref": "Application.html",
                                            "tf": 2.631578947368421
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "#": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "Application.html#started": {
                                              "ref": "Application.html#started",
                                              "tf": 1150
                                            },
                                            "Application.html#start": {
                                              "ref": "Application.html#start",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "o": {
                                      "docs": {},
                                      "p": {
                                        "docs": {
                                          "Application.html#stop": {
                                            "ref": "Application.html#stop",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "m": {
                                                              "docs": {
                                                                "Application.html#setMetadataItem": {
                                                                  "ref": "Application.html#setMetadataItem",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "n": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "m": {
                                      "docs": {
                                        "Application.html#name": {
                                          "ref": "Application.html#name",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                },
                                "m": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "d": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "a": {
                                                "docs": {
                                                  "Application.html#metadata": {
                                                    "ref": "Application.html#metadata",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "d": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "r": {
                                                "docs": {
                                                  "Application.html#datastore": {
                                                    "ref": "Application.html#datastore",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "r": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "Application.html#router": {
                                            "ref": "Application.html#router",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "g": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {
                                                          "Application.html#registerRouter": {
                                                            "ref": "Application.html#registerRouter",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "i": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "i": {
                                          "docs": {
                                            "Application.html#initialize": {
                                              "ref": "Application.html#initialize",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "b": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "f": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {
                                                        "Application.html#beforeInitialize": {
                                                          "ref": "Application.html#beforeInitialize",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "a": {
                                  "docs": {},
                                  "f": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {
                                                      "Application.html#afterInitialize": {
                                                        "ref": "Application.html#afterInitialize",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "g": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "m": {
                                                              "docs": {
                                                                "Application.html#getMetadataItem": {
                                                                  "ref": "Application.html#getMetadataItem",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              },
                              "/": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "v": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "/": {
                                                "docs": {},
                                                "m": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "d": {
                                                      "docs": {},
                                                      "u": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {
                                                            "Security.Client.OAUTH2Client.html#authorize": {
                                                              "ref": "Security.Client.OAUTH2Client.html#authorize",
                                                              "tf": 12.5
                                                            },
                                                            "Security.Client.OAUTH2Client.html#access": {
                                                              "ref": "Security.Client.OAUTH2Client.html#access",
                                                              "tf": 12.5
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {
                "module-Augmented-Security.html": {
                  "ref": "module-Augmented-Security.html",
                  "tf": 16.666666666666664
                }
              }
            }
          },
          "f": {
            "docs": {},
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "i": {
                            "docs": {
                              "Application.html#afterInitialize": {
                                "ref": "Application.html#afterInitialize",
                                "tf": 750
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {
              "AbstractCollection.html#set": {
                "ref": "AbstractCollection.html#set",
                "tf": 1.8518518518518516
              },
              "AbstractCollection.html#sort": {
                "ref": "AbstractCollection.html#sort",
                "tf": 2.941176470588235
              },
              "AbstractCollection.html#parse": {
                "ref": "AbstractCollection.html#parse",
                "tf": 4.545454545454546
              },
              "Utility.AsynchronousQueue.html#add": {
                "ref": "Utility.AsynchronousQueue.html#add",
                "tf": 10
              }
            },
            "d": {
              "docs": {
                "Application.html#registerRouter": {
                  "ref": "Application.html#registerRouter",
                  "tf": 10
                },
                "AbstractCollection.html#add": {
                  "ref": "AbstractCollection.html#add",
                  "tf": 753.5714285714286
                },
                "AbstractCollection.html#reset": {
                  "ref": "AbstractCollection.html#reset",
                  "tf": 4.166666666666666
                },
                "AbstractCollection.html#push": {
                  "ref": "AbstractCollection.html#push",
                  "tf": 12.5
                },
                "AbstractCollection.html#unshift": {
                  "ref": "AbstractCollection.html#unshift",
                  "tf": 12.5
                },
                "AbstractCollection.html#create": {
                  "ref": "AbstractCollection.html#create",
                  "tf": 2.941176470588235
                },
                "Security.Context.html#.Context#addPermission": {
                  "ref": "Security.Context.html#.Context#addPermission",
                  "tf": 10
                },
                "Security.Entry.html#addPermission": {
                  "ref": "Security.Entry.html#addPermission",
                  "tf": 25
                },
                "Utility.AsynchronousQueue.html#add": {
                  "ref": "Utility.AsynchronousQueue.html#add",
                  "tf": 710
                },
                "Utility.Stack.html#push": {
                  "ref": "Utility.Stack.html#push",
                  "tf": 12.5
                }
              },
              "p": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "Security.Context.html#.Context#addPermission": {
                                "ref": "Security.Context.html#.Context#addPermission",
                                "tf": 85
                              },
                              "Security.Entry.html#addPermission": {
                                "ref": "Security.Entry.html#addPermission",
                                "tf": 650
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "a": {
                "docs": {},
                "n": {
                  "docs": {},
                  "c": {
                    "docs": {
                      "Utility.html#.mergeSort": {
                        "ref": "Utility.html#.mergeSort",
                        "tf": 1.9230769230769231
                      }
                    }
                  }
                }
              }
            },
            "j": {
              "docs": {},
              "a": {
                "docs": {},
                "c": {
                  "docs": {
                    "Utility.html#.mergeSort": {
                      "ref": "Utility.html#.mergeSort",
                      "tf": 3.125
                    }
                  }
                }
              }
            }
          },
          "b": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "r": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "AbstractCollection.html": {
                            "ref": "AbstractCollection.html",
                            "tf": 7.142857142857142
                          },
                          "Logger.AbstractLogger.html": {
                            "ref": "Logger.AbstractLogger.html",
                            "tf": 16.666666666666664
                          },
                          "AbstractSecurityClient.html": {
                            "ref": "AbstractSecurityClient.html",
                            "tf": 10
                          },
                          "Security.Principal.html": {
                            "ref": "Security.Principal.html",
                            "tf": 7.142857142857142
                          },
                          "ValidationFramework.html": {
                            "ref": "ValidationFramework.html",
                            "tf": 4.545454545454546
                          }
                        },
                        "c": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "t": {
                                      "docs": {
                                        "AbstractCollection.html": {
                                          "ref": "AbstractCollection.html",
                                          "tf": 1900
                                        }
                                      },
                                      "i": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "#": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "n": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {
                                                                "AbstractCollection.html#preinitialize": {
                                                                  "ref": "AbstractCollection.html#preinitialize",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "u": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "h": {
                                                      "docs": {
                                                        "AbstractCollection.html#push": {
                                                          "ref": "AbstractCollection.html#push",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "o": {
                                                  "docs": {},
                                                  "p": {
                                                    "docs": {
                                                      "AbstractCollection.html#pop": {
                                                        "ref": "AbstractCollection.html#pop",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                },
                                                "l": {
                                                  "docs": {},
                                                  "u": {
                                                    "docs": {},
                                                    "c": {
                                                      "docs": {},
                                                      "k": {
                                                        "docs": {
                                                          "AbstractCollection.html#pluck": {
                                                            "ref": "AbstractCollection.html#pluck",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "a": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {
                                                        "AbstractCollection.html#parse": {
                                                          "ref": "AbstractCollection.html#parse",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "t": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "j": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "n": {
                                                          "docs": {
                                                            "AbstractCollection.html#toJSON": {
                                                              "ref": "AbstractCollection.html#toJSON",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "s": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {
                                                          "AbstractCollection.html#toString": {
                                                            "ref": "AbstractCollection.html#toString",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "a": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "AbstractCollection.html#add": {
                                                        "ref": "AbstractCollection.html#add",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                },
                                                "t": {
                                                  "docs": {
                                                    "AbstractCollection.html#at": {
                                                      "ref": "AbstractCollection.html#at",
                                                      "tf": 1300
                                                    }
                                                  }
                                                }
                                              },
                                              "r": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "m": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "v": {
                                                        "docs": {
                                                          "AbstractCollection.html#remove": {
                                                            "ref": "AbstractCollection.html#remove",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "s": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {
                                                          "AbstractCollection.html#reset": {
                                                            "ref": "AbstractCollection.html#reset",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "s": {
                                                "docs": {
                                                  "AbstractCollection.html#size": {
                                                    "ref": "AbstractCollection.html#size",
                                                    "tf": 1150
                                                  }
                                                },
                                                "e": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {
                                                      "AbstractCollection.html#set": {
                                                        "ref": "AbstractCollection.html#set",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                },
                                                "h": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "f": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {
                                                          "AbstractCollection.html#shift": {
                                                            "ref": "AbstractCollection.html#shift",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "l": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "c": {
                                                      "docs": {
                                                        "AbstractCollection.html#slice": {
                                                          "ref": "AbstractCollection.html#slice",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "o": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {
                                                        "AbstractCollection.html#sort": {
                                                          "ref": "AbstractCollection.html#sort",
                                                          "tf": 1150
                                                        }
                                                      },
                                                      "b": {
                                                        "docs": {},
                                                        "y": {
                                                          "docs": {},
                                                          "k": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "y": {
                                                                "docs": {
                                                                  "AbstractCollection.html#sortByKey": {
                                                                    "ref": "AbstractCollection.html#sortByKey",
                                                                    "tf": 1150
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "u": {
                                                  "docs": {},
                                                  "p": {
                                                    "docs": {},
                                                    "p": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "s": {
                                                              "docs": {},
                                                              "v": {
                                                                "docs": {},
                                                                "a": {
                                                                  "docs": {},
                                                                  "l": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "d": {
                                                                        "docs": {
                                                                          "AbstractCollection.html#supportsValidation": {
                                                                            "ref": "AbstractCollection.html#supportsValidation",
                                                                            "tf": 1150
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "y": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "c": {
                                                      "docs": {
                                                        "AbstractCollection.html#sync": {
                                                          "ref": "AbstractCollection.html#sync",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "a": {
                                                  "docs": {},
                                                  "v": {
                                                    "docs": {
                                                      "AbstractCollection.html#save": {
                                                        "ref": "AbstractCollection.html#save",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "u": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "h": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "f": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {
                                                              "AbstractCollection.html#unshift": {
                                                                "ref": "AbstractCollection.html#unshift",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "p": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {
                                                      "AbstractCollection.html#update": {
                                                        "ref": "AbstractCollection.html#update",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "g": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {
                                                      "AbstractCollection.html#get": {
                                                        "ref": "AbstractCollection.html#get",
                                                        "tf": 1300
                                                      }
                                                    },
                                                    "v": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "d": {
                                                              "docs": {},
                                                              "a": {
                                                                "docs": {},
                                                                "t": {
                                                                  "docs": {},
                                                                  "i": {
                                                                    "docs": {},
                                                                    "o": {
                                                                      "docs": {},
                                                                      "n": {
                                                                        "docs": {},
                                                                        "m": {
                                                                          "docs": {},
                                                                          "e": {
                                                                            "docs": {},
                                                                            "s": {
                                                                              "docs": {},
                                                                              "s": {
                                                                                "docs": {},
                                                                                "a": {
                                                                                  "docs": {},
                                                                                  "g": {
                                                                                    "docs": {
                                                                                      "AbstractCollection.html#getValidationMessages": {
                                                                                        "ref": "AbstractCollection.html#getValidationMessages",
                                                                                        "tf": 1150
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "h": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {
                                                    "AbstractCollection.html#has": {
                                                      "ref": "AbstractCollection.html#has",
                                                      "tf": 1300
                                                    }
                                                  }
                                                }
                                              },
                                              "f": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "n": {
                                                    "docs": {},
                                                    "d": {
                                                      "docs": {
                                                        "AbstractCollection.html#find": {
                                                          "ref": "AbstractCollection.html#find",
                                                          "tf": 1150
                                                        }
                                                      },
                                                      "w": {
                                                        "docs": {},
                                                        "h": {
                                                          "docs": {},
                                                          "e": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {
                                                                "AbstractCollection.html#findWhere": {
                                                                  "ref": "AbstractCollection.html#findWhere",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "l": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {
                                                        "AbstractCollection.html#filter": {
                                                          "ref": "AbstractCollection.html#filter",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "e": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "c": {
                                                      "docs": {},
                                                      "h": {
                                                        "docs": {
                                                          "AbstractCollection.html#fetch": {
                                                            "ref": "AbstractCollection.html#fetch",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "w": {
                                                "docs": {},
                                                "h": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {
                                                        "AbstractCollection.html#where": {
                                                          "ref": "AbstractCollection.html#where",
                                                          "tf": 1300
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "c": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {
                                                    "AbstractCollection.html#create": {
                                                      "ref": "AbstractCollection.html#create",
                                                      "tf": 1150
                                                    }
                                                  }
                                                },
                                                "l": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "n": {
                                                      "docs": {
                                                        "AbstractCollection.html#clone": {
                                                          "ref": "AbstractCollection.html#clone",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "m": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "d": {
                                                            "docs": {
                                                              "AbstractCollection.html#modelId": {
                                                                "ref": "AbstractCollection.html#modelId",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "v": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {
                                                        "AbstractCollection.html#values": {
                                                          "ref": "AbstractCollection.html#values",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    },
                                                    "i": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {
                                                          "AbstractCollection.html#validate": {
                                                            "ref": "AbstractCollection.html#validate",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "k": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "y": {
                                                    "docs": {
                                                      "AbstractCollection.html#keys": {
                                                        "ref": "AbstractCollection.html#keys",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "e": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {
                                                          "AbstractCollection.html#entries": {
                                                            "ref": "AbstractCollection.html#entries",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              },
                                              "i": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "v": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "d": {
                                                            "docs": {
                                                              "AbstractCollection.html#isValid": {
                                                                "ref": "AbstractCollection.html#isValid",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "e": {
                                                    "docs": {},
                                                    "m": {
                                                      "docs": {},
                                                      "p": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {
                                                              "AbstractCollection.html#isEmpty": {
                                                                "ref": "AbstractCollection.html#isEmpty",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "l": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "g": {
                                "docs": {
                                  "Logger.AbstractLogger.html": {
                                    "ref": "Logger.AbstractLogger.html",
                                    "tf": 700
                                  }
                                },
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "#": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "g": {
                                            "docs": {
                                              "Logger.AbstractLogger.html#log": {
                                                "ref": "Logger.AbstractLogger.html#log",
                                                "tf": 100
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "i": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "f": {
                                            "docs": {},
                                            "o": {
                                              "docs": {
                                                "Logger.AbstractLogger.html#info": {
                                                  "ref": "Logger.AbstractLogger.html#info",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "e": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "r": {
                                                "docs": {
                                                  "Logger.AbstractLogger.html#error": {
                                                    "ref": "Logger.AbstractLogger.html#error",
                                                    "tf": 100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "d": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "b": {
                                            "docs": {},
                                            "u": {
                                              "docs": {},
                                              "g": {
                                                "docs": {
                                                  "Logger.AbstractLogger.html#debug": {
                                                    "ref": "Logger.AbstractLogger.html#debug",
                                                    "tf": 100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "w": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "n": {
                                              "docs": {
                                                "Logger.AbstractLogger.html#warn": {
                                                  "ref": "Logger.AbstractLogger.html#warn",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "m": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "l": {
                                  "docs": {
                                    "AbstractModel.html": {
                                      "ref": "AbstractModel.html",
                                      "tf": 1910
                                    }
                                  },
                                  "#": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {
                                                      "AbstractModel.html#preinitialize": {
                                                        "ref": "AbstractModel.html#preinitialize",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "v": {
                                            "docs": {},
                                            "i": {
                                              "docs": {
                                                "AbstractModel.html#previous": {
                                                  "ref": "AbstractModel.html#previous",
                                                  "tf": 1150
                                                }
                                              },
                                              "o": {
                                                "docs": {},
                                                "u": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "b": {
                                                                "docs": {},
                                                                "u": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {
                                                                      "AbstractModel.html#previousAttributes": {
                                                                        "ref": "AbstractModel.html#previousAttributes",
                                                                        "tf": 1150
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "a": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "s": {
                                            "docs": {
                                              "AbstractModel.html#parse": {
                                                "ref": "AbstractModel.html#parse",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "g": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "AbstractModel.html#get": {
                                              "ref": "AbstractModel.html#get",
                                              "tf": 1300
                                            }
                                          },
                                          "v": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {},
                                                              "m": {
                                                                "docs": {},
                                                                "e": {
                                                                  "docs": {},
                                                                  "s": {
                                                                    "docs": {},
                                                                    "s": {
                                                                      "docs": {},
                                                                      "a": {
                                                                        "docs": {},
                                                                        "g": {
                                                                          "docs": {
                                                                            "AbstractModel.html#getValidationMessages": {
                                                                              "ref": "AbstractModel.html#getValidationMessages",
                                                                              "tf": 1150
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "s": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "AbstractModel.html#set": {
                                              "ref": "AbstractModel.html#set",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      },
                                      "a": {
                                        "docs": {},
                                        "v": {
                                          "docs": {
                                            "AbstractModel.html#save": {
                                              "ref": "AbstractModel.html#save",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      },
                                      "u": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "p": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "v": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "d": {
                                                              "docs": {
                                                                "AbstractModel.html#supportsValidation": {
                                                                  "ref": "AbstractModel.html#supportsValidation",
                                                                  "tf": 1150
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "y": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "c": {
                                            "docs": {
                                              "AbstractModel.html#sync": {
                                                "ref": "AbstractModel.html#sync",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "e": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "p": {
                                              "docs": {
                                                "AbstractModel.html#escape": {
                                                  "ref": "AbstractModel.html#escape",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "h": {
                                      "docs": {},
                                      "a": {
                                        "docs": {
                                          "AbstractModel.html#has": {
                                            "ref": "AbstractModel.html#has",
                                            "tf": 1300
                                          }
                                        },
                                        "s": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "h": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "g": {
                                                    "docs": {
                                                      "AbstractModel.html#hasChanged": {
                                                        "ref": "AbstractModel.html#hasChanged",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "m": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "h": {
                                              "docs": {
                                                "AbstractModel.html#matches": {
                                                  "ref": "AbstractModel.html#matches",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "u": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "t": {
                                              "docs": {
                                                "AbstractModel.html#unset": {
                                                  "ref": "AbstractModel.html#unset",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "r": {
                                        "docs": {},
                                        "l": {
                                          "docs": {
                                            "AbstractModel.html#url": {
                                              "ref": "AbstractModel.html#url",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      },
                                      "p": {
                                        "docs": {},
                                        "d": {
                                          "docs": {
                                            "AbstractModel.html#update": {
                                              "ref": "AbstractModel.html#update",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "c": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "r": {
                                              "docs": {
                                                "AbstractModel.html#clear": {
                                                  "ref": "AbstractModel.html#clear",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "o": {
                                          "docs": {},
                                          "n": {
                                            "docs": {
                                              "AbstractModel.html#clone": {
                                                "ref": "AbstractModel.html#clone",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "h": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "g": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "b": {
                                                              "docs": {},
                                                              "u": {
                                                                "docs": {},
                                                                "t": {
                                                                  "docs": {
                                                                    "AbstractModel.html#changedAttributes": {
                                                                      "ref": "AbstractModel.html#changedAttributes",
                                                                      "tf": 1150
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "t": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "j": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "n": {
                                                "docs": {
                                                  "AbstractModel.html#toJSON": {
                                                    "ref": "AbstractModel.html#toJSON",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "s": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "r": {
                                              "docs": {
                                                "AbstractModel.html#toString": {
                                                  "ref": "AbstractModel.html#toString",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "f": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "h": {
                                              "docs": {
                                                "AbstractModel.html#fetch": {
                                                  "ref": "AbstractModel.html#fetch",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "d": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "y": {
                                                  "docs": {
                                                    "AbstractModel.html#destroy": {
                                                      "ref": "AbstractModel.html#destroy",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "i": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "w": {
                                              "docs": {
                                                "AbstractModel.html#isNew": {
                                                  "ref": "AbstractModel.html#isNew",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "v": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {
                                                    "AbstractModel.html#isValid": {
                                                      "ref": "AbstractModel.html#isValid",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "e": {
                                          "docs": {},
                                          "m": {
                                            "docs": {},
                                            "p": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {
                                                    "AbstractModel.html#isEmpty": {
                                                      "ref": "AbstractModel.html#isEmpty",
                                                      "tf": 1150
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "v": {
                                      "docs": {},
                                      "a": {
                                        "docs": {},
                                        "l": {
                                          "docs": {},
                                          "i": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "AbstractModel.html#validate": {
                                                  "ref": "AbstractModel.html#validate",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "r": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "t": {
                                              "docs": {
                                                "AbstractModel.html#reset": {
                                                  "ref": "AbstractModel.html#reset",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "s": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "u": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "y": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "i": {
                                              "docs": {
                                                "AbstractSecurityClient.html": {
                                                  "ref": "AbstractSecurityClient.html",
                                                  "tf": 1900
                                                }
                                              },
                                              "e": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "t": {
                                                    "docs": {},
                                                    "#": {
                                                      "docs": {},
                                                      "u": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {
                                                              "AbstractSecurityClient.html#uri": {
                                                                "ref": "AbstractSecurityClient.html#uri",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "t": {
                                                        "docs": {},
                                                        "y": {
                                                          "docs": {},
                                                          "p": {
                                                            "docs": {
                                                              "AbstractSecurityClient.html#type": {
                                                                "ref": "AbstractSecurityClient.html#type",
                                                                "tf": 1150
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "r": {
              "docs": {
                "Utility.html#.QuickSort": {
                  "ref": "Utility.html#.QuickSort",
                  "tf": 33.33333333333333
                }
              },
              "a": {
                "docs": {},
                "y": {
                  "docs": {
                    "AbstractCollection.html#toJSON": {
                      "ref": "AbstractCollection.html#toJSON",
                      "tf": 8.333333333333332
                    },
                    "AbstractCollection.html#slice": {
                      "ref": "AbstractCollection.html#slice",
                      "tf": 8.333333333333332
                    },
                    "AbstractModel.html#getValidationMessages": {
                      "ref": "AbstractModel.html#getValidationMessages",
                      "tf": 12.5
                    },
                    "Utility.AugmentedMap.html#values": {
                      "ref": "Utility.AugmentedMap.html#values",
                      "tf": 16.666666666666664
                    },
                    "Utility.Stack.html#toArray": {
                      "ref": "Utility.Stack.html#toArray",
                      "tf": 10
                    },
                    "Utility.exports.Transformer.html": {
                      "ref": "Utility.exports.Transformer.html",
                      "tf": 11.11111111111111
                    },
                    "Utility.html#.sortObjects": {
                      "ref": "Utility.html#.sortObjects",
                      "tf": 35
                    },
                    "Utility.html#.mergeSort": {
                      "ref": "Utility.html#.mergeSort",
                      "tf": 33.33333333333333
                    },
                    "Utility.html#.QuickSort": {
                      "ref": "Utility.html#.QuickSort",
                      "tf": 12.5
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "t": {
              "docs": {},
              "r": {
                "docs": {
                  "AbstractCollection.html#find": {
                    "ref": "AbstractCollection.html#find",
                    "tf": 50
                  },
                  "AbstractCollection.html#filter": {
                    "ref": "AbstractCollection.html#filter",
                    "tf": 50
                  },
                  "AbstractCollection.html#where": {
                    "ref": "AbstractCollection.html#where",
                    "tf": 100
                  }
                },
                "i": {
                  "docs": {},
                  "b": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "AbstractCollection.html#toJSON": {
                            "ref": "AbstractCollection.html#toJSON",
                            "tf": 8.333333333333332
                          },
                          "AbstractCollection.html#get": {
                            "ref": "AbstractCollection.html#get",
                            "tf": 3.8461538461538463
                          },
                          "AbstractCollection.html#where": {
                            "ref": "AbstractCollection.html#where",
                            "tf": 6.25
                          },
                          "AbstractCollection.html#findWhere": {
                            "ref": "AbstractCollection.html#findWhere",
                            "tf": 5.555555555555555
                          },
                          "AbstractCollection.html#pluck": {
                            "ref": "AbstractCollection.html#pluck",
                            "tf": 10
                          },
                          "AbstractModel.html#get": {
                            "ref": "AbstractModel.html#get",
                            "tf": 16.666666666666664
                          },
                          "AbstractModel.html#set": {
                            "ref": "AbstractModel.html#set",
                            "tf": 2.631578947368421
                          },
                          "AbstractModel.html#escape": {
                            "ref": "AbstractModel.html#escape",
                            "tf": 16.666666666666664
                          },
                          "AbstractModel.html#has": {
                            "ref": "AbstractModel.html#has",
                            "tf": 25
                          },
                          "AbstractModel.html#unset": {
                            "ref": "AbstractModel.html#unset",
                            "tf": 10
                          },
                          "AbstractModel.html#clear": {
                            "ref": "AbstractModel.html#clear",
                            "tf": 10
                          },
                          "AbstractModel.html#fetch": {
                            "ref": "AbstractModel.html#fetch",
                            "tf": 8.333333333333332
                          },
                          "AbstractModel.html#save": {
                            "ref": "AbstractModel.html#save",
                            "tf": 6.666666666666667
                          },
                          "AbstractModel.html#parse": {
                            "ref": "AbstractModel.html#parse",
                            "tf": 3.8461538461538463
                          },
                          "AbstractModel.html#clone": {
                            "ref": "AbstractModel.html#clone",
                            "tf": 8.333333333333332
                          },
                          "AbstractModel.html#hasChanged": {
                            "ref": "AbstractModel.html#hasChanged",
                            "tf": 8.333333333333332
                          },
                          "AbstractModel.html#changedAttributes": {
                            "ref": "AbstractModel.html#changedAttributes",
                            "tf": 8.333333333333332
                          },
                          "AbstractModel.html#previous": {
                            "ref": "AbstractModel.html#previous",
                            "tf": 6.25
                          },
                          "AbstractModel.html#previousAttributes": {
                            "ref": "AbstractModel.html#previousAttributes",
                            "tf": 10
                          },
                          "AbstractModel.html#isValid": {
                            "ref": "AbstractModel.html#isValid",
                            "tf": 4.166666666666666
                          },
                          "Augmented.Utility.MessageReader.html#.getMessage": {
                            "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                            "tf": 2
                          },
                          "Augmented.Utility.MessageKeyFormatter.html": {
                            "ref": "Augmented.Utility.MessageKeyFormatter.html",
                            "tf": 2.7777777777777777
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "y": {
              "docs": {},
              "c": {
                "docs": {},
                "o": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "b": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "n": {
                          "docs": {
                            "AbstractCollection.html#add": {
                              "ref": "AbstractCollection.html#add",
                              "tf": 3.571428571428571
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "d": {
              "docs": {},
              "/": {
                "docs": {},
                "o": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "AbstractModel.html#changedAttributes": {
                        "ref": "AbstractModel.html#changedAttributes",
                        "tf": 1.6666666666666667
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "docs": {
                    "Utility.exports.Transformer.html": {
                      "ref": "Utility.exports.Transformer.html",
                      "tf": 5.555555555555555
                    }
                  }
                }
              }
            }
          },
          "g": {
            "docs": {},
            "r": {
              "docs": {},
              "e": {
                "docs": {
                  "AbstractCollection.html#create": {
                    "ref": "AbstractCollection.html#create",
                    "tf": 2.941176470588235
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {
                    "AbstractModel.html#save": {
                      "ref": "AbstractModel.html#save",
                      "tf": 3.3333333333333335
                    }
                  },
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "AbstractModel.html#changedAttributes": {
                          "ref": "AbstractModel.html#changedAttributes",
                          "tf": 1.6666666666666667
                        }
                      },
                      "o": {
                        "docs": {},
                        "p": {
                          "docs": {
                            "Augmented.Utility.MessageReader.html#.getMessage": {
                              "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                              "tf": 2
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "l": {
              "docs": {},
              "o": {
                "docs": {},
                "w": {
                  "docs": {
                    "CollectionIterator.html": {
                      "ref": "CollectionIterator.html",
                      "tf": 2.631578947368421
                    }
                  }
                }
              }
            },
            "w": {
              "docs": {},
              "a": {
                "docs": {},
                "y": {
                  "docs": {
                    "CollectionIterator.html#next": {
                      "ref": "CollectionIterator.html#next",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {},
                "a": {
                  "docs": {},
                  "d": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "AbstractModel.html#destroy": {
                          "ref": "AbstractModel.html#destroy",
                          "tf": 2.941176470588235
                        }
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "n": {
                "docs": {},
                "g": {
                  "docs": {
                    "AbstractModel.html#parse": {
                      "ref": "AbstractModel.html#parse",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "h": {
                        "docs": {},
                        "m": {
                          "docs": {
                            "Utility.html#.mergeSort": {
                              "ref": "Utility.html#.mergeSort",
                              "tf": 3.125
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "c": {
            "docs": {},
            "l": {
              "docs": {
                "Security.Client.ACLClient.html": {
                  "ref": "Security.Client.ACLClient.html",
                  "tf": 16.666666666666664
                }
              },
              "c": {
                "docs": {},
                "l": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "Security.Client.ACLClient.html": {
                              "ref": "Security.Client.ACLClient.html",
                              "tf": 600
                            }
                          },
                          "#": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "u": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "h": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "n": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "Security.Client.ACLClient.html#authenticate": {
                                              "ref": "Security.Client.ACLClient.html#authenticate",
                                              "tf": 75
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "e": {
                "docs": {},
                "s": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "Security.Client.OAUTH2Client.html#access": {
                        "ref": "Security.Client.OAUTH2Client.html#access",
                        "tf": 637.5
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {},
            "y": {
              "docs": {},
              "n": {
                "docs": {},
                "c": {
                  "docs": {
                    "Utility.AsynchronousQueue.html": {
                      "ref": "Utility.AsynchronousQueue.html",
                      "tf": 14.285714285714285
                    }
                  },
                  "h": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "q": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "u": {
                                        "docs": {
                                          "Utility.AsynchronousQueue.html": {
                                            "ref": "Utility.AsynchronousQueue.html",
                                            "tf": 650
                                          }
                                        },
                                        "e": {
                                          "docs": {},
                                          "#": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "m": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "u": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {
                                                            "Utility.AsynchronousQueue.html#timeout": {
                                                              "ref": "Utility.AsynchronousQueue.html#timeout",
                                                              "tf": 100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "q": {
                                              "docs": {},
                                              "u": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "u": {
                                                    "docs": {
                                                      "Utility.AsynchronousQueue.html#queue": {
                                                        "ref": "Utility.AsynchronousQueue.html#queue",
                                                        "tf": 100
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "a": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "d": {
                                                  "docs": {
                                                    "Utility.AsynchronousQueue.html#add": {
                                                      "ref": "Utility.AsynchronousQueue.html#add",
                                                      "tf": 100
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "c": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {
                                                        "Utility.AsynchronousQueue.html#clear": {
                                                          "ref": "Utility.AsynchronousQueue.html#clear",
                                                          "tf": 100
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "p": {
                                              "docs": {},
                                              "r": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "c": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {
                                                            "Utility.AsynchronousQueue.html#process": {
                                                              "ref": "Utility.AsynchronousQueue.html#process",
                                                              "tf": 100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "m": {
            "docs": {},
            "/": {
              "docs": {},
              "p": {
                "docs": {},
                "m": {
                  "docs": {
                    "Utility.html#.formatDate": {
                      "ref": "Utility.html#.formatDate",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            }
          }
        },
        "d": {
          "docs": {},
          "e": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "l": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "p": {
                      "docs": {
                        "index.html": {
                          "ref": "index.html",
                          "tf": 17.5
                        }
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {
                    "Application.html": {
                      "ref": "Application.html",
                      "tf": 2.631578947368421
                    },
                    "AbstractCollection.html#modelId": {
                      "ref": "AbstractCollection.html#modelId",
                      "tf": 10
                    }
                  }
                }
              },
              "a": {
                "docs": {},
                "u": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "AbstractCollection.html#parse": {
                          "ref": "AbstractCollection.html#parse",
                          "tf": 4.545454545454546
                        },
                        "AbstractModel.html#url": {
                          "ref": "AbstractModel.html#url",
                          "tf": 4.166666666666666
                        },
                        "AbstractModel.html#parse": {
                          "ref": "AbstractModel.html#parse",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                }
              }
            },
            "b": {
              "docs": {},
              "u": {
                "docs": {},
                "g": {
                  "docs": {
                    "Logger.AbstractLogger.html#debug": {
                      "ref": "Logger.AbstractLogger.html#debug",
                      "tf": 662.5
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "y": {
                      "docs": {
                        "AbstractModel.html#destroy": {
                          "ref": "AbstractModel.html#destroy",
                          "tf": 762.5
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "AbstractModel.html#hasChanged": {
                            "ref": "AbstractModel.html#hasChanged",
                            "tf": 8.333333333333332
                          },
                          "AbstractModel.html#changedAttributes": {
                            "ref": "AbstractModel.html#changedAttributes",
                            "tf": 1.6666666666666667
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "e": {
                "docs": {},
                "t": {
                  "docs": {
                    "AbstractModel.html#destroy": {
                      "ref": "AbstractModel.html#destroy",
                      "tf": 25
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "m": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "global.html": {
                            "ref": "global.html",
                            "tf": 35
                          },
                          "list_class.html": {
                            "ref": "list_class.html",
                            "tf": 35
                          },
                          "list_module.html": {
                            "ref": "list_module.html",
                            "tf": 35
                          },
                          "list_namespace.html": {
                            "ref": "list_namespace.html",
                            "tf": 35
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "&": {
                "docs": {},
                "q": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        ";": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "AbstractCollection.html#sort": {
                                "ref": "AbstractCollection.html#sort",
                                "tf": 2.941176470588235
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {
                  "CollectionIterator.html#next": {
                    "ref": "CollectionIterator.html#next",
                    "tf": 3.8461538461538463
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "s": {
                "docs": {},
                "n": {
                  "docs": {},
                  "'": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "AbstractModel.html#unset": {
                          "ref": "AbstractModel.html#unset",
                          "tf": 5
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {
                  "AbstractCollection.html#set": {
                    "ref": "AbstractCollection.html#set",
                    "tf": 1.8518518518518516
                  },
                  "AbstractCollection.html#toString": {
                    "ref": "AbstractCollection.html#toString",
                    "tf": 10
                  },
                  "AbstractModel.html#set": {
                    "ref": "AbstractModel.html#set",
                    "tf": 2.631578947368421
                  },
                  "AbstractModel.html#escape": {
                    "ref": "AbstractModel.html#escape",
                    "tf": 16.666666666666664
                  },
                  "AbstractModel.html#sync": {
                    "ref": "AbstractModel.html#sync",
                    "tf": 8.333333333333332
                  },
                  "AbstractModel.html#reset": {
                    "ref": "AbstractModel.html#reset",
                    "tf": 58.33333333333333
                  },
                  "AbstractModel.html#toString": {
                    "ref": "AbstractModel.html#toString",
                    "tf": 10
                  },
                  "Security.Context.html": {
                    "ref": "Security.Context.html",
                    "tf": 10
                  },
                  "Utility.AugmentedMap.html#marshall": {
                    "ref": "Utility.AugmentedMap.html#marshall",
                    "tf": 5.555555555555555
                  },
                  "Utility.Stack.html": {
                    "ref": "Utility.Stack.html",
                    "tf": 10
                  },
                  "ValidationFramework.html#validate": {
                    "ref": "ValidationFramework.html#validate",
                    "tf": 45.83333333333333
                  },
                  "ValidationFramework.html#getValidationMessages": {
                    "ref": "ValidationFramework.html#getValidationMessages",
                    "tf": 12.5
                  },
                  "ValidationFramework.html#generateSchema": {
                    "ref": "ValidationFramework.html#generateSchema",
                    "tf": 12.5
                  },
                  "Utility.html#.SchemaGenerator": {
                    "ref": "Utility.html#.SchemaGenerator",
                    "tf": 45.83333333333333
                  }
                },
                "s": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "Application.html#datastore": {
                            "ref": "Application.html#datastore",
                            "tf": 766.6666666666666
                          }
                        }
                      }
                    }
                  }
                },
                "t": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "h": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "l": {
                                  "docs": {
                                    "Utility.AugmentedMap.html#marshall": {
                                      "ref": "Utility.AugmentedMap.html#marshall",
                                      "tf": 50
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {
                  "Utility.html#.formatDate": {
                    "ref": "Utility.html#.formatDate",
                    "tf": 41.66666666666666
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "r": {
              "docs": {},
              "e": {
                "docs": {
                  "Application.html#initialize": {
                    "ref": "Application.html#initialize",
                    "tf": 12.5
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "f": {
              "docs": {},
              "f": {
                "docs": {
                  "AbstractModel.html#changedAttributes": {
                    "ref": "AbstractModel.html#changedAttributes",
                    "tf": 1.6666666666666667
                  }
                },
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "AbstractModel.html#save": {
                        "ref": "AbstractModel.html#save",
                        "tf": 3.3333333333333335
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "i": {
          "docs": {},
          "n": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "x": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 1300
                    },
                    "AbstractCollection.html#at": {
                      "ref": "AbstractCollection.html#at",
                      "tf": 16.666666666666664
                    },
                    "Utility.AugmentedMap.html#indexOf": {
                      "ref": "Utility.AugmentedMap.html#indexOf",
                      "tf": 16.666666666666664
                    },
                    "Utility.AugmentedMap.html#key": {
                      "ref": "Utility.AugmentedMap.html#key",
                      "tf": 16.666666666666664
                    }
                  },
                  "o": {
                    "docs": {},
                    "f": {
                      "docs": {
                        "Utility.AugmentedMap.html#indexOf": {
                          "ref": "Utility.AugmentedMap.html#indexOf",
                          "tf": 650
                        }
                      }
                    }
                  }
                }
              },
              "i": {
                "docs": {},
                "v": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "u": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "y": {
                                "docs": {},
                                ",": {
                                  "docs": {},
                                  "y": {
                                    "docs": {
                                      "AbstractCollection.html#reset": {
                                        "ref": "AbstractCollection.html#reset",
                                        "tf": 2.083333333333333
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "t": {
                "docs": {},
                "i": {
                  "docs": {
                    "Application.html": {
                      "ref": "Application.html",
                      "tf": 2.631578947368421
                    },
                    "Application.html#initialize": {
                      "ref": "Application.html#initialize",
                      "tf": 750
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {
                "AbstractCollection.html#set": {
                  "ref": "AbstractCollection.html#set",
                  "tf": 1.8518518518518516
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "a": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "c": {
                      "docs": {
                        "AbstractCollection.html#create": {
                          "ref": "AbstractCollection.html#create",
                          "tf": 2.941176470588235
                        },
                        "Logger.LoggerFactory.html": {
                          "ref": "Logger.LoggerFactory.html",
                          "tf": 10
                        },
                        "Logger.LoggerFactory.html#.getLogger": {
                          "ref": "Logger.LoggerFactory.html#.getLogger",
                          "tf": 16.666666666666664
                        },
                        "Security.AuthenticationFactory.html#.getSecurityClient": {
                          "ref": "Security.AuthenticationFactory.html#.getSecurityClient",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Utility.html#.mergeSort": {
                        "ref": "Utility.html#.mergeSort",
                        "tf": 1.9230769230769231
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "r": {
                          "docs": {
                            "CollectionIterator.html": {
                              "ref": "CollectionIterator.html",
                              "tf": 2.631578947368421
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "o": {
                "docs": {
                  "Logger.AbstractLogger.html#info": {
                    "ref": "Logger.AbstractLogger.html#info",
                    "tf": 662.5
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "e": {
              "docs": {},
              "m": {
                "docs": {
                  "Application.html#setMetadataItem": {
                    "ref": "Application.html#setMetadataItem",
                    "tf": 12.5
                  },
                  "Application.html#getMetadataItem": {
                    "ref": "Application.html#getMetadataItem",
                    "tf": 16.666666666666664
                  },
                  "AbstractCollection.html#reset": {
                    "ref": "AbstractCollection.html#reset",
                    "tf": 2.083333333333333
                  },
                  "Utility.Stack.html#push": {
                    "ref": "Utility.Stack.html#push",
                    "tf": 50
                  },
                  "Utility.Stack.html#search": {
                    "ref": "Utility.Stack.html#search",
                    "tf": 8.333333333333332
                  },
                  "Utility.html#.mergeSort": {
                    "ref": "Utility.html#.mergeSort",
                    "tf": 3.125
                  }
                },
                "i": {
                  "docs": {
                    "AbstractCollection.html#sort": {
                      "ref": "AbstractCollection.html#sort",
                      "tf": 2.941176470588235
                    }
                  }
                }
              },
              "r": {
                "docs": {
                  "AbstractCollection.html#values": {
                    "ref": "AbstractCollection.html#values",
                    "tf": 16.666666666666664
                  },
                  "AbstractCollection.html#keys": {
                    "ref": "AbstractCollection.html#keys",
                    "tf": 12.5
                  },
                  "AbstractCollection.html#entries": {
                    "ref": "AbstractCollection.html#entries",
                    "tf": 10
                  },
                  "CollectionIterator.html": {
                    "ref": "CollectionIterator.html",
                    "tf": 5.263157894736842
                  },
                  "Utility.AugmentedMap.html#forEach": {
                    "ref": "Utility.AugmentedMap.html#forEach",
                    "tf": 10
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "e": {
                "docs": {},
                "l": {
                  "docs": {},
                  "f": {
                    "docs": {
                      "AbstractCollection.html#sort": {
                        "ref": "AbstractCollection.html#sort",
                        "tf": 2.941176470588235
                      }
                    }
                  }
                }
              }
            }
          },
          "d": {
            "docs": {
              "AbstractCollection.html#get": {
                "ref": "AbstractCollection.html#get",
                "tf": 7.6923076923076925
              },
              "AbstractCollection.html#keys": {
                "ref": "AbstractCollection.html#keys",
                "tf": 12.5
              },
              "AbstractCollection.html#entries": {
                "ref": "AbstractCollection.html#entries",
                "tf": 10
              },
              "AbstractModel.html#isNew": {
                "ref": "AbstractModel.html#isNew",
                "tf": 7.142857142857142
              }
            },
            "e": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "AbstractCollection.html#clone": {
                      "ref": "AbstractCollection.html#clone",
                      "tf": 7.142857142857142
                    },
                    "AbstractModel.html#clone": {
                      "ref": "AbstractModel.html#clone",
                      "tf": 8.333333333333332
                    },
                    "ValidationFramework.html#registerSchema": {
                      "ref": "ValidationFramework.html#registerSchema",
                      "tf": 33.33333333333333
                    },
                    "ValidationFramework.html#getSchema": {
                      "ref": "ValidationFramework.html#getSchema",
                      "tf": 50
                    }
                  },
                  "i": {
                    "docs": {},
                    "f": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "AbstractCollection.html#modelId": {
                            "ref": "AbstractCollection.html#modelId",
                            "tf": 10
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "m": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {},
                "d": {
                  "docs": {},
                  "i": {
                    "docs": {
                      "AbstractCollection.html#create": {
                        "ref": "AbstractCollection.html#create",
                        "tf": 2.941176470588235
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "l": {
                "docs": {},
                "e": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "AbstractCollection.html#parse": {
                              "ref": "AbstractCollection.html#parse",
                              "tf": 4.545454545454546
                            },
                            "CollectionIterator.html": {
                              "ref": "CollectionIterator.html",
                              "tf": 2.631578947368421
                            },
                            "AbstractModel.html#parse": {
                              "ref": "AbstractModel.html#parse",
                              "tf": 3.8461538461538463
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "i": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "Security.Principal.html": {
                              "ref": "Security.Principal.html",
                              "tf": 7.142857142857142
                            },
                            "Utility.html#.QuickSort": {
                              "ref": "Utility.html#.QuickSort",
                              "tf": 12.5
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "s": {
            "docs": {},
            "v": {
              "docs": {},
              "a": {
                "docs": {},
                "l": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "AbstractCollection.html#isValid": {
                          "ref": "AbstractCollection.html#isValid",
                          "tf": 760
                        },
                        "AbstractModel.html#isValid": {
                          "ref": "AbstractModel.html#isValid",
                          "tf": 754.1666666666666
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "m": {
                "docs": {},
                "p": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "AbstractCollection.html#isEmpty": {
                          "ref": "AbstractCollection.html#isEmpty",
                          "tf": 760
                        },
                        "AbstractModel.html#isEmpty": {
                          "ref": "AbstractModel.html#isEmpty",
                          "tf": 760
                        },
                        "Utility.AugmentedMap.html#isEmpty": {
                          "ref": "Utility.AugmentedMap.html#isEmpty",
                          "tf": 700
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "h": {
                "docs": {
                  "AbstractModel.html#set": {
                    "ref": "AbstractModel.html#set",
                    "tf": 2.631578947368421
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "e": {
                "docs": {},
                "w": {
                  "docs": {
                    "AbstractModel.html#isNew": {
                      "ref": "AbstractModel.html#isNew",
                      "tf": 750
                    }
                  }
                },
                "g": {
                  "docs": {
                    "Security.Entry.html#isNegative": {
                      "ref": "Security.Entry.html#isNegative",
                      "tf": 700
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "i": {
                "docs": {},
                "s": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "Augmented.Utility.MessageKeyFormatter.html": {
                        "ref": "Augmented.Utility.MessageKeyFormatter.html",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              }
            }
          },
          "g": {
            "docs": {},
            "n": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "Augmented.Utility.MessageKeyFormatter.html": {
                      "ref": "Augmented.Utility.MessageKeyFormatter.html",
                      "tf": 2.7777777777777777
                    }
                  }
                }
              }
            }
          }
        },
        "n": {
          "docs": {},
          "e": {
            "docs": {},
            "x": {
              "docs": {},
              "t": {
                "docs": {
                  "index.html": {
                    "ref": "index.html",
                    "tf": 17.5
                  },
                  "CollectionIterator.html#next": {
                    "ref": "CollectionIterator.html#next",
                    "tf": 757.6923076923077
                  },
                  "module-Augmented.html": {
                    "ref": "module-Augmented.html",
                    "tf": 12.5
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "e": {
                "docs": {},
                "s": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "i": {
                          "docs": {
                            "AbstractCollection.html#set": {
                              "ref": "AbstractCollection.html#set",
                              "tf": 1.8518518518518516
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "w": {
              "docs": {
                "AbstractCollection.html#set": {
                  "ref": "AbstractCollection.html#set",
                  "tf": 3.7037037037037033
                },
                "AbstractCollection.html#reset": {
                  "ref": "AbstractCollection.html#reset",
                  "tf": 2.083333333333333
                },
                "AbstractCollection.html#create": {
                  "ref": "AbstractCollection.html#create",
                  "tf": 2.941176470588235
                },
                "AbstractCollection.html#clone": {
                  "ref": "AbstractCollection.html#clone",
                  "tf": 7.142857142857142
                },
                "AbstractModel.html#clone": {
                  "ref": "AbstractModel.html#clone",
                  "tf": 8.333333333333332
                },
                "AbstractModel.html#isNew": {
                  "ref": "AbstractModel.html#isNew",
                  "tf": 7.142857142857142
                },
                "Security.Context.html#.Context#addPermission": {
                  "ref": "Security.Context.html#.Context#addPermission",
                  "tf": 10
                }
              }
            },
            "e": {
              "docs": {},
              "d": {
                "docs": {
                  "AbstractCollection.html#sort": {
                    "ref": "AbstractCollection.html#sort",
                    "tf": 2.941176470588235
                  },
                  "AbstractModel.html#set": {
                    "ref": "AbstractModel.html#set",
                    "tf": 2.631578947368421
                  },
                  "AbstractModel.html#changedAttributes": {
                    "ref": "AbstractModel.html#changedAttributes",
                    "tf": 3.3333333333333335
                  }
                }
              }
            },
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "AbstractModel.html#isNew": {
                      "ref": "AbstractModel.html#isNew",
                      "tf": 7.142857142857142
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {
                "Security.Entry.html#isNegative": {
                  "ref": "Security.Entry.html#isNegative",
                  "tf": 25
                },
                "Security.Entry.html#setNegative": {
                  "ref": "Security.Entry.html#setNegative",
                  "tf": 50
                }
              },
              "a": {
                "docs": {},
                "i": {
                  "docs": {},
                  "v": {
                    "docs": {
                      "Security.Entry.html#setNegative": {
                        "ref": "Security.Entry.html#setNegative",
                        "tf": 12.5
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "Application.html#name": {
                    "ref": "Application.html#name",
                    "tf": 775
                  },
                  "AbstractModel.html#hasChanged": {
                    "ref": "AbstractModel.html#hasChanged",
                    "tf": 4.166666666666666
                  },
                  "Security.Client.OAUTH2Client.html#authorize": {
                    "ref": "Security.Client.OAUTH2Client.html#authorize",
                    "tf": 50
                  }
                },
                "s": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "c": {
                        "docs": {
                          "list_namespace.html": {
                            "ref": "list_namespace.html",
                            "tf": 635
                          },
                          "module-Augmented-Logger.html": {
                            "ref": "module-Augmented-Logger.html",
                            "tf": 110
                          },
                          "module-Augmented-Security.html": {
                            "ref": "module-Augmented-Security.html",
                            "tf": 110
                          },
                          "Security.Client.html": {
                            "ref": "Security.Client.html",
                            "tf": 126.66666666666666
                          },
                          "Augmented.Utility.BundleObject.html": {
                            "ref": "Augmented.Utility.BundleObject.html",
                            "tf": 110
                          },
                          "Augmented.Utility.ResourceBundle.html": {
                            "ref": "Augmented.Utility.ResourceBundle.html",
                            "tf": 110
                          },
                          "Augmented.Utility.MessageReader.html": {
                            "ref": "Augmented.Utility.MessageReader.html",
                            "tf": 110
                          },
                          "Utility.html": {
                            "ref": "Utility.html",
                            "tf": 110
                          },
                          "Augmented.Utility.MessageKeyFormatter.html": {
                            "ref": "Augmented.Utility.MessageKeyFormatter.html",
                            "tf": 110
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "r": {
              "docs": {},
              "m": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "Application.html": {
                        "ref": "Application.html",
                        "tf": 2.631578947368421
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "f": {
                  "docs": {},
                  "y": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "g": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "y": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "n": {
                                    "docs": {
                                      "AbstractModel.html#set": {
                                        "ref": "AbstractModel.html#set",
                                        "tf": 2.631578947368421
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "p": {
                "docs": {},
                "i": {
                  "docs": {},
                  "f": {
                    "docs": {
                      "AbstractModel.html#unset": {
                        "ref": "AbstractModel.html#unset",
                        "tf": 5
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "m": {
              "docs": {
                "Utility.html#.formatBinary": {
                  "ref": "Utility.html#.formatBinary",
                  "tf": 25
                }
              },
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Utility.html#.formatBinary": {
                        "ref": "Utility.html#.formatBinary",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "r": {
          "docs": {},
          "e": {
            "docs": {
              "AbstractCollection.html#sort": {
                "ref": "AbstractCollection.html#sort",
                "tf": 2.941176470588235
              }
            },
            "a": {
              "docs": {},
              "d": {
                "docs": {
                  "Augmented.Utility.MessageReader.html": {
                    "ref": "Augmented.Utility.MessageReader.html",
                    "tf": 12.5
                  }
                },
                "m": {
                  "docs": {
                    "index.html": {
                      "ref": "index.html",
                      "tf": 110
                    }
                  }
                }
              },
              "l": {
                "docs": {
                  "Augmented.Utility.MessageReader.html#.getMessage": {
                    "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                    "tf": 2
                  }
                }
              }
            },
            "g": {
              "docs": {},
              "i": {
                "docs": {},
                "s": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Application.html#registerRouter": {
                        "ref": "Application.html#registerRouter",
                        "tf": 10
                      },
                      "ValidationFramework.html#registerSchema": {
                        "ref": "ValidationFramework.html#registerSchema",
                        "tf": 16.666666666666664
                      },
                      "Augmented.Utility.ResourceBundle.html#.getBundle": {
                        "ref": "Augmented.Utility.ResourceBundle.html#.getBundle",
                        "tf": 12.5
                      },
                      "Augmented.Utility.ResourceBundle.html#.getString": {
                        "ref": "Augmented.Utility.ResourceBundle.html#.getString",
                        "tf": 12.5
                      }
                    },
                    "e": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Application.html#registerRouter": {
                                    "ref": "Application.html#registerRouter",
                                    "tf": 700
                                  }
                                }
                              }
                            }
                          }
                        },
                        "s": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "h": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "a": {
                                    "docs": {
                                      "ValidationFramework.html#registerSchema": {
                                        "ref": "ValidationFramework.html#registerSchema",
                                        "tf": 683.3333333333334
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "r": {
                "docs": {},
                "e": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "Utility.AugmentedMap.html#toJSON": {
                        "ref": "Utility.AugmentedMap.html#toJSON",
                        "tf": 16.666666666666664
                      },
                      "Utility.AugmentedMap.html#toString": {
                        "ref": "Utility.AugmentedMap.html#toString",
                        "tf": 12.5
                      }
                    },
                    "e": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "AbstractCollection.html#toJSON": {
                              "ref": "AbstractCollection.html#toJSON",
                              "tf": 8.333333333333332
                            },
                            "AbstractModel.html#url": {
                              "ref": "AbstractModel.html#url",
                              "tf": 4.166666666666666
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "a": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "i": {
                            "docs": {
                              "Utility.html#.mergeSort": {
                                "ref": "Utility.html#.mergeSort",
                                "tf": 3.125
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "o": {
                "docs": {},
                "v": {
                  "docs": {
                    "AbstractCollection.html#remove": {
                      "ref": "AbstractCollection.html#remove",
                      "tf": 762.5
                    },
                    "AbstractCollection.html#reset": {
                      "ref": "AbstractCollection.html#reset",
                      "tf": 4.166666666666666
                    },
                    "AbstractCollection.html#pop": {
                      "ref": "AbstractCollection.html#pop",
                      "tf": 12.5
                    },
                    "AbstractCollection.html#shift": {
                      "ref": "AbstractCollection.html#shift",
                      "tf": 12.5
                    },
                    "CollectionIterator.html#next": {
                      "ref": "CollectionIterator.html#next",
                      "tf": 3.8461538461538463
                    },
                    "AbstractModel.html#unset": {
                      "ref": "AbstractModel.html#unset",
                      "tf": 5
                    },
                    "AbstractModel.html#destroy": {
                      "ref": "AbstractModel.html#destroy",
                      "tf": 5.88235294117647
                    },
                    "Security.Context.html#.Context#removePermission": {
                      "ref": "Security.Context.html#.Context#removePermission",
                      "tf": 12.5
                    },
                    "Security.Entry.html#removePermission": {
                      "ref": "Security.Entry.html#removePermission",
                      "tf": 25
                    },
                    "Utility.AugmentedMap.html#remove": {
                      "ref": "Utility.AugmentedMap.html#remove",
                      "tf": 662.5
                    },
                    "Utility.Stack.html#pop": {
                      "ref": "Utility.Stack.html#pop",
                      "tf": 8.333333333333332
                    },
                    "Augmented.Utility.MessageReader.html#.getMessage": {
                      "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                      "tf": 2
                    }
                  },
                  "e": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "s": {
                                  "docs": {
                                    "Security.Context.html#.Context#removePermission": {
                                      "ref": "Security.Context.html#.Context#removePermission",
                                      "tf": 87.5
                                    },
                                    "Security.Entry.html#removePermission": {
                                      "ref": "Security.Entry.html#removePermission",
                                      "tf": 650
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "e": {
                "docs": {},
                "t": {
                  "docs": {
                    "AbstractCollection.html#reset": {
                      "ref": "AbstractCollection.html#reset",
                      "tf": 754.1666666666666
                    },
                    "AbstractModel.html#reset": {
                      "ref": "AbstractModel.html#reset",
                      "tf": 708.3333333333334
                    }
                  }
                }
              },
              "p": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "s": {
                      "docs": {
                        "AbstractCollection.html#parse": {
                          "ref": "AbstractCollection.html#parse",
                          "tf": 4.545454545454546
                        },
                        "AbstractModel.html#fetch": {
                          "ref": "AbstractModel.html#fetch",
                          "tf": 4.166666666666666
                        },
                        "AbstractModel.html#parse": {
                          "ref": "AbstractModel.html#parse",
                          "tf": 7.6923076923076925
                        }
                      }
                    },
                    "d": {
                      "docs": {
                        "AbstractModel.html#destroy": {
                          "ref": "AbstractModel.html#destroy",
                          "tf": 2.941176470588235
                        }
                      }
                    }
                  }
                }
              },
              "t": {
                "docs": {
                  "AbstractModel.html#url": {
                    "ref": "AbstractModel.html#url",
                    "tf": 4.166666666666666
                  },
                  "AbstractModel.html#sync": {
                    "ref": "AbstractModel.html#sync",
                    "tf": 8.333333333333332
                  },
                  "Augmented.Utility.MessageKeyFormatter.html": {
                    "ref": "Augmented.Utility.MessageKeyFormatter.html",
                    "tf": 2.7777777777777777
                  }
                }
              },
              "o": {
                "docs": {},
                "u": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "c": {
                      "docs": {
                        "Security.Entry.html": {
                          "ref": "Security.Entry.html",
                          "tf": 10
                        }
                      },
                      "e": {
                        "docs": {},
                        "b": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "l": {
                                  "docs": {
                                    "Augmented.Utility.BundleObject.html": {
                                      "ref": "Augmented.Utility.BundleObject.html",
                                      "tf": 10
                                    },
                                    "Augmented.Utility.ResourceBundle.html": {
                                      "ref": "Augmented.Utility.ResourceBundle.html",
                                      "tf": 700
                                    },
                                    "Augmented.Utility.MessageReader.html#.getMessage": {
                                      "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                                      "tf": 2
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    ".": {
                                      "docs": {},
                                      "g": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "b": {
                                              "docs": {},
                                              "u": {
                                                "docs": {},
                                                "n": {
                                                  "docs": {},
                                                  "d": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {
                                                        "Augmented.Utility.ResourceBundle.html#.getBundle": {
                                                          "ref": "Augmented.Utility.ResourceBundle.html#.getBundle",
                                                          "tf": 75
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            },
                                            "s": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {
                                                    "Augmented.Utility.ResourceBundle.html#.getString": {
                                                      "ref": "Augmented.Utility.ResourceBundle.html#.getString",
                                                      "tf": 75
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "AbstractCollection.html#has": {
                        "ref": "AbstractCollection.html#has",
                        "tf": 12.5
                      },
                      "AbstractCollection.html#where": {
                        "ref": "AbstractCollection.html#where",
                        "tf": 6.25
                      },
                      "AbstractCollection.html#findWhere": {
                        "ref": "AbstractCollection.html#findWhere",
                        "tf": 5.555555555555555
                      },
                      "AbstractCollection.html#supportsValidation": {
                        "ref": "AbstractCollection.html#supportsValidation",
                        "tf": 8.333333333333332
                      },
                      "AbstractCollection.html#isValid": {
                        "ref": "AbstractCollection.html#isValid",
                        "tf": 10
                      },
                      "AbstractCollection.html#getValidationMessages": {
                        "ref": "AbstractCollection.html#getValidationMessages",
                        "tf": 12.5
                      },
                      "AbstractCollection.html#isEmpty": {
                        "ref": "AbstractCollection.html#isEmpty",
                        "tf": 10
                      },
                      "AbstractCollection.html#size": {
                        "ref": "AbstractCollection.html#size",
                        "tf": 12.5
                      },
                      "AbstractCollection.html#toString": {
                        "ref": "AbstractCollection.html#toString",
                        "tf": 10
                      },
                      "CollectionIterator.html#next": {
                        "ref": "CollectionIterator.html#next",
                        "tf": 3.8461538461538463
                      },
                      "AbstractModel.html#save": {
                        "ref": "AbstractModel.html#save",
                        "tf": 3.3333333333333335
                      },
                      "AbstractModel.html#changedAttributes": {
                        "ref": "AbstractModel.html#changedAttributes",
                        "tf": 1.6666666666666667
                      },
                      "AbstractModel.html#supportsValidation": {
                        "ref": "AbstractModel.html#supportsValidation",
                        "tf": 8.333333333333332
                      },
                      "AbstractModel.html#isValid": {
                        "ref": "AbstractModel.html#isValid",
                        "tf": 4.166666666666666
                      },
                      "AbstractModel.html#isEmpty": {
                        "ref": "AbstractModel.html#isEmpty",
                        "tf": 10
                      },
                      "AbstractModel.html#toString": {
                        "ref": "AbstractModel.html#toString",
                        "tf": 10
                      },
                      "Security.AuthenticationFactory.html": {
                        "ref": "Security.AuthenticationFactory.html",
                        "tf": 6.25
                      },
                      "Security.Entry.html#hasPermission": {
                        "ref": "Security.Entry.html#hasPermission",
                        "tf": 16.666666666666664
                      },
                      "Utility.AugmentedMap.html#has": {
                        "ref": "Utility.AugmentedMap.html#has",
                        "tf": 10
                      },
                      "Utility.Stack.html#peek": {
                        "ref": "Utility.Stack.html#peek",
                        "tf": 10
                      },
                      "Utility.Stack.html#pop": {
                        "ref": "Utility.Stack.html#pop",
                        "tf": 8.333333333333332
                      },
                      "Utility.Stack.html#search": {
                        "ref": "Utility.Stack.html#search",
                        "tf": 8.333333333333332
                      },
                      "Utility.Stack.html#size": {
                        "ref": "Utility.Stack.html#size",
                        "tf": 10
                      },
                      "Utility.Stack.html#toArray": {
                        "ref": "Utility.Stack.html#toArray",
                        "tf": 10
                      },
                      "Utility.Stack.html#toString": {
                        "ref": "Utility.Stack.html#toString",
                        "tf": 10
                      },
                      "ValidationFramework.html#supportsValidation": {
                        "ref": "ValidationFramework.html#supportsValidation",
                        "tf": 12.5
                      },
                      "Augmented.Utility.MessageReader.html#.getMessage": {
                        "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                        "tf": 2
                      },
                      "Augmented.Utility.MessageKeyFormatter.html": {
                        "ref": "Augmented.Utility.MessageKeyFormatter.html",
                        "tf": 2.7777777777777777
                      }
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "CollectionIterator.html#next": {
                      "ref": "CollectionIterator.html#next",
                      "tf": 3.8461538461538463
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "AbstractModel.html#previous": {
                        "ref": "AbstractModel.html#previous",
                        "tf": 6.25
                      }
                    }
                  }
                }
              },
              "u": {
                "docs": {},
                "r": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "Utility.html#.mergeSort": {
                        "ref": "Utility.html#.mergeSort",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            },
            "w": {
              "docs": {},
              "r": {
                "docs": {},
                "i": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "AbstractModel.html#reset": {
                        "ref": "AbstractModel.html#reset",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "u": {
              "docs": {},
              "t": {
                "docs": {
                  "Application.html#registerRouter": {
                    "ref": "Application.html#registerRouter",
                    "tf": 10
                  }
                },
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Application.html#router": {
                        "ref": "Application.html#router",
                        "tf": 766.6666666666666
                      },
                      "Application.html#registerRouter": {
                        "ref": "Application.html#registerRouter",
                        "tf": 60
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "e": {
                "docs": {},
                "/": {
                  "docs": {},
                  "p": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "v": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "g": {
                                  "docs": {
                                    "Security.Client.ACLClient.html": {
                                      "ref": "Security.Client.ACLClient.html",
                                      "tf": 16.666666666666664
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "w": {
              "docs": {
                "AbstractCollection.html#add": {
                  "ref": "AbstractCollection.html#add",
                  "tf": 3.571428571428571
                }
              }
            }
          }
        },
        "s": {
          "docs": {},
          "i": {
            "docs": {},
            "m": {
              "docs": {},
              "p": {
                "docs": {},
                "l": {
                  "docs": {
                    "AbstractCollection.html#where": {
                      "ref": "AbstractCollection.html#where",
                      "tf": 6.25
                    },
                    "AbstractCollection.html#findWhere": {
                      "ref": "AbstractCollection.html#findWhere",
                      "tf": 5.555555555555555
                    },
                    "Utility.html#.mergeSort": {
                      "ref": "Utility.html#.mergeSort",
                      "tf": 3.125
                    }
                  },
                  "i": {
                    "docs": {
                      "index.html": {
                        "ref": "index.html",
                        "tf": 17.5
                      }
                    }
                  }
                }
              },
              "i": {
                "docs": {},
                "l": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "AbstractCollection.html#set": {
                          "ref": "AbstractCollection.html#set",
                          "tf": 1.8518518518518516
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "g": {
                "docs": {},
                "l": {
                  "docs": {
                    "Application.html": {
                      "ref": "Application.html",
                      "tf": 2.631578947368421
                    }
                  }
                }
              }
            },
            "z": {
              "docs": {},
              "e": {
                "docs": {
                  "AbstractCollection.html#size": {
                    "ref": "AbstractCollection.html#size",
                    "tf": 762.5
                  },
                  "Utility.AugmentedMap.html#size": {
                    "ref": "Utility.AugmentedMap.html#size",
                    "tf": 716.6666666666666
                  },
                  "Utility.Stack.html#size": {
                    "ref": "Utility.Stack.html#size",
                    "tf": 720
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            "a": {
              "docs": {},
              "r": {
                "docs": {},
                "t": {
                  "docs": {
                    "Application.html#started": {
                      "ref": "Application.html#started",
                      "tf": 766.6666666666666
                    },
                    "Application.html#start": {
                      "ref": "Application.html#start",
                      "tf": 762.5
                    }
                  },
                  "u": {
                    "docs": {},
                    "p": {
                      "docs": {
                        "Application.html": {
                          "ref": "Application.html",
                          "tf": 2.631578947368421
                        },
                        "Application.html#initialize": {
                          "ref": "Application.html#initialize",
                          "tf": 12.5
                        },
                        "Application.html#beforeInitialize": {
                          "ref": "Application.html#beforeInitialize",
                          "tf": 12.5
                        },
                        "Application.html#afterInitialize": {
                          "ref": "Application.html#afterInitialize",
                          "tf": 16.666666666666664
                        }
                      }
                    }
                  }
                }
              },
              "t": {
                "docs": {},
                "e": {
                  "docs": {
                    "AbstractModel.html#set": {
                      "ref": "AbstractModel.html#set",
                      "tf": 2.631578947368421
                    }
                  }
                }
              },
              "c": {
                "docs": {},
                "k": {
                  "docs": {
                    "Utility.Stack.html": {
                      "ref": "Utility.Stack.html",
                      "tf": 660
                    },
                    "Utility.Stack.html#empty": {
                      "ref": "Utility.Stack.html#empty",
                      "tf": 12.5
                    },
                    "Utility.Stack.html#peek": {
                      "ref": "Utility.Stack.html#peek",
                      "tf": 10
                    },
                    "Utility.Stack.html#pop": {
                      "ref": "Utility.Stack.html#pop",
                      "tf": 8.333333333333332
                    },
                    "Utility.Stack.html#push": {
                      "ref": "Utility.Stack.html#push",
                      "tf": 12.5
                    },
                    "Utility.Stack.html#search": {
                      "ref": "Utility.Stack.html#search",
                      "tf": 8.333333333333332
                    },
                    "Utility.Stack.html#size": {
                      "ref": "Utility.Stack.html#size",
                      "tf": 10
                    },
                    "Utility.Stack.html#clear": {
                      "ref": "Utility.Stack.html#clear",
                      "tf": 12.5
                    },
                    "Utility.Stack.html#toArray": {
                      "ref": "Utility.Stack.html#toArray",
                      "tf": 10
                    },
                    "Utility.Stack.html#toString": {
                      "ref": "Utility.Stack.html#toString",
                      "tf": 10
                    }
                  },
                  "#": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "m": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "i": {
                              "docs": {
                                "Utility.Stack.html#empty": {
                                  "ref": "Utility.Stack.html#empty",
                                  "tf": 100
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "p": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "k": {
                            "docs": {
                              "Utility.Stack.html#peek": {
                                "ref": "Utility.Stack.html#peek",
                                "tf": 100
                              }
                            }
                          }
                        }
                      },
                      "o": {
                        "docs": {},
                        "p": {
                          "docs": {
                            "Utility.Stack.html#pop": {
                              "ref": "Utility.Stack.html#pop",
                              "tf": 100
                            }
                          }
                        }
                      },
                      "u": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "h": {
                            "docs": {
                              "Utility.Stack.html#push": {
                                "ref": "Utility.Stack.html#push",
                                "tf": 100
                              }
                            }
                          }
                        }
                      }
                    },
                    "s": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "h": {
                                "docs": {
                                  "Utility.Stack.html#search": {
                                    "ref": "Utility.Stack.html#search",
                                    "tf": 100
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "i": {
                        "docs": {},
                        "z": {
                          "docs": {
                            "Utility.Stack.html#size": {
                              "ref": "Utility.Stack.html#size",
                              "tf": 100
                            }
                          }
                        }
                      }
                    },
                    "c": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "r": {
                              "docs": {
                                "Utility.Stack.html#clear": {
                                  "ref": "Utility.Stack.html#clear",
                                  "tf": 100
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "t": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "y": {
                                  "docs": {
                                    "Utility.Stack.html#toArray": {
                                      "ref": "Utility.Stack.html#toArray",
                                      "tf": 100
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "s": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "r": {
                              "docs": {
                                "Utility.Stack.html#toString": {
                                  "ref": "Utility.Stack.html#toString",
                                  "tf": 100
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "n": {
                "docs": {},
                "d": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "d": {
                        "docs": {
                          "Utility.Stack.html": {
                            "ref": "Utility.Stack.html",
                            "tf": 10
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "p": {
                "docs": {
                  "Application.html#stop": {
                    "ref": "Application.html#stop",
                    "tf": 762.5
                  }
                }
              },
              "r": {
                "docs": {},
                "a": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "Security.Context.html": {
                        "ref": "Security.Context.html",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "AbstractCollection.html#toString": {
                        "ref": "AbstractCollection.html#toString",
                        "tf": 10
                      },
                      "AbstractModel.html#toString": {
                        "ref": "AbstractModel.html#toString",
                        "tf": 10
                      },
                      "Utility.AugmentedMap.html#toString": {
                        "ref": "Utility.AugmentedMap.html#toString",
                        "tf": 12.5
                      },
                      "Utility.Stack.html#toString": {
                        "ref": "Utility.Stack.html#toString",
                        "tf": 10
                      },
                      "Augmented.Utility.ResourceBundle.html#.getString": {
                        "ref": "Augmented.Utility.ResourceBundle.html#.getString",
                        "tf": 12.5
                      },
                      "Utility.html#.formatBinary": {
                        "ref": "Utility.html#.formatBinary",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              },
              "u": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "Utility.Stack.html": {
                            "ref": "Utility.Stack.html",
                            "tf": 10
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "p": {
                "docs": {
                  "Utility.html#.mergeSort": {
                    "ref": "Utility.html#.mergeSort",
                    "tf": 3.125
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {
                "Application.html#setMetadataItem": {
                  "ref": "Application.html#setMetadataItem",
                  "tf": 12.5
                },
                "AbstractCollection.html#add": {
                  "ref": "AbstractCollection.html#add",
                  "tf": 3.571428571428571
                },
                "AbstractCollection.html#remove": {
                  "ref": "AbstractCollection.html#remove",
                  "tf": 10
                },
                "AbstractCollection.html#set": {
                  "ref": "AbstractCollection.html#set",
                  "tf": 751.8518518518518
                },
                "AbstractCollection.html#reset": {
                  "ref": "AbstractCollection.html#reset",
                  "tf": 2.083333333333333
                },
                "AbstractCollection.html#get": {
                  "ref": "AbstractCollection.html#get",
                  "tf": 3.8461538461538463
                },
                "AbstractCollection.html#sort": {
                  "ref": "AbstractCollection.html#sort",
                  "tf": 2.941176470588235
                },
                "AbstractModel.html#set": {
                  "ref": "AbstractModel.html#set",
                  "tf": 752.6315789473684
                },
                "AbstractModel.html#save": {
                  "ref": "AbstractModel.html#save",
                  "tf": 6.666666666666667
                },
                "AbstractModel.html#parse": {
                  "ref": "AbstractModel.html#parse",
                  "tf": 3.8461538461538463
                },
                "AbstractModel.html#changedAttributes": {
                  "ref": "AbstractModel.html#changedAttributes",
                  "tf": 1.6666666666666667
                },
                "Security.Context.html#.Context#permissions": {
                  "ref": "Security.Context.html#.Context#permissions",
                  "tf": 12.5
                },
                "Security.Entry.html#permissions": {
                  "ref": "Security.Entry.html#permissions",
                  "tf": 25
                },
                "Security.Entry.html#setNegative": {
                  "ref": "Security.Entry.html#setNegative",
                  "tf": 12.5
                },
                "Utility.AugmentedMap.html#set": {
                  "ref": "Utility.AugmentedMap.html#set",
                  "tf": 645.8333333333334
                },
                "Utility.html#.formatBinary": {
                  "ref": "Utility.html#.formatBinary",
                  "tf": 8.333333333333332
                },
                "Utility.html#.SchemaGenerator": {
                  "ref": "Utility.html#.SchemaGenerator",
                  "tf": 12.5
                }
              },
              "m": {
                "docs": {},
                "e": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "m": {
                                      "docs": {
                                        "Application.html#setMetadataItem": {
                                          "ref": "Application.html#setMetadataItem",
                                          "tf": 683.3333333333334
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "p": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "Security.Context.html#.Context#permissions": {
                                "ref": "Security.Context.html#.Context#permissions",
                                "tf": 12.5
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "n": {
                "docs": {},
                "e": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "Security.Entry.html#setNegative": {
                        "ref": "Security.Entry.html#setNegative",
                        "tf": 650
                      }
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {
                    "AbstractCollection.html": {
                      "ref": "AbstractCollection.html",
                      "tf": 7.142857142857142
                    },
                    "AbstractModel.html": {
                      "ref": "AbstractModel.html",
                      "tf": 10
                    },
                    "AbstractSecurityClient.html": {
                      "ref": "AbstractSecurityClient.html",
                      "tf": 10
                    },
                    "Security.Client.ACLClient.html": {
                      "ref": "Security.Client.ACLClient.html",
                      "tf": 16.666666666666664
                    },
                    "Security.AuthenticationFactory.html": {
                      "ref": "Security.AuthenticationFactory.html",
                      "tf": 6.25
                    },
                    "Security.AuthenticationFactory.html#.getSecurityClient": {
                      "ref": "Security.AuthenticationFactory.html#.getSecurityClient",
                      "tf": 16.666666666666664
                    },
                    "Security.Context.html": {
                      "ref": "Security.Context.html",
                      "tf": 10
                    },
                    "Security.Entry.html": {
                      "ref": "Security.Entry.html",
                      "tf": 10
                    },
                    "Security.Principal.html": {
                      "ref": "Security.Principal.html",
                      "tf": 7.142857142857142
                    },
                    "module-Augmented-Security.html": {
                      "ref": "module-Augmented-Security.html",
                      "tf": 516.6666666666666
                    },
                    "Security.Client.html": {
                      "ref": "Security.Client.html",
                      "tf": 16.666666666666664
                    }
                  },
                  "i": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "y": {
                        "docs": {},
                        ".": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "i": {
                                "docs": {
                                  "Security.Client.html": {
                                    "ref": "Security.Client.html",
                                    "tf": 1150
                                  }
                                },
                                "e": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      ".": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "l": {
                                              "docs": {},
                                              "c": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {
                                                      "Security.Client.ACLClient.html": {
                                                        "ref": "Security.Client.ACLClient.html",
                                                        "tf": 1100
                                                      }
                                                    },
                                                    "e": {
                                                      "docs": {},
                                                      "n": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "#": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {},
                                                              "u": {
                                                                "docs": {},
                                                                "t": {
                                                                  "docs": {},
                                                                  "h": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "n": {
                                                                        "docs": {},
                                                                        "t": {
                                                                          "docs": {
                                                                            "Security.Client.ACLClient.html#authenticate": {
                                                                              "ref": "Security.Client.ACLClient.html#authenticate",
                                                                              "tf": 1075
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "o": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "u": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "h": {
                                                  "2": {
                                                    "docs": {},
                                                    "c": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {},
                                                        "i": {
                                                          "docs": {
                                                            "Security.Client.OAUTH2Client.html": {
                                                              "ref": "Security.Client.OAUTH2Client.html",
                                                              "tf": 1100
                                                            }
                                                          },
                                                          "e": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {},
                                                              "t": {
                                                                "docs": {},
                                                                "#": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "u": {
                                                                      "docs": {},
                                                                      "t": {
                                                                        "docs": {},
                                                                        "h": {
                                                                          "docs": {},
                                                                          "o": {
                                                                            "docs": {},
                                                                            "r": {
                                                                              "docs": {
                                                                                "Security.Client.OAUTH2Client.html#authorize": {
                                                                                  "ref": "Security.Client.OAUTH2Client.html#authorize",
                                                                                  "tf": 1075
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    },
                                                                    "c": {
                                                                      "docs": {},
                                                                      "c": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "s": {
                                                                            "docs": {},
                                                                            "s": {
                                                                              "docs": {
                                                                                "Security.Client.OAUTH2Client.html#access": {
                                                                                  "ref": "Security.Client.OAUTH2Client.html#access",
                                                                                  "tf": 1075
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "docs": {}
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "x": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "Security.Context.html": {
                                            "ref": "Security.Context.html",
                                            "tf": 1150
                                          }
                                        },
                                        ".": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "x": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "#": {
                                                          "docs": {},
                                                          "p": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              "i": {
                                                                "docs": {},
                                                                "n": {
                                                                  "docs": {},
                                                                  "c": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "p": {
                                                                        "docs": {
                                                                          "Security.Context.html#.Context#principal": {
                                                                            "ref": "Security.Context.html#.Context#principal",
                                                                            "tf": 1075
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            "e": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "m": {
                                                                  "docs": {},
                                                                  "i": {
                                                                    "docs": {},
                                                                    "s": {
                                                                      "docs": {},
                                                                      "s": {
                                                                        "docs": {
                                                                          "Security.Context.html#.Context#permissions": {
                                                                            "ref": "Security.Context.html#.Context#permissions",
                                                                            "tf": 1075
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "a": {
                                                            "docs": {},
                                                            "d": {
                                                              "docs": {},
                                                              "d": {
                                                                "docs": {},
                                                                "p": {
                                                                  "docs": {},
                                                                  "e": {
                                                                    "docs": {},
                                                                    "r": {
                                                                      "docs": {},
                                                                      "m": {
                                                                        "docs": {},
                                                                        "i": {
                                                                          "docs": {},
                                                                          "s": {
                                                                            "docs": {},
                                                                            "s": {
                                                                              "docs": {
                                                                                "Security.Context.html#.Context#addPermission": {
                                                                                  "ref": "Security.Context.html#.Context#addPermission",
                                                                                  "tf": 1075
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "r": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "m": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "v": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "p": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "r": {
                                                                            "docs": {},
                                                                            "m": {
                                                                              "docs": {},
                                                                              "i": {
                                                                                "docs": {},
                                                                                "s": {
                                                                                  "docs": {},
                                                                                  "s": {
                                                                                    "docs": {
                                                                                      "Security.Context.html#.Context#removePermission": {
                                                                                        "ref": "Security.Context.html#.Context#removePermission",
                                                                                        "tf": 1075
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          },
                                                          "h": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {},
                                                                "p": {
                                                                  "docs": {},
                                                                  "e": {
                                                                    "docs": {},
                                                                    "r": {
                                                                      "docs": {},
                                                                      "m": {
                                                                        "docs": {},
                                                                        "i": {
                                                                          "docs": {},
                                                                          "s": {
                                                                            "docs": {},
                                                                            "s": {
                                                                              "docs": {
                                                                                "Security.Context.html#.Context#hasPermission": {
                                                                                  "ref": "Security.Context.html#.Context#hasPermission",
                                                                                  "tf": 1075
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "a": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "h": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "c": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "n": {
                                                      "docs": {},
                                                      "f": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "c": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "o": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {},
                                                                  "i": {
                                                                    "docs": {
                                                                      "Security.AuthenticationFactory.html": {
                                                                        "ref": "Security.AuthenticationFactory.html",
                                                                        "tf": 1150
                                                                      }
                                                                    }
                                                                  },
                                                                  "y": {
                                                                    "docs": {},
                                                                    ".": {
                                                                      "docs": {},
                                                                      "g": {
                                                                        "docs": {},
                                                                        "e": {
                                                                          "docs": {},
                                                                          "t": {
                                                                            "docs": {},
                                                                            "s": {
                                                                              "docs": {},
                                                                              "e": {
                                                                                "docs": {},
                                                                                "c": {
                                                                                  "docs": {},
                                                                                  "u": {
                                                                                    "docs": {},
                                                                                    "r": {
                                                                                      "docs": {},
                                                                                      "i": {
                                                                                        "docs": {},
                                                                                        "t": {
                                                                                          "docs": {},
                                                                                          "y": {
                                                                                            "docs": {},
                                                                                            "c": {
                                                                                              "docs": {},
                                                                                              "l": {
                                                                                                "docs": {},
                                                                                                "i": {
                                                                                                  "docs": {
                                                                                                    "Security.AuthenticationFactory.html#.getSecurityClient": {
                                                                                                      "ref": "Security.AuthenticationFactory.html#.getSecurityClient",
                                                                                                      "tf": 1100
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "e": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "i": {
                                    "docs": {
                                      "Security.Entry.html": {
                                        "ref": "Security.Entry.html",
                                        "tf": 1150
                                      }
                                    }
                                  },
                                  "y": {
                                    "docs": {},
                                    "#": {
                                      "docs": {},
                                      "p": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "i": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {
                                                      "Security.Entry.html#permissions": {
                                                        "ref": "Security.Entry.html#permissions",
                                                        "tf": 1100
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "i": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "g": {
                                                "docs": {
                                                  "Security.Entry.html#isNegative": {
                                                    "ref": "Security.Entry.html#isNegative",
                                                    "tf": 1100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "a": {
                                        "docs": {},
                                        "d": {
                                          "docs": {},
                                          "d": {
                                            "docs": {},
                                            "p": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "m": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {
                                                            "Security.Entry.html#addPermission": {
                                                              "ref": "Security.Entry.html#addPermission",
                                                              "tf": 1100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "r": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "m": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "v": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "p": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "m": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {},
                                                            "s": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {
                                                                  "Security.Entry.html#removePermission": {
                                                                    "ref": "Security.Entry.html#removePermission",
                                                                    "tf": 1100
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "h": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "p": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "m": {
                                                    "docs": {},
                                                    "i": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {
                                                            "Security.Entry.html#hasPermission": {
                                                              "ref": "Security.Entry.html#hasPermission",
                                                              "tf": 1100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "s": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "g": {
                                                  "docs": {
                                                    "Security.Entry.html#setNegative": {
                                                      "ref": "Security.Entry.html#setNegative",
                                                      "tf": 1100
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "p": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "i": {
                                      "docs": {},
                                      "p": {
                                        "docs": {
                                          "Security.Principal.html": {
                                            "ref": "Security.Principal.html",
                                            "tf": 1150
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "v": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "AbstractCollection.html#create": {
                        "ref": "AbstractCollection.html#create",
                        "tf": 2.941176470588235
                      },
                      "AbstractModel.html#fetch": {
                        "ref": "AbstractModel.html#fetch",
                        "tf": 4.166666666666666
                      },
                      "AbstractModel.html#save": {
                        "ref": "AbstractModel.html#save",
                        "tf": 3.3333333333333335
                      },
                      "AbstractModel.html#destroy": {
                        "ref": "AbstractModel.html#destroy",
                        "tf": 5.88235294117647
                      },
                      "AbstractModel.html#url": {
                        "ref": "AbstractModel.html#url",
                        "tf": 4.166666666666666
                      },
                      "AbstractModel.html#isNew": {
                        "ref": "AbstractModel.html#isNew",
                        "tf": 7.142857142857142
                      },
                      "AbstractModel.html#changedAttributes": {
                        "ref": "AbstractModel.html#changedAttributes",
                        "tf": 1.6666666666666667
                      }
                    },
                    ".": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "f": {
                          "docs": {
                            "AbstractModel.html#save": {
                              "ref": "AbstractModel.html#save",
                              "tf": 3.3333333333333335
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "r": {
                "docs": {},
                "c": {
                  "docs": {},
                  "h": {
                    "docs": {
                      "Utility.Stack.html#search": {
                        "ref": "Utility.Stack.html#search",
                        "tf": 708.3333333333334
                      },
                      "Augmented.Utility.MessageReader.html#.getMessage": {
                        "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                        "tf": 2
                      }
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "i": {
                  "docs": {},
                  "f": {
                    "docs": {
                      "Application.html#setMetadataItem": {
                        "ref": "Application.html#setMetadataItem",
                        "tf": 12.5
                      },
                      "Application.html#getMetadataItem": {
                        "ref": "Application.html#getMetadataItem",
                        "tf": 16.666666666666664
                      }
                    },
                    "i": {
                      "docs": {
                        "AbstractModel.html#hasChanged": {
                          "ref": "AbstractModel.html#hasChanged",
                          "tf": 4.166666666666666
                        }
                      }
                    }
                  },
                  "a": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "AbstractModel.html#matches": {
                          "ref": "AbstractModel.html#matches",
                          "tf": 8.333333333333332
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "i": {
                "docs": {},
                "t": {
                  "docs": {
                    "Utility.html#.mergeSort": {
                      "ref": "Utility.html#.mergeSort",
                      "tf": 10
                    }
                  }
                }
              }
            }
          },
          "c": {
            "docs": {},
            "h": {
              "docs": {},
              "e": {
                "docs": {},
                "m": {
                  "docs": {},
                  "a": {
                    "docs": {
                      "AbstractCollection.html": {
                        "ref": "AbstractCollection.html",
                        "tf": 7.142857142857142
                      },
                      "AbstractModel.html": {
                        "ref": "AbstractModel.html",
                        "tf": 10
                      },
                      "AbstractModel.html#isValid": {
                        "ref": "AbstractModel.html#isValid",
                        "tf": 4.166666666666666
                      },
                      "ValidationFramework.html#registerSchema": {
                        "ref": "ValidationFramework.html#registerSchema",
                        "tf": 49.99999999999999
                      },
                      "ValidationFramework.html#getSchema": {
                        "ref": "ValidationFramework.html#getSchema",
                        "tf": 25
                      },
                      "ValidationFramework.html#getSchemas": {
                        "ref": "ValidationFramework.html#getSchemas",
                        "tf": 25
                      },
                      "ValidationFramework.html#clearSchemas": {
                        "ref": "ValidationFramework.html#clearSchemas",
                        "tf": 25
                      },
                      "ValidationFramework.html#validate": {
                        "ref": "ValidationFramework.html#validate",
                        "tf": 45.83333333333333
                      },
                      "ValidationFramework.html#getValidationMessages": {
                        "ref": "ValidationFramework.html#getValidationMessages",
                        "tf": 12.5
                      },
                      "ValidationFramework.html#generateSchema": {
                        "ref": "ValidationFramework.html#generateSchema",
                        "tf": 12.5
                      },
                      "Utility.html#.SchemaGenerator": {
                        "ref": "Utility.html#.SchemaGenerator",
                        "tf": 12.5
                      }
                    },
                    "g": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {
                                "Utility.html#.SchemaGenerator": {
                                  "ref": "Utility.html#.SchemaGenerator",
                                  "tf": 683.3333333333334
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "p": {
              "docs": {},
              "p": {
                "docs": {},
                "o": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "AbstractCollection.html": {
                          "ref": "AbstractCollection.html",
                          "tf": 7.142857142857142
                        },
                        "AbstractCollection.html#supportsValidation": {
                          "ref": "AbstractCollection.html#supportsValidation",
                          "tf": 8.333333333333332
                        },
                        "AbstractModel.html": {
                          "ref": "AbstractModel.html",
                          "tf": 10
                        },
                        "AbstractModel.html#supportsValidation": {
                          "ref": "AbstractModel.html#supportsValidation",
                          "tf": 8.333333333333332
                        },
                        "ValidationFramework.html#supportsValidation": {
                          "ref": "ValidationFramework.html#supportsValidation",
                          "tf": 12.5
                        }
                      },
                      "s": {
                        "docs": {},
                        "v": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "d": {
                                  "docs": {
                                    "AbstractCollection.html#supportsValidation": {
                                      "ref": "AbstractCollection.html#supportsValidation",
                                      "tf": 758.3333333333334
                                    },
                                    "AbstractModel.html#supportsValidation": {
                                      "ref": "AbstractModel.html#supportsValidation",
                                      "tf": 758.3333333333334
                                    },
                                    "ValidationFramework.html#supportsValidation": {
                                      "ref": "ValidationFramework.html#supportsValidation",
                                      "tf": 750
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "b": {
              "docs": {
                "AbstractCollection.html#slice": {
                  "ref": "AbstractCollection.html#slice",
                  "tf": 8.333333333333332
                }
              }
            },
            "c": {
              "docs": {},
              "h": {
                "docs": {
                  "Utility.html#.mergeSort": {
                    "ref": "Utility.html#.mergeSort",
                    "tf": 1.9230769230769231
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "i": {
              "docs": {},
              "f": {
                "docs": {},
                "t": {
                  "docs": {
                    "AbstractCollection.html#shift": {
                      "ref": "AbstractCollection.html#shift",
                      "tf": 750
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "i": {
              "docs": {},
              "c": {
                "docs": {},
                "e": {
                  "docs": {
                    "AbstractCollection.html#slice": {
                      "ref": "AbstractCollection.html#slice",
                      "tf": 758.3333333333334
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "r": {
              "docs": {},
              "t": {
                "docs": {
                  "AbstractCollection.html#sort": {
                    "ref": "AbstractCollection.html#sort",
                    "tf": 755.8823529411765
                  },
                  "AbstractCollection.html#sortByKey": {
                    "ref": "AbstractCollection.html#sortByKey",
                    "tf": 10
                  },
                  "Utility.html#.sortObjects": {
                    "ref": "Utility.html#.sortObjects",
                    "tf": 10
                  },
                  "Utility.html#.QuickSort": {
                    "ref": "Utility.html#.QuickSort",
                    "tf": 12.5
                  },
                  "Utility.html#.mergeSort": {
                    "ref": "Utility.html#.mergeSort",
                    "tf": 6.25
                  }
                },
                "b": {
                  "docs": {},
                  "y": {
                    "docs": {},
                    "k": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "y": {
                          "docs": {
                            "AbstractCollection.html#sortByKey": {
                              "ref": "AbstractCollection.html#sortByKey",
                              "tf": 710
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "o": {
                  "docs": {},
                  "b": {
                    "docs": {},
                    "j": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "Utility.html#.sortObjects": {
                                "ref": "Utility.html#.sortObjects",
                                "tf": 675
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "y": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {
                  "AbstractCollection.html#sync": {
                    "ref": "AbstractCollection.html#sync",
                    "tf": 750
                  },
                  "AbstractModel.html#save": {
                    "ref": "AbstractModel.html#save",
                    "tf": 3.3333333333333335
                  },
                  "AbstractModel.html#sync": {
                    "ref": "AbstractModel.html#sync",
                    "tf": 758.3333333333334
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "o": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "Utility.html#.TransformerType": {
                        "ref": "Utility.html#.TransformerType",
                        "tf": 33.33333333333333
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {
                  "AbstractCollection.html#save": {
                    "ref": "AbstractCollection.html#save",
                    "tf": 762.5
                  },
                  "AbstractModel.html#save": {
                    "ref": "AbstractModel.html#save",
                    "tf": 775
                  },
                  "AbstractModel.html#isNew": {
                    "ref": "AbstractModel.html#isNew",
                    "tf": 7.142857142857142
                  }
                }
              }
            }
          },
          "q": {
            "docs": {},
            "u": {
              "docs": {},
              "a": {
                "docs": {},
                "r": {
                  "docs": {
                    "Augmented.Utility.MessageReader.html#.getMessage": {
                      "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                      "tf": 2
                    }
                  }
                }
              }
            }
          },
          "m": {
            "docs": {},
            "a": {
              "docs": {},
              "l": {
                "docs": {},
                "l": {
                  "docs": {
                    "Utility.html": {
                      "ref": "Utility.html",
                      "tf": 12.5
                    }
                  }
                }
              }
            }
          },
          "w": {
            "docs": {},
            "a": {
              "docs": {},
              "p": {
                "docs": {
                  "Utility.html#.mergeSort": {
                    "ref": "Utility.html#.mergeSort",
                    "tf": 3.125
                  }
                }
              }
            }
          }
        },
        "g": {
          "docs": {},
          "l": {
            "docs": {},
            "o": {
              "docs": {},
              "b": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "global.html": {
                        "ref": "global.html",
                        "tf": 2045
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {
                "Application.html#datastore": {
                  "ref": "Application.html#datastore",
                  "tf": 16.666666666666664
                },
                "AbstractModel.html#getValidationMessages": {
                  "ref": "AbstractModel.html#getValidationMessages",
                  "tf": 12.5
                },
                "Security.Entry.html#permissions": {
                  "ref": "Security.Entry.html#permissions",
                  "tf": 25
                },
                "ValidationFramework.html#getSchema": {
                  "ref": "ValidationFramework.html#getSchema",
                  "tf": 25
                },
                "ValidationFramework.html#getSchemas": {
                  "ref": "ValidationFramework.html#getSchemas",
                  "tf": 25
                },
                "Augmented.Utility.ResourceBundle.html#.getBundle": {
                  "ref": "Augmented.Utility.ResourceBundle.html#.getBundle",
                  "tf": 12.5
                },
                "Augmented.Utility.ResourceBundle.html#.getString": {
                  "ref": "Augmented.Utility.ResourceBundle.html#.getString",
                  "tf": 12.5
                }
              },
              "m": {
                "docs": {},
                "e": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "m": {
                                      "docs": {
                                        "Application.html#getMetadataItem": {
                                          "ref": "Application.html#getMetadataItem",
                                          "tf": 700
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "s": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "g": {
                          "docs": {
                            "Augmented.Utility.MessageReader.html#.getMessage": {
                              "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                              "tf": 610.3333333333334
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "v": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "g": {
                                              "docs": {
                                                "AbstractCollection.html#getValidationMessages": {
                                                  "ref": "AbstractCollection.html#getValidationMessages",
                                                  "tf": 762.5
                                                },
                                                "AbstractModel.html#getValidationMessages": {
                                                  "ref": "AbstractModel.html#getValidationMessages",
                                                  "tf": 750
                                                },
                                                "ValidationFramework.html#getValidationMessages": {
                                                  "ref": "ValidationFramework.html#getValidationMessages",
                                                  "tf": 750
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "l": {
                "docs": {},
                "o": {
                  "docs": {},
                  "g": {
                    "docs": {},
                    "g": {
                      "docs": {
                        "Logger.LoggerFactory.html#.getLogger": {
                          "ref": "Logger.LoggerFactory.html#.getLogger",
                          "tf": 641.6666666666666
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "e": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "y": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "i": {
                                    "docs": {
                                      "Security.AuthenticationFactory.html#.getSecurityClient": {
                                        "ref": "Security.AuthenticationFactory.html#.getSecurityClient",
                                        "tf": 633.3333333333334
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "c": {
                  "docs": {},
                  "h": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "m": {
                        "docs": {},
                        "a": {
                          "docs": {
                            "ValidationFramework.html#getSchema": {
                              "ref": "ValidationFramework.html#getSchema",
                              "tf": 700
                            },
                            "ValidationFramework.html#getSchemas": {
                              "ref": "ValidationFramework.html#getSchemas",
                              "tf": 750
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "t": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Augmented.Utility.ResourceBundle.html#.getString": {
                        "ref": "Augmented.Utility.ResourceBundle.html#.getString",
                        "tf": 625
                      }
                    }
                  }
                }
              },
              "p": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "p": {
                            "docs": {
                              "Security.Context.html#.Context#principal": {
                                "ref": "Security.Context.html#.Context#principal",
                                "tf": 16.666666666666664
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "Security.Context.html#.Context#permissions": {
                                "ref": "Security.Context.html#.Context#permissions",
                                "tf": 16.666666666666664
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "b": {
                "docs": {},
                "u": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "l": {
                        "docs": {
                          "Augmented.Utility.ResourceBundle.html#.getBundle": {
                            "ref": "Augmented.Utility.ResourceBundle.html#.getBundle",
                            "tf": 608.3333333333334
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "h": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "a": {
                                    "docs": {
                                      "ValidationFramework.html#generateSchema": {
                                        "ref": "ValidationFramework.html#generateSchema",
                                        "tf": 700
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "a": {
              "docs": {},
              "n": {
                "docs": {},
                "u": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "AbstractCollection.html#reset": {
                            "ref": "AbstractCollection.html#reset",
                            "tf": 2.083333333333333
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {
                    "AbstractCollection.html#at": {
                      "ref": "AbstractCollection.html#at",
                      "tf": 16.666666666666664
                    },
                    "Security.AuthenticationFactory.html": {
                      "ref": "Security.AuthenticationFactory.html",
                      "tf": 6.25
                    }
                  }
                }
              }
            }
          }
        },
        "c": {
          "docs": {},
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "s": {
                "docs": {},
                "s": {
                  "docs": {
                    "list_class.html": {
                      "ref": "list_class.html",
                      "tf": 635
                    },
                    "Application.html": {
                      "ref": "Application.html",
                      "tf": 112.63157894736842
                    },
                    "AbstractCollection.html": {
                      "ref": "AbstractCollection.html",
                      "tf": 110
                    },
                    "CollectionIterator.html": {
                      "ref": "CollectionIterator.html",
                      "tf": 110
                    },
                    "Logger.AbstractLogger.html": {
                      "ref": "Logger.AbstractLogger.html",
                      "tf": 110
                    },
                    "Logger.ColorConsoleLogger.html": {
                      "ref": "Logger.ColorConsoleLogger.html",
                      "tf": 110
                    },
                    "Logger.ConsoleLogger.html": {
                      "ref": "Logger.ConsoleLogger.html",
                      "tf": 110
                    },
                    "Logger.LoggerFactory.html": {
                      "ref": "Logger.LoggerFactory.html",
                      "tf": 110
                    },
                    "AbstractModel.html": {
                      "ref": "AbstractModel.html",
                      "tf": 110
                    },
                    "Object.html": {
                      "ref": "Object.html",
                      "tf": 130
                    },
                    "AbstractSecurityClient.html": {
                      "ref": "AbstractSecurityClient.html",
                      "tf": 110
                    },
                    "Security.Client.ACLClient.html": {
                      "ref": "Security.Client.ACLClient.html",
                      "tf": 110
                    },
                    "Security.AuthenticationFactory.html": {
                      "ref": "Security.AuthenticationFactory.html",
                      "tf": 116.25
                    },
                    "Security.Context.html": {
                      "ref": "Security.Context.html",
                      "tf": 120
                    },
                    "Security.Entry.html": {
                      "ref": "Security.Entry.html",
                      "tf": 110
                    },
                    "Security.Client.OAUTH2Client.html": {
                      "ref": "Security.Client.OAUTH2Client.html",
                      "tf": 110
                    },
                    "Security.Principal.html": {
                      "ref": "Security.Principal.html",
                      "tf": 110
                    },
                    "Utility.AugmentedMap.html": {
                      "ref": "Utility.AugmentedMap.html",
                      "tf": 110
                    },
                    "Utility.AsynchronousQueue.html": {
                      "ref": "Utility.AsynchronousQueue.html",
                      "tf": 110
                    },
                    "Utility.Stack.html": {
                      "ref": "Utility.Stack.html",
                      "tf": 110
                    },
                    "Utility.exports.Transformer.html": {
                      "ref": "Utility.exports.Transformer.html",
                      "tf": 110
                    },
                    "ValidationFramework.html": {
                      "ref": "ValidationFramework.html",
                      "tf": 110
                    }
                  },
                  ".": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "v": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "d": {
                                "docs": {
                                  "ValidationFramework.html": {
                                    "ref": "ValidationFramework.html",
                                    "tf": 4.545454545454546
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "n": {
                "docs": {},
                "e": {
                  "docs": {
                    "AbstractCollection.html#clone": {
                      "ref": "AbstractCollection.html#clone",
                      "tf": 750
                    },
                    "AbstractModel.html#clone": {
                      "ref": "AbstractModel.html#clone",
                      "tf": 750
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "a": {
                "docs": {},
                "r": {
                  "docs": {
                    "AbstractModel.html#clear": {
                      "ref": "AbstractModel.html#clear",
                      "tf": 760
                    },
                    "AbstractModel.html#reset": {
                      "ref": "AbstractModel.html#reset",
                      "tf": 8.333333333333332
                    },
                    "Utility.AugmentedMap.html#clear": {
                      "ref": "Utility.AugmentedMap.html#clear",
                      "tf": 725
                    },
                    "Utility.AsynchronousQueue.html#clear": {
                      "ref": "Utility.AsynchronousQueue.html#clear",
                      "tf": 716.6666666666666
                    },
                    "Utility.Stack.html#empty": {
                      "ref": "Utility.Stack.html#empty",
                      "tf": 12.5
                    },
                    "Utility.Stack.html#clear": {
                      "ref": "Utility.Stack.html#clear",
                      "tf": 725
                    },
                    "ValidationFramework.html#clearSchemas": {
                      "ref": "ValidationFramework.html#clearSchemas",
                      "tf": 25
                    }
                  },
                  "s": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "h": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "a": {
                              "docs": {
                                "ValidationFramework.html#clearSchemas": {
                                  "ref": "ValidationFramework.html#clearSchemas",
                                  "tf": 750
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "AbstractSecurityClient.html": {
                        "ref": "AbstractSecurityClient.html",
                        "tf": 10
                      },
                      "Security.AuthenticationFactory.html": {
                        "ref": "Security.AuthenticationFactory.html",
                        "tf": 6.25
                      },
                      "Security.AuthenticationFactory.html#.getSecurityClient": {
                        "ref": "Security.AuthenticationFactory.html#.getSecurityClient",
                        "tf": 16.666666666666664
                      },
                      "Security.Client.OAUTH2Client.html": {
                        "ref": "Security.Client.OAUTH2Client.html",
                        "tf": 25
                      },
                      "Security.Client.html": {
                        "ref": "Security.Client.html",
                        "tf": 766.6666666666666
                      }
                    },
                    ".": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "l": {
                                "docs": {},
                                "i": {
                                  "docs": {
                                    "Security.Client.ACLClient.html": {
                                      "ref": "Security.Client.ACLClient.html",
                                      "tf": 200
                                    }
                                  },
                                  "e": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "#": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "u": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "h": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "n": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {
                                                          "Security.Client.ACLClient.html#authenticate": {
                                                            "ref": "Security.Client.ACLClient.html#authenticate",
                                                            "tf": 75
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "o": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "h": {
                                "2": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "i": {
                                        "docs": {
                                          "Security.Client.OAUTH2Client.html": {
                                            "ref": "Security.Client.OAUTH2Client.html",
                                            "tf": 200
                                          }
                                        },
                                        "e": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "t": {
                                              "docs": {},
                                              "#": {
                                                "docs": {},
                                                "a": {
                                                  "docs": {},
                                                  "u": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "h": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {
                                                              "Security.Client.OAUTH2Client.html#authorize": {
                                                                "ref": "Security.Client.OAUTH2Client.html#authorize",
                                                                "tf": 75
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "c": {
                                                    "docs": {},
                                                    "c": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "s": {
                                                            "docs": {
                                                              "Security.Client.OAUTH2Client.html#access": {
                                                                "ref": "Security.Client.OAUTH2Client.html#access",
                                                                "tf": 75
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                },
                                "docs": {}
                              }
                            }
                          }
                        }
                      }
                    },
                    "t": {
                      "docs": {},
                      "y": {
                        "docs": {},
                        "p": {
                          "docs": {
                            "Security.AuthenticationFactory.html#.getSecurityClient": {
                              "ref": "Security.AuthenticationFactory.html#.getSecurityClient",
                              "tf": 33.33333333333333
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "n": {
              "docs": {},
              "t": {
                "docs": {},
                "a": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "Application.html": {
                          "ref": "Application.html",
                          "tf": 5.263157894736842
                        },
                        "AbstractCollection.html#set": {
                          "ref": "AbstractCollection.html#set",
                          "tf": 1.8518518518518516
                        },
                        "AbstractModel.html#changedAttributes": {
                          "ref": "AbstractModel.html#changedAttributes",
                          "tf": 1.6666666666666667
                        }
                      }
                    }
                  }
                },
                "e": {
                  "docs": {},
                  "x": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Security.Context.html": {
                          "ref": "Security.Context.html",
                          "tf": 750
                        },
                        "Security.Context.html#.Context#principal": {
                          "ref": "Security.Context.html#.Context#principal",
                          "tf": 16.666666666666664
                        }
                      },
                      "#": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "p": {
                                      "docs": {
                                        "Security.Context.html#.Context#principal": {
                                          "ref": "Security.Context.html#.Context#principal",
                                          "tf": 625
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "m": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "s": {
                                      "docs": {
                                        "Security.Context.html#.Context#permissions": {
                                          "ref": "Security.Context.html#.Context#permissions",
                                          "tf": 625
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "a": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "d": {
                              "docs": {},
                              "p": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "s": {
                                            "docs": {
                                              "Security.Context.html#.Context#addPermission": {
                                                "ref": "Security.Context.html#.Context#addPermission",
                                                "tf": 608.3333333333334
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "m": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "v": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "p": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "r": {
                                          "docs": {},
                                          "m": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {
                                                    "Security.Context.html#.Context#removePermission": {
                                                      "ref": "Security.Context.html#.Context#removePermission",
                                                      "tf": 608.3333333333334
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "h": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "p": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "s": {
                                            "docs": {
                                              "Security.Context.html#.Context#hasPermission": {
                                                "ref": "Security.Context.html#.Context#hasPermission",
                                                "tf": 608.3333333333334
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      ".": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "x": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "#": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "i": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "c": {
                                                  "docs": {},
                                                  "i": {
                                                    "docs": {},
                                                    "p": {
                                                      "docs": {
                                                        "Security.Context.html#.Context#principal": {
                                                          "ref": "Security.Context.html#.Context#principal",
                                                          "tf": 75
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "e": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "m": {
                                                "docs": {},
                                                "i": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {},
                                                    "s": {
                                                      "docs": {
                                                        "Security.Context.html#.Context#permissions": {
                                                          "ref": "Security.Context.html#.Context#permissions",
                                                          "tf": 75
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "a": {
                                          "docs": {},
                                          "d": {
                                            "docs": {},
                                            "d": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "m": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "s": {
                                                            "docs": {
                                                              "Security.Context.html#.Context#addPermission": {
                                                                "ref": "Security.Context.html#.Context#addPermission",
                                                                "tf": 75
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "r": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "m": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "v": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "p": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "m": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {},
                                                                "s": {
                                                                  "docs": {
                                                                    "Security.Context.html#.Context#removePermission": {
                                                                      "ref": "Security.Context.html#.Context#removePermission",
                                                                      "tf": 75
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "h": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "s": {
                                              "docs": {},
                                              "p": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {},
                                                    "m": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "s": {
                                                            "docs": {
                                                              "Security.Context.html#.Context#hasPermission": {
                                                                "ref": "Security.Context.html#.Context#hasPermission",
                                                                "tf": 75
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "v": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "AbstractCollection.html#add": {
                          "ref": "AbstractCollection.html#add",
                          "tf": 3.571428571428571
                        },
                        "AbstractCollection.html#parse": {
                          "ref": "AbstractCollection.html#parse",
                          "tf": 4.545454545454546
                        },
                        "AbstractModel.html#parse": {
                          "ref": "AbstractModel.html#parse",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "o": {
                  "docs": {},
                  "l": {
                    "docs": {
                      "Logger.ColorConsoleLogger.html": {
                        "ref": "Logger.ColorConsoleLogger.html",
                        "tf": 16.666666666666664
                      },
                      "Logger.ConsoleLogger.html": {
                        "ref": "Logger.ConsoleLogger.html",
                        "tf": 25
                      }
                    },
                    "e": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "g": {
                              "docs": {
                                "Logger.ConsoleLogger.html": {
                                  "ref": "Logger.ConsoleLogger.html",
                                  "tf": 750
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "f": {
                "docs": {},
                "i": {
                  "docs": {},
                  "g": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "Augmented.Utility.BundleObject.html": {
                            "ref": "Augmented.Utility.BundleObject.html",
                            "tf": 10
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "l": {
                "docs": {},
                "e": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "AbstractCollection.html": {
                          "ref": "AbstractCollection.html",
                          "tf": 7.142857142857142
                        },
                        "AbstractCollection.html#toJSON": {
                          "ref": "AbstractCollection.html#toJSON",
                          "tf": 8.333333333333332
                        },
                        "AbstractCollection.html#set": {
                          "ref": "AbstractCollection.html#set",
                          "tf": 5.555555555555555
                        },
                        "AbstractCollection.html#push": {
                          "ref": "AbstractCollection.html#push",
                          "tf": 12.5
                        },
                        "AbstractCollection.html#pop": {
                          "ref": "AbstractCollection.html#pop",
                          "tf": 12.5
                        },
                        "AbstractCollection.html#unshift": {
                          "ref": "AbstractCollection.html#unshift",
                          "tf": 12.5
                        },
                        "AbstractCollection.html#shift": {
                          "ref": "AbstractCollection.html#shift",
                          "tf": 12.5
                        },
                        "AbstractCollection.html#slice": {
                          "ref": "AbstractCollection.html#slice",
                          "tf": 8.333333333333332
                        },
                        "AbstractCollection.html#has": {
                          "ref": "AbstractCollection.html#has",
                          "tf": 12.5
                        },
                        "AbstractCollection.html#sort": {
                          "ref": "AbstractCollection.html#sort",
                          "tf": 2.941176470588235
                        },
                        "AbstractCollection.html#pluck": {
                          "ref": "AbstractCollection.html#pluck",
                          "tf": 10
                        },
                        "AbstractCollection.html#fetch": {
                          "ref": "AbstractCollection.html#fetch",
                          "tf": 25
                        },
                        "AbstractCollection.html#create": {
                          "ref": "AbstractCollection.html#create",
                          "tf": 2.941176470588235
                        },
                        "AbstractCollection.html#clone": {
                          "ref": "AbstractCollection.html#clone",
                          "tf": 7.142857142857142
                        },
                        "AbstractCollection.html#modelId": {
                          "ref": "AbstractCollection.html#modelId",
                          "tf": 10
                        },
                        "AbstractCollection.html#values": {
                          "ref": "AbstractCollection.html#values",
                          "tf": 16.666666666666664
                        },
                        "AbstractCollection.html#keys": {
                          "ref": "AbstractCollection.html#keys",
                          "tf": 12.5
                        },
                        "AbstractCollection.html#entries": {
                          "ref": "AbstractCollection.html#entries",
                          "tf": 10
                        },
                        "AbstractCollection.html#supportsValidation": {
                          "ref": "AbstractCollection.html#supportsValidation",
                          "tf": 8.333333333333332
                        },
                        "AbstractCollection.html#isValid": {
                          "ref": "AbstractCollection.html#isValid",
                          "tf": 10
                        },
                        "AbstractCollection.html#validate": {
                          "ref": "AbstractCollection.html#validate",
                          "tf": 25
                        },
                        "AbstractCollection.html#save": {
                          "ref": "AbstractCollection.html#save",
                          "tf": 12.5
                        },
                        "AbstractCollection.html#update": {
                          "ref": "AbstractCollection.html#update",
                          "tf": 12.5
                        },
                        "AbstractCollection.html#remove": {
                          "ref": "AbstractCollection.html#remove",
                          "tf": 12.5
                        },
                        "AbstractCollection.html#sortByKey": {
                          "ref": "AbstractCollection.html#sortByKey",
                          "tf": 10
                        },
                        "AbstractCollection.html#isEmpty": {
                          "ref": "AbstractCollection.html#isEmpty",
                          "tf": 10
                        },
                        "AbstractCollection.html#size": {
                          "ref": "AbstractCollection.html#size",
                          "tf": 12.5
                        },
                        "AbstractCollection.html#toString": {
                          "ref": "AbstractCollection.html#toString",
                          "tf": 10
                        },
                        "CollectionIterator.html#next": {
                          "ref": "CollectionIterator.html#next",
                          "tf": 3.8461538461538463
                        },
                        "AbstractModel.html#destroy": {
                          "ref": "AbstractModel.html#destroy",
                          "tf": 2.941176470588235
                        }
                      },
                      "i": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            ".": {
                              "docs": {},
                              "s": {
                                "docs": {
                                  "AbstractCollection.html#size": {
                                    "ref": "AbstractCollection.html#size",
                                    "tf": 12.5
                                  }
                                },
                                "a": {
                                  "docs": {},
                                  "v": {
                                    "docs": {
                                      "AbstractCollection.html#save": {
                                        "ref": "AbstractCollection.html#save",
                                        "tf": 12.5
                                      }
                                    }
                                  }
                                }
                              },
                              "u": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "d": {
                                    "docs": {
                                      "AbstractCollection.html#update": {
                                        "ref": "AbstractCollection.html#update",
                                        "tf": 12.5
                                      }
                                    }
                                  }
                                }
                              },
                              "r": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "v": {
                                        "docs": {
                                          "AbstractCollection.html#remove": {
                                            "ref": "AbstractCollection.html#remove",
                                            "tf": 12.5
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "i": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "r": {
                                    "docs": {
                                      "CollectionIterator.html": {
                                        "ref": "CollectionIterator.html",
                                        "tf": 1902.6315789473683
                                      }
                                    },
                                    "a": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "#": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "e": {
                                                  "docs": {},
                                                  "x": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {
                                                        "CollectionIterator.html#next": {
                                                          "ref": "CollectionIterator.html#next",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "o": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "c": {
                                  "docs": {
                                    "CollectionIterator.html#next": {
                                      "ref": "CollectionIterator.html#next",
                                      "tf": 3.8461538461538463
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "i": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          ".": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "y": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "c": {
                                    "docs": {
                                      "AbstractCollection.html#sync": {
                                        "ref": "AbstractCollection.html#sync",
                                        "tf": 50
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "Logger.ColorConsoleLogger.html": {
                      "ref": "Logger.ColorConsoleLogger.html",
                      "tf": 16.666666666666664
                    }
                  },
                  "c": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "g": {
                                      "docs": {},
                                      "g": {
                                        "docs": {
                                          "Logger.ColorConsoleLogger.html": {
                                            "ref": "Logger.ColorConsoleLogger.html",
                                            "tf": 750
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {
                  "AbstractCollection.html#set": {
                    "ref": "AbstractCollection.html#set",
                    "tf": 1.8518518518518516
                  },
                  "AbstractModel.html#set": {
                    "ref": "AbstractModel.html#set",
                    "tf": 2.631578947368421
                  },
                  "module-Augmented.html": {
                    "ref": "module-Augmented.html",
                    "tf": 12.5
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "p": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "module-Augmented.html": {
                        "ref": "module-Augmented.html",
                        "tf": 12.5
                      }
                    }
                  }
                },
                "a": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Utility.html#.mergeSort": {
                        "ref": "Utility.html#.mergeSort",
                        "tf": 3.125
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "d": {
              "docs": {
                "AbstractCollection.html#get": {
                  "ref": "AbstractCollection.html#get",
                  "tf": 3.8461538461538463
                }
              },
              "p": {
                "docs": {},
                "r": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "i": {
                              "docs": {
                                "AbstractCollection.html#get": {
                                  "ref": "AbstractCollection.html#get",
                                  "tf": 3.8461538461538463
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "c": {
                "docs": {},
                "u": {
                  "docs": {},
                  "m": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "AbstractCollection.html#sort": {
                            "ref": "AbstractCollection.html#sort",
                            "tf": 2.941176470588235
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "e": {
                "docs": {
                  "AbstractCollection.html#where": {
                    "ref": "AbstractCollection.html#where",
                    "tf": 6.25
                  },
                  "AbstractCollection.html#create": {
                    "ref": "AbstractCollection.html#create",
                    "tf": 2.941176470588235
                  },
                  "AbstractModel.html#matches": {
                    "ref": "AbstractModel.html#matches",
                    "tf": 8.333333333333332
                  }
                },
                "s": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "f": {
                      "docs": {
                        "AbstractCollection.html#findWhere": {
                          "ref": "AbstractCollection.html#findWhere",
                          "tf": 5.555555555555555
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "l": {
                "docs": {
                  "AbstractCollection.html#sort": {
                    "ref": "AbstractCollection.html#sort",
                    "tf": 2.941176470588235
                  },
                  "AbstractModel.html#url": {
                    "ref": "AbstractModel.html#url",
                    "tf": 4.166666666666666
                  },
                  "AbstractModel.html#sync": {
                    "ref": "AbstractModel.html#sync",
                    "tf": 8.333333333333332
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "e": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "AbstractCollection.html#create": {
                      "ref": "AbstractCollection.html#create",
                      "tf": 752.9411764705883
                    },
                    "AbstractCollection.html#clone": {
                      "ref": "AbstractCollection.html#clone",
                      "tf": 7.142857142857142
                    },
                    "Logger.LoggerFactory.html": {
                      "ref": "Logger.LoggerFactory.html",
                      "tf": 10
                    },
                    "AbstractModel.html#clone": {
                      "ref": "AbstractModel.html#clone",
                      "tf": 8.333333333333332
                    },
                    "AbstractModel.html#save": {
                      "ref": "AbstractModel.html#save",
                      "tf": 12.5
                    }
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "a": {
              "docs": {},
              "n": {
                "docs": {},
                "g": {
                  "docs": {
                    "AbstractModel.html#set": {
                      "ref": "AbstractModel.html#set",
                      "tf": 2.631578947368421
                    },
                    "AbstractModel.html#fetch": {
                      "ref": "AbstractModel.html#fetch",
                      "tf": 4.166666666666666
                    },
                    "AbstractModel.html#url": {
                      "ref": "AbstractModel.html#url",
                      "tf": 4.166666666666666
                    },
                    "AbstractModel.html#hasChanged": {
                      "ref": "AbstractModel.html#hasChanged",
                      "tf": 8.333333333333332
                    },
                    "AbstractModel.html#changedAttributes": {
                      "ref": "AbstractModel.html#changedAttributes",
                      "tf": 5
                    }
                  },
                  "e": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "b": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "t": {
                                      "docs": {
                                        "AbstractModel.html#changedAttributes": {
                                          "ref": "AbstractModel.html#changedAttributes",
                                          "tf": 750
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "i": {
                "docs": {},
                "n": {
                  "docs": {
                    "Utility.AsynchronousQueue.html": {
                      "ref": "Utility.AsynchronousQueue.html",
                      "tf": 7.142857142857142
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "c": {
                "docs": {},
                "k": {
                  "docs": {
                    "Security.Context.html#.Context#hasPermission": {
                      "ref": "Security.Context.html#.Context#hasPermission",
                      "tf": 12.5
                    },
                    "Utility.AugmentedMap.html#isEmpty": {
                      "ref": "Utility.AugmentedMap.html#isEmpty",
                      "tf": 12.5
                    }
                  }
                }
              }
            }
          }
        },
        "l": {
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "list_class.html": {
                    "ref": "list_class.html",
                    "tf": 110
                  },
                  "list_module.html": {
                    "ref": "list_module.html",
                    "tf": 110
                  },
                  "list_namespace.html": {
                    "ref": "list_namespace.html",
                    "tf": 110
                  },
                  "AbstractCollection.html#add": {
                    "ref": "AbstractCollection.html#add",
                    "tf": 3.571428571428571
                  },
                  "AbstractCollection.html#remove": {
                    "ref": "AbstractCollection.html#remove",
                    "tf": 10
                  },
                  "AbstractCollection.html#set": {
                    "ref": "AbstractCollection.html#set",
                    "tf": 1.8518518518518516
                  },
                  "AbstractCollection.html#reset": {
                    "ref": "AbstractCollection.html#reset",
                    "tf": 2.083333333333333
                  },
                  "AbstractCollection.html#parse": {
                    "ref": "AbstractCollection.html#parse",
                    "tf": 4.545454545454546
                  },
                  "AbstractCollection.html#clone": {
                    "ref": "AbstractCollection.html#clone",
                    "tf": 7.142857142857142
                  },
                  "Utility.html#.mergeSort": {
                    "ref": "Utility.html#.mergeSort",
                    "tf": 3.125
                  }
                },
                ":": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "list_class.html": {
                                "ref": "list_class.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "m": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "l": {
                            "docs": {
                              "list_module.html": {
                                "ref": "list_module.html",
                                "tf": 1300
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "n": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "m": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "a": {
                                "docs": {},
                                "c": {
                                  "docs": {
                                    "list_namespace.html": {
                                      "ref": "list_namespace.html",
                                      "tf": 1300
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "b": {
              "docs": {},
              "r": {
                "docs": {},
                "a": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "ValidationFramework.html": {
                          "ref": "ValidationFramework.html",
                          "tf": 4.545454545454546
                        }
                      },
                      "e": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "w": {
                            "docs": {},
                            "h": {
                              "docs": {},
                              "i": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "h": {
                                    "docs": {
                                      "CollectionIterator.html": {
                                        "ref": "CollectionIterator.html",
                                        "tf": 2.631578947368421
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "n": {
              "docs": {},
              "g": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "AbstractCollection.html#set": {
                        "ref": "AbstractCollection.html#set",
                        "tf": 1.8518518518518516
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "p": {
                "docs": {
                  "CollectionIterator.html": {
                    "ref": "CollectionIterator.html",
                    "tf": 2.631578947368421
                  }
                }
              }
            },
            "g": {
              "docs": {
                "Logger.AbstractLogger.html#log": {
                  "ref": "Logger.AbstractLogger.html#log",
                  "tf": 658.3333333333334
                },
                "Logger.AbstractLogger.html#info": {
                  "ref": "Logger.AbstractLogger.html#info",
                  "tf": 12.5
                },
                "Logger.AbstractLogger.html#error": {
                  "ref": "Logger.AbstractLogger.html#error",
                  "tf": 12.5
                },
                "Logger.AbstractLogger.html#debug": {
                  "ref": "Logger.AbstractLogger.html#debug",
                  "tf": 12.5
                },
                "Logger.AbstractLogger.html#warn": {
                  "ref": "Logger.AbstractLogger.html#warn",
                  "tf": 12.5
                }
              },
              "g": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Logger.AbstractLogger.html": {
                        "ref": "Logger.AbstractLogger.html",
                        "tf": 16.666666666666664
                      },
                      "Logger.ColorConsoleLogger.html": {
                        "ref": "Logger.ColorConsoleLogger.html",
                        "tf": 16.666666666666664
                      },
                      "Logger.ConsoleLogger.html": {
                        "ref": "Logger.ConsoleLogger.html",
                        "tf": 25
                      },
                      "Logger.LoggerFactory.html": {
                        "ref": "Logger.LoggerFactory.html",
                        "tf": 20
                      },
                      "Logger.LoggerFactory.html#.getLogger": {
                        "ref": "Logger.LoggerFactory.html#.getLogger",
                        "tf": 16.666666666666664
                      },
                      "module-Augmented-Logger.html": {
                        "ref": "module-Augmented-Logger.html",
                        "tf": 525
                      }
                    },
                    ".": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "b": {
                          "docs": {},
                          "s": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "c": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "g": {
                                            "docs": {},
                                            "g": {
                                              "docs": {
                                                "Logger.AbstractLogger.html": {
                                                  "ref": "Logger.AbstractLogger.html",
                                                  "tf": 1150
                                                }
                                              },
                                              "e": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "#": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "g": {
                                                          "docs": {
                                                            "Logger.AbstractLogger.html#log": {
                                                              "ref": "Logger.AbstractLogger.html#log",
                                                              "tf": 1100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "i": {
                                                      "docs": {},
                                                      "n": {
                                                        "docs": {},
                                                        "f": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {
                                                              "Logger.AbstractLogger.html#info": {
                                                                "ref": "Logger.AbstractLogger.html#info",
                                                                "tf": 1100
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "e": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {
                                                                "Logger.AbstractLogger.html#error": {
                                                                  "ref": "Logger.AbstractLogger.html#error",
                                                                  "tf": 1100
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "d": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "b": {
                                                          "docs": {},
                                                          "u": {
                                                            "docs": {},
                                                            "g": {
                                                              "docs": {
                                                                "Logger.AbstractLogger.html#debug": {
                                                                  "ref": "Logger.AbstractLogger.html#debug",
                                                                  "tf": 1100
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "w": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "n": {
                                                            "docs": {
                                                              "Logger.AbstractLogger.html#warn": {
                                                                "ref": "Logger.AbstractLogger.html#warn",
                                                                "tf": 1100
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "c": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "o": {
                                    "docs": {},
                                    "n": {
                                      "docs": {},
                                      "s": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "l": {
                                                "docs": {},
                                                "o": {
                                                  "docs": {},
                                                  "g": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {
                                                        "Logger.ColorConsoleLogger.html": {
                                                          "ref": "Logger.ColorConsoleLogger.html",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "n": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "l": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "g": {
                                          "docs": {},
                                          "g": {
                                            "docs": {
                                              "Logger.ConsoleLogger.html": {
                                                "ref": "Logger.ConsoleLogger.html",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "l": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "f": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "i": {
                                                "docs": {
                                                  "Logger.LoggerFactory.html": {
                                                    "ref": "Logger.LoggerFactory.html",
                                                    "tf": 1150
                                                  }
                                                }
                                              },
                                              "y": {
                                                "docs": {},
                                                ".": {
                                                  "docs": {},
                                                  "g": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "l": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "g": {
                                                              "docs": {},
                                                              "g": {
                                                                "docs": {
                                                                  "Logger.LoggerFactory.html#.getLogger": {
                                                                    "ref": "Logger.LoggerFactory.html#.getLogger",
                                                                    "tf": 1100
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "f": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "i": {
                                  "docs": {
                                    "Logger.LoggerFactory.html": {
                                      "ref": "Logger.LoggerFactory.html",
                                      "tf": 750
                                    }
                                  }
                                },
                                "y": {
                                  "docs": {},
                                  ".": {
                                    "docs": {},
                                    "g": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "g": {
                                                "docs": {},
                                                "g": {
                                                  "docs": {
                                                    "Logger.LoggerFactory.html#.getLogger": {
                                                      "ref": "Logger.LoggerFactory.html#.getLogger",
                                                      "tf": 100
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "t": {
            "docs": {},
            ";": {
              "docs": {},
              "a": {
                "docs": {},
                "b": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "c": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "&": {
                                "docs": {},
                                "g": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Logger.AbstractLogger.html": {
                                        "ref": "Logger.AbstractLogger.html",
                                        "tf": 50
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "t": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "&": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Logger.LoggerFactory.html#.getLogger": {
                                    "ref": "Logger.LoggerFactory.html#.getLogger",
                                    "tf": 25
                                  },
                                  "Security.AuthenticationFactory.html#.getSecurityClient": {
                                    "ref": "Security.AuthenticationFactory.html#.getSecurityClient",
                                    "tf": 33.33333333333333
                                  },
                                  "Security.Context.html#.Context#principal": {
                                    "ref": "Security.Context.html#.Context#principal",
                                    "tf": 50
                                  },
                                  "Security.Context.html#.Context#permissions": {
                                    "ref": "Security.Context.html#.Context#permissions",
                                    "tf": 50
                                  },
                                  "Security.Context.html#.Context#addPermission": {
                                    "ref": "Security.Context.html#.Context#addPermission",
                                    "tf": 33.33333333333333
                                  },
                                  "Security.Context.html#.Context#removePermission": {
                                    "ref": "Security.Context.html#.Context#removePermission",
                                    "tf": 33.33333333333333
                                  },
                                  "Security.Context.html#.Context#hasPermission": {
                                    "ref": "Security.Context.html#.Context#hasPermission",
                                    "tf": 33.33333333333333
                                  },
                                  "Augmented.Utility.ResourceBundle.html#.getBundle": {
                                    "ref": "Augmented.Utility.ResourceBundle.html#.getBundle",
                                    "tf": 33.33333333333333
                                  },
                                  "Augmented.Utility.ResourceBundle.html#.getString": {
                                    "ref": "Augmented.Utility.ResourceBundle.html#.getString",
                                    "tf": 50
                                  },
                                  "Augmented.Utility.MessageReader.html#.getMessage": {
                                    "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                                    "tf": 33.33333333333333
                                  },
                                  "Utility.html#.TransformerType": {
                                    "ref": "Utility.html#.TransformerType",
                                    "tf": 33.33333333333333
                                  },
                                  "Utility.html#.formatBinary": {
                                    "ref": "Utility.html#.formatBinary",
                                    "tf": 25
                                  },
                                  "Utility.html#.formatDate": {
                                    "ref": "Utility.html#.formatDate",
                                    "tf": 33.33333333333333
                                  },
                                  "Utility.html#.sortObjects": {
                                    "ref": "Utility.html#.sortObjects",
                                    "tf": 25
                                  },
                                  "Utility.html#.mergeSort": {
                                    "ref": "Utility.html#.mergeSort",
                                    "tf": 33.33333333333333
                                  },
                                  "Utility.html#.QuickSort": {
                                    "ref": "Utility.html#.QuickSort",
                                    "tf": 33.33333333333333
                                  },
                                  "Utility.html#.SchemaGenerator": {
                                    "ref": "Utility.html#.SchemaGenerator",
                                    "tf": 33.33333333333333
                                  },
                                  "Augmented.Utility.MessageKeyFormatter.html#.format": {
                                    "ref": "Augmented.Utility.MessageKeyFormatter.html#.format",
                                    "tf": 33.33333333333333
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "v": {
              "docs": {},
              "e": {
                "docs": {},
                "l": {
                  "docs": {
                    "Logger.AbstractLogger.html#log": {
                      "ref": "Logger.AbstractLogger.html#log",
                      "tf": 33.33333333333333
                    },
                    "Logger.AbstractLogger.html#info": {
                      "ref": "Logger.AbstractLogger.html#info",
                      "tf": 12.5
                    },
                    "Logger.AbstractLogger.html#error": {
                      "ref": "Logger.AbstractLogger.html#error",
                      "tf": 12.5
                    },
                    "Logger.AbstractLogger.html#debug": {
                      "ref": "Logger.AbstractLogger.html#debug",
                      "tf": 12.5
                    },
                    "Logger.AbstractLogger.html#warn": {
                      "ref": "Logger.AbstractLogger.html#warn",
                      "tf": 12.5
                    },
                    "Logger.LoggerFactory.html#.getLogger": {
                      "ref": "Logger.LoggerFactory.html#.getLogger",
                      "tf": 25
                    },
                    "AbstractModel.html#isValid": {
                      "ref": "AbstractModel.html#isValid",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "s": {
                "docs": {
                  "Utility.html#.mergeSort": {
                    "ref": "Utility.html#.mergeSort",
                    "tf": 1.9230769230769231
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "c": {
              "docs": {},
              "k": {
                "docs": {
                  "AbstractModel.html#isNew": {
                    "ref": "AbstractModel.html#isNew",
                    "tf": 7.142857142857142
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {
                  "AbstractModel.html#hasChanged": {
                    "ref": "AbstractModel.html#hasChanged",
                    "tf": 4.166666666666666
                  }
                },
                "&": {
                  "docs": {},
                  "q": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          ";": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "h": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "g": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "&": {
                                          "docs": {},
                                          "q": {
                                            "docs": {},
                                            "u": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "t": {
                                                  "docs": {
                                                    "AbstractModel.html#previous": {
                                                      "ref": "AbstractModel.html#previous",
                                                      "tf": 6.25
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "g": {
                "docs": {
                  "Utility.html#.mergeSort": {
                    "ref": "Utility.html#.mergeSort",
                    "tf": 1.9230769230769231
                  }
                }
              }
            }
          }
        },
        "m": {
          "docs": {},
          "o": {
            "docs": {},
            "d": {
              "docs": {},
              "u": {
                "docs": {},
                "l": {
                  "docs": {
                    "list_module.html": {
                      "ref": "list_module.html",
                      "tf": 635
                    },
                    "module-Augmented.html": {
                      "ref": "module-Augmented.html",
                      "tf": 110
                    }
                  },
                  "e": {
                    "docs": {},
                    ":": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "u": {
                          "docs": {},
                          "g": {
                            "docs": {
                              "module-Augmented.html": {
                                "ref": "module-Augmented.html",
                                "tf": 1300
                              }
                            },
                            "m": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "n": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "d": {
                                        "docs": {},
                                        "~": {
                                          "docs": {},
                                          "l": {
                                            "docs": {},
                                            "o": {
                                              "docs": {},
                                              "g": {
                                                "docs": {},
                                                "g": {
                                                  "docs": {
                                                    "module-Augmented-Logger.html": {
                                                      "ref": "module-Augmented-Logger.html",
                                                      "tf": 1300
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          },
                                          "s": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "c": {
                                                "docs": {},
                                                "u": {
                                                  "docs": {},
                                                  "r": {
                                                    "docs": {
                                                      "module-Augmented-Security.html": {
                                                        "ref": "module-Augmented-Security.html",
                                                        "tf": 1300
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "l": {
                  "docs": {
                    "AbstractCollection.html#add": {
                      "ref": "AbstractCollection.html#add",
                      "tf": 14.285714285714285
                    },
                    "AbstractCollection.html#remove": {
                      "ref": "AbstractCollection.html#remove",
                      "tf": 20
                    },
                    "AbstractCollection.html#set": {
                      "ref": "AbstractCollection.html#set",
                      "tf": 5.555555555555555
                    },
                    "AbstractCollection.html#reset": {
                      "ref": "AbstractCollection.html#reset",
                      "tf": 2.083333333333333
                    },
                    "AbstractCollection.html#push": {
                      "ref": "AbstractCollection.html#push",
                      "tf": 12.5
                    },
                    "AbstractCollection.html#pop": {
                      "ref": "AbstractCollection.html#pop",
                      "tf": 12.5
                    },
                    "AbstractCollection.html#unshift": {
                      "ref": "AbstractCollection.html#unshift",
                      "tf": 12.5
                    },
                    "AbstractCollection.html#shift": {
                      "ref": "AbstractCollection.html#shift",
                      "tf": 12.5
                    },
                    "AbstractCollection.html#slice": {
                      "ref": "AbstractCollection.html#slice",
                      "tf": 8.333333333333332
                    },
                    "AbstractCollection.html#get": {
                      "ref": "AbstractCollection.html#get",
                      "tf": 7.6923076923076925
                    },
                    "AbstractCollection.html#has": {
                      "ref": "AbstractCollection.html#has",
                      "tf": 12.5
                    },
                    "AbstractCollection.html#at": {
                      "ref": "AbstractCollection.html#at",
                      "tf": 16.666666666666664
                    },
                    "AbstractCollection.html#find": {
                      "ref": "AbstractCollection.html#find",
                      "tf": 12.5
                    },
                    "AbstractCollection.html#filter": {
                      "ref": "AbstractCollection.html#filter",
                      "tf": 12.5
                    },
                    "AbstractCollection.html#where": {
                      "ref": "AbstractCollection.html#where",
                      "tf": 6.25
                    },
                    "AbstractCollection.html#findWhere": {
                      "ref": "AbstractCollection.html#findWhere",
                      "tf": 5.555555555555555
                    },
                    "AbstractCollection.html#pluck": {
                      "ref": "AbstractCollection.html#pluck",
                      "tf": 10
                    },
                    "AbstractCollection.html#create": {
                      "ref": "AbstractCollection.html#create",
                      "tf": 5.88235294117647
                    },
                    "AbstractCollection.html#parse": {
                      "ref": "AbstractCollection.html#parse",
                      "tf": 4.545454545454546
                    },
                    "AbstractCollection.html#clone": {
                      "ref": "AbstractCollection.html#clone",
                      "tf": 7.142857142857142
                    },
                    "AbstractCollection.html#modelId": {
                      "ref": "AbstractCollection.html#modelId",
                      "tf": 10
                    },
                    "AbstractCollection.html#values": {
                      "ref": "AbstractCollection.html#values",
                      "tf": 16.666666666666664
                    },
                    "AbstractCollection.html#keys": {
                      "ref": "AbstractCollection.html#keys",
                      "tf": 12.5
                    },
                    "AbstractCollection.html#entries": {
                      "ref": "AbstractCollection.html#entries",
                      "tf": 10
                    },
                    "CollectionIterator.html#next": {
                      "ref": "CollectionIterator.html#next",
                      "tf": 3.8461538461538463
                    },
                    "AbstractModel.html#get": {
                      "ref": "AbstractModel.html#get",
                      "tf": 16.666666666666664
                    },
                    "AbstractModel.html#set": {
                      "ref": "AbstractModel.html#set",
                      "tf": 5.263157894736842
                    },
                    "AbstractModel.html#has": {
                      "ref": "AbstractModel.html#has",
                      "tf": 25
                    },
                    "AbstractModel.html#unset": {
                      "ref": "AbstractModel.html#unset",
                      "tf": 5
                    },
                    "AbstractModel.html#clear": {
                      "ref": "AbstractModel.html#clear",
                      "tf": 10
                    },
                    "AbstractModel.html#toJSON": {
                      "ref": "AbstractModel.html#toJSON",
                      "tf": 12.5
                    },
                    "AbstractModel.html#fetch": {
                      "ref": "AbstractModel.html#fetch",
                      "tf": 16.666666666666664
                    },
                    "AbstractModel.html#save": {
                      "ref": "AbstractModel.html#save",
                      "tf": 12.5
                    },
                    "AbstractModel.html#destroy": {
                      "ref": "AbstractModel.html#destroy",
                      "tf": 12.5
                    },
                    "AbstractModel.html#parse": {
                      "ref": "AbstractModel.html#parse",
                      "tf": 3.8461538461538463
                    },
                    "AbstractModel.html#clone": {
                      "ref": "AbstractModel.html#clone",
                      "tf": 8.333333333333332
                    },
                    "AbstractModel.html#isNew": {
                      "ref": "AbstractModel.html#isNew",
                      "tf": 7.142857142857142
                    },
                    "AbstractModel.html#hasChanged": {
                      "ref": "AbstractModel.html#hasChanged",
                      "tf": 4.166666666666666
                    },
                    "AbstractModel.html#previousAttributes": {
                      "ref": "AbstractModel.html#previousAttributes",
                      "tf": 10
                    },
                    "AbstractModel.html#supportsValidation": {
                      "ref": "AbstractModel.html#supportsValidation",
                      "tf": 8.333333333333332
                    },
                    "AbstractModel.html#isValid": {
                      "ref": "AbstractModel.html#isValid",
                      "tf": 4.166666666666666
                    },
                    "AbstractModel.html#validate": {
                      "ref": "AbstractModel.html#validate",
                      "tf": 25
                    },
                    "AbstractModel.html#sync": {
                      "ref": "AbstractModel.html#sync",
                      "tf": 8.333333333333332
                    },
                    "AbstractModel.html#reset": {
                      "ref": "AbstractModel.html#reset",
                      "tf": 8.333333333333332
                    },
                    "AbstractModel.html#isEmpty": {
                      "ref": "AbstractModel.html#isEmpty",
                      "tf": 10
                    },
                    "AbstractModel.html#toString": {
                      "ref": "AbstractModel.html#toString",
                      "tf": 10
                    },
                    "AbstractModel.html#update": {
                      "ref": "AbstractModel.html#update",
                      "tf": 12.5
                    },
                    "ValidationFramework.html#generateSchema": {
                      "ref": "ValidationFramework.html#generateSchema",
                      "tf": 50
                    }
                  },
                  "#": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          ",": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "h": {
                                "docs": {
                                  "AbstractCollection.html#set": {
                                    "ref": "AbstractCollection.html#set",
                                    "tf": 1.8518518518518516
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "i": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "AbstractCollection.html#get": {
                          "ref": "AbstractCollection.html#get",
                          "tf": 3.8461538461538463
                        },
                        "AbstractCollection.html#modelId": {
                          "ref": "AbstractCollection.html#modelId",
                          "tf": 750
                        }
                      }
                    }
                  },
                  "'": {
                    "docs": {
                      "AbstractModel.html#url": {
                        "ref": "AbstractModel.html#url",
                        "tf": 4.166666666666666
                      }
                    },
                    "s": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "c": {
                            "docs": {
                              "AbstractModel.html#fetch": {
                                "ref": "AbstractModel.html#fetch",
                                "tf": 4.166666666666666
                              }
                            }
                          }
                        }
                      },
                      "s": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "AbstractModel.html#save": {
                              "ref": "AbstractModel.html#save",
                              "tf": 3.3333333333333335
                            }
                          }
                        }
                      }
                    }
                  },
                  ",": {
                    "docs": {},
                    "d": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "m": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "n": {
                                    "docs": {
                                      "AbstractModel.html#changedAttributes": {
                                        "ref": "AbstractModel.html#changedAttributes",
                                        "tf": 1.6666666666666667
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "r": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "CollectionIterator.html": {
                        "ref": "CollectionIterator.html",
                        "tf": 2.631578947368421
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {
                  "AbstractCollection.html#reset": {
                    "ref": "AbstractCollection.html#reset",
                    "tf": 2.083333333333333
                  },
                  "Utility.html#.mergeSort": {
                    "ref": "Utility.html#.mergeSort",
                    "tf": 1.9230769230769231
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "a": {
                "docs": {},
                "d": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "a": {
                        "docs": {
                          "Application.html": {
                            "ref": "Application.html",
                            "tf": 2.631578947368421
                          },
                          "Application.html#metadata": {
                            "ref": "Application.html#metadata",
                            "tf": 775
                          },
                          "Application.html#setMetadataItem": {
                            "ref": "Application.html#setMetadataItem",
                            "tf": 12.5
                          },
                          "Application.html#getMetadataItem": {
                            "ref": "Application.html#getMetadataItem",
                            "tf": 16.666666666666664
                          }
                        }
                      }
                    }
                  }
                }
              },
              "h": {
                "docs": {},
                "o": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "CollectionIterator.html#next": {
                        "ref": "CollectionIterator.html#next",
                        "tf": 3.8461538461538463
                      },
                      "AbstractModel.html#matches": {
                        "ref": "AbstractModel.html#matches",
                        "tf": 8.333333333333332
                      },
                      "AbstractModel.html#url": {
                        "ref": "AbstractModel.html#url",
                        "tf": 4.166666666666666
                      },
                      "Utility.AsynchronousQueue.html#add": {
                        "ref": "Utility.AsynchronousQueue.html#add",
                        "tf": 10
                      },
                      "Utility.Stack.html#empty": {
                        "ref": "Utility.Stack.html#empty",
                        "tf": 12.5
                      },
                      "Utility.Stack.html#peek": {
                        "ref": "Utility.Stack.html#peek",
                        "tf": 10
                      },
                      "Utility.Stack.html#pop": {
                        "ref": "Utility.Stack.html#pop",
                        "tf": 8.333333333333332
                      },
                      "Utility.Stack.html#push": {
                        "ref": "Utility.Stack.html#push",
                        "tf": 12.5
                      },
                      "Utility.Stack.html#search": {
                        "ref": "Utility.Stack.html#search",
                        "tf": 8.333333333333332
                      },
                      "Utility.Stack.html#size": {
                        "ref": "Utility.Stack.html#size",
                        "tf": 10
                      },
                      "Utility.Stack.html#clear": {
                        "ref": "Utility.Stack.html#clear",
                        "tf": 12.5
                      },
                      "Utility.Stack.html#toArray": {
                        "ref": "Utility.Stack.html#toArray",
                        "tf": 10
                      },
                      "Utility.Stack.html#toString": {
                        "ref": "Utility.Stack.html#toString",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "b": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "Application.html#started": {
                        "ref": "Application.html#started",
                        "tf": 110
                      },
                      "Application.html#name": {
                        "ref": "Application.html#name",
                        "tf": 110
                      },
                      "Application.html#metadata": {
                        "ref": "Application.html#metadata",
                        "tf": 110
                      },
                      "Application.html#datastore": {
                        "ref": "Application.html#datastore",
                        "tf": 110
                      },
                      "Application.html#router": {
                        "ref": "Application.html#router",
                        "tf": 110
                      },
                      "AbstractSecurityClient.html#uri": {
                        "ref": "AbstractSecurityClient.html#uri",
                        "tf": 110
                      },
                      "AbstractSecurityClient.html#type": {
                        "ref": "AbstractSecurityClient.html#type",
                        "tf": 110
                      },
                      "Security.Context.html#.Context#principal": {
                        "ref": "Security.Context.html#.Context#principal",
                        "tf": 110
                      },
                      "Security.Context.html#.Context#permissions": {
                        "ref": "Security.Context.html#.Context#permissions",
                        "tf": 110
                      },
                      "Security.Entry.html#permissions": {
                        "ref": "Security.Entry.html#permissions",
                        "tf": 110
                      },
                      "Utility.AsynchronousQueue.html#timeout": {
                        "ref": "Utility.AsynchronousQueue.html#timeout",
                        "tf": 110
                      },
                      "Utility.AsynchronousQueue.html#queue": {
                        "ref": "Utility.AsynchronousQueue.html#queue",
                        "tf": 110
                      },
                      "Utility.html#.TransformerType": {
                        "ref": "Utility.html#.TransformerType",
                        "tf": 110
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "s": {
                "docs": {},
                "a": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "AbstractCollection.html#preinitialize": {
                        "ref": "AbstractCollection.html#preinitialize",
                        "tf": 16.666666666666664
                      },
                      "AbstractCollection.html#getValidationMessages": {
                        "ref": "AbstractCollection.html#getValidationMessages",
                        "tf": 12.5
                      },
                      "Logger.AbstractLogger.html#log": {
                        "ref": "Logger.AbstractLogger.html#log",
                        "tf": 58.33333333333333
                      },
                      "Logger.AbstractLogger.html#info": {
                        "ref": "Logger.AbstractLogger.html#info",
                        "tf": 62.5
                      },
                      "Logger.AbstractLogger.html#error": {
                        "ref": "Logger.AbstractLogger.html#error",
                        "tf": 62.5
                      },
                      "Logger.AbstractLogger.html#debug": {
                        "ref": "Logger.AbstractLogger.html#debug",
                        "tf": 62.5
                      },
                      "Logger.AbstractLogger.html#warn": {
                        "ref": "Logger.AbstractLogger.html#warn",
                        "tf": 62.5
                      },
                      "AbstractModel.html#preinitialize": {
                        "ref": "AbstractModel.html#preinitialize",
                        "tf": 16.666666666666664
                      },
                      "AbstractModel.html#getValidationMessages": {
                        "ref": "AbstractModel.html#getValidationMessages",
                        "tf": 12.5
                      },
                      "Augmented.Utility.MessageReader.html": {
                        "ref": "Augmented.Utility.MessageReader.html",
                        "tf": 12.5
                      },
                      "Augmented.Utility.MessageReader.html#.getMessage": {
                        "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                        "tf": 6
                      },
                      "Augmented.Utility.MessageKeyFormatter.html": {
                        "ref": "Augmented.Utility.MessageKeyFormatter.html",
                        "tf": 2.7777777777777777
                      },
                      "Augmented.Utility.MessageKeyFormatter.html#.format": {
                        "ref": "Augmented.Utility.MessageKeyFormatter.html#.format",
                        "tf": 49.99999999999999
                      }
                    },
                    "e": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "d": {
                              "docs": {
                                "Augmented.Utility.MessageReader.html": {
                                  "ref": "Augmented.Utility.MessageReader.html",
                                  "tf": 700
                                }
                              },
                              "e": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  ".": {
                                    "docs": {},
                                    "g": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "m": {
                                            "docs": {},
                                            "e": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {
                                                        "Augmented.Utility.MessageReader.html#.getMessage": {
                                                          "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                                                          "tf": 75
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      ".": {
                        "docs": {},
                        "k": {
                          "docs": {},
                          "i": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "d": {
                                "docs": {
                                  "Augmented.Utility.MessageKeyFormatter.html": {
                                    "ref": "Augmented.Utility.MessageKeyFormatter.html",
                                    "tf": 2.7777777777777777
                                  }
                                }
                              }
                            }
                          }
                        },
                        "l": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "v": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "l": {
                                  "docs": {
                                    "Augmented.Utility.MessageKeyFormatter.html": {
                                      "ref": "Augmented.Utility.MessageKeyFormatter.html",
                                      "tf": 2.7777777777777777
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      },
                      "k": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "y": {
                            "docs": {},
                            "f": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "Augmented.Utility.MessageKeyFormatter.html": {
                                              "ref": "Augmented.Utility.MessageKeyFormatter.html",
                                              "tf": 700
                                            }
                                          },
                                          "e": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              ".": {
                                                "docs": {},
                                                "f": {
                                                  "docs": {},
                                                  "o": {
                                                    "docs": {},
                                                    "r": {
                                                      "docs": {},
                                                      "m": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {
                                                              "Augmented.Utility.MessageKeyFormatter.html#.format": {
                                                                "ref": "Augmented.Utility.MessageKeyFormatter.html#.format",
                                                                "tf": 75
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "g": {
                "docs": {
                  "AbstractCollection.html#set": {
                    "ref": "AbstractCollection.html#set",
                    "tf": 1.8518518518518516
                  },
                  "AbstractModel.html#fetch": {
                    "ref": "AbstractModel.html#fetch",
                    "tf": 4.166666666666666
                  },
                  "Utility.html#.mergeSort": {
                    "ref": "Utility.html#.mergeSort",
                    "tf": 1.9230769230769231
                  }
                },
                "e": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "Utility.html#.mergeSort": {
                              "ref": "Utility.html#.mergeSort",
                              "tf": 683.3333333333334
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "p": {
              "docs": {
                "Application.html#metadata": {
                  "ref": "Application.html#metadata",
                  "tf": 25
                },
                "Utility.AugmentedMap.html": {
                  "ref": "Utility.AugmentedMap.html",
                  "tf": 16.666666666666664
                },
                "Utility.AugmentedMap.html#set": {
                  "ref": "Utility.AugmentedMap.html#set",
                  "tf": 12.5
                },
                "Utility.AugmentedMap.html#get": {
                  "ref": "Utility.AugmentedMap.html#get",
                  "tf": 16.666666666666664
                },
                "Utility.AugmentedMap.html#indexOf": {
                  "ref": "Utility.AugmentedMap.html#indexOf",
                  "tf": 16.666666666666664
                },
                "Utility.AugmentedMap.html#remove": {
                  "ref": "Utility.AugmentedMap.html#remove",
                  "tf": 12.5
                },
                "Utility.AugmentedMap.html#has": {
                  "ref": "Utility.AugmentedMap.html#has",
                  "tf": 10
                },
                "Utility.AugmentedMap.html#forEach": {
                  "ref": "Utility.AugmentedMap.html#forEach",
                  "tf": 10
                },
                "Utility.AugmentedMap.html#key": {
                  "ref": "Utility.AugmentedMap.html#key",
                  "tf": 16.666666666666664
                },
                "Utility.AugmentedMap.html#entries": {
                  "ref": "Utility.AugmentedMap.html#entries",
                  "tf": 12.5
                },
                "Utility.AugmentedMap.html#values": {
                  "ref": "Utility.AugmentedMap.html#values",
                  "tf": 16.666666666666664
                },
                "Utility.AugmentedMap.html#clear": {
                  "ref": "Utility.AugmentedMap.html#clear",
                  "tf": 25
                },
                "Utility.AugmentedMap.html#size": {
                  "ref": "Utility.AugmentedMap.html#size",
                  "tf": 16.666666666666664
                },
                "Utility.AugmentedMap.html#toJSON": {
                  "ref": "Utility.AugmentedMap.html#toJSON",
                  "tf": 16.666666666666664
                },
                "Utility.AugmentedMap.html#toString": {
                  "ref": "Utility.AugmentedMap.html#toString",
                  "tf": 12.5
                },
                "Utility.AugmentedMap.html#isEmpty": {
                  "ref": "Utility.AugmentedMap.html#isEmpty",
                  "tf": 12.5
                }
              },
              "d": {
                "docs": {},
                "a": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "h": {
                                    "docs": {},
                                    "a": {
                                      "docs": {},
                                      "l": {
                                        "docs": {
                                          "Utility.AugmentedMap.html#marshall": {
                                            "ref": "Utility.AugmentedMap.html#marshall",
                                            "tf": 5.555555555555555
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "AbstractCollection.html#find": {
                      "ref": "AbstractCollection.html#find",
                      "tf": 12.5
                    },
                    "AbstractCollection.html#filter": {
                      "ref": "AbstractCollection.html#filter",
                      "tf": 12.5
                    },
                    "AbstractCollection.html#where": {
                      "ref": "AbstractCollection.html#where",
                      "tf": 6.25
                    },
                    "AbstractCollection.html#findWhere": {
                      "ref": "AbstractCollection.html#findWhere",
                      "tf": 5.555555555555555
                    },
                    "AbstractModel.html#matches": {
                      "ref": "AbstractModel.html#matches",
                      "tf": 758.3333333333334
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "AbstractCollection.html#sort": {
                            "ref": "AbstractCollection.html#sort",
                            "tf": 2.941176470588235
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "s": {
                "docs": {},
                "h": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "Utility.AugmentedMap.html": {
                          "ref": "Utility.AugmentedMap.html",
                          "tf": 16.666666666666664
                        },
                        "Utility.AugmentedMap.html#marshall": {
                          "ref": "Utility.AugmentedMap.html#marshall",
                          "tf": 655.5555555555555
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "m": {
            "docs": {},
            "/": {
              "docs": {},
              "d": {
                "docs": {},
                "d": {
                  "docs": {},
                  "/": {
                    "docs": {},
                    "y": {
                      "docs": {},
                      "y": {
                        "docs": {},
                        "y": {
                          "docs": {},
                          "i": {
                            "docs": {
                              "Utility.html#.formatDate": {
                                "ref": "Utility.html#.formatDate",
                                "tf": 8.333333333333332
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "c": {
              "docs": {},
              "h": {
                "docs": {
                  "Utility.html#.mergeSort": {
                    "ref": "Utility.html#.mergeSort",
                    "tf": 1.9230769230769231
                  }
                }
              }
            }
          }
        },
        "e": {
          "docs": {},
          "n": {
            "docs": {},
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "r": {
                  "docs": {
                    "Application.html": {
                      "ref": "Application.html",
                      "tf": 2.631578947368421
                    },
                    "AbstractCollection.html#reset": {
                      "ref": "AbstractCollection.html#reset",
                      "tf": 2.083333333333333
                    }
                  }
                }
              },
              "r": {
                "docs": {},
                "i": {
                  "docs": {
                    "AbstractCollection.html#entries": {
                      "ref": "AbstractCollection.html#entries",
                      "tf": 750
                    },
                    "Security.Entry.html": {
                      "ref": "Security.Entry.html",
                      "tf": 750
                    },
                    "Security.Entry.html#hasPermission": {
                      "ref": "Security.Entry.html#hasPermission",
                      "tf": 16.666666666666664
                    },
                    "Security.Entry.html#setNegative": {
                      "ref": "Security.Entry.html#setNegative",
                      "tf": 12.5
                    },
                    "Utility.AugmentedMap.html#entries": {
                      "ref": "Utility.AugmentedMap.html#entries",
                      "tf": 712.5
                    }
                  }
                },
                "y": {
                  "docs": {},
                  "#": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "m": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "s": {
                                  "docs": {
                                    "Security.Entry.html#permissions": {
                                      "ref": "Security.Entry.html#permissions",
                                      "tf": 100
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "i": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "g": {
                              "docs": {
                                "Security.Entry.html#isNegative": {
                                  "ref": "Security.Entry.html#isNegative",
                                  "tf": 100
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "a": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          "p": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "s": {
                                        "docs": {
                                          "Security.Entry.html#addPermission": {
                                            "ref": "Security.Entry.html#addPermission",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "r": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "m": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "v": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "p": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "i": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "s": {
                                              "docs": {
                                                "Security.Entry.html#removePermission": {
                                                  "ref": "Security.Entry.html#removePermission",
                                                  "tf": 100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "h": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "p": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      "s": {
                                        "docs": {
                                          "Security.Entry.html#hasPermission": {
                                            "ref": "Security.Entry.html#hasPermission",
                                            "tf": 100
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "s": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "g": {
                                "docs": {
                                  "Security.Entry.html#setNegative": {
                                    "ref": "Security.Entry.html#setNegative",
                                    "tf": 100
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "d": {
              "docs": {
                "AbstractCollection.html#push": {
                  "ref": "AbstractCollection.html#push",
                  "tf": 12.5
                },
                "AbstractCollection.html#pop": {
                  "ref": "AbstractCollection.html#pop",
                  "tf": 12.5
                }
              },
              "p": {
                "docs": {},
                "o": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "t": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "h": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "AbstractModel.html#url": {
                                    "ref": "AbstractModel.html#url",
                                    "tf": 4.166666666666666
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "e": {
              "docs": {},
              "n": {
                "docs": {},
                "t": {
                  "docs": {
                    "Application.html#initialize": {
                      "ref": "Application.html#initialize",
                      "tf": 12.5
                    },
                    "Application.html#beforeInitialize": {
                      "ref": "Application.html#beforeInitialize",
                      "tf": 12.5
                    },
                    "Application.html#afterInitialize": {
                      "ref": "Application.html#afterInitialize",
                      "tf": 16.666666666666664
                    },
                    "Application.html#start": {
                      "ref": "Application.html#start",
                      "tf": 12.5
                    },
                    "Application.html#stop": {
                      "ref": "Application.html#stop",
                      "tf": 12.5
                    },
                    "AbstractCollection.html#reset": {
                      "ref": "AbstractCollection.html#reset",
                      "tf": 2.083333333333333
                    },
                    "AbstractModel.html#fetch": {
                      "ref": "AbstractModel.html#fetch",
                      "tf": 4.166666666666666
                    },
                    "AbstractModel.html#previous": {
                      "ref": "AbstractModel.html#previous",
                      "tf": 6.25
                    },
                    "AbstractModel.html#previousAttributes": {
                      "ref": "AbstractModel.html#previousAttributes",
                      "tf": 10
                    }
                  },
                  ".": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "f": {
                        "docs": {
                          "AbstractModel.html#hasChanged": {
                            "ref": "AbstractModel.html#hasChanged",
                            "tf": 4.166666666666666
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "x": {
            "docs": {
              "Augmented.Utility.MessageKeyFormatter.html": {
                "ref": "Augmented.Utility.MessageKeyFormatter.html",
                "tf": 2.7777777777777777
              }
            },
            "i": {
              "docs": {},
              "s": {
                "docs": {},
                "t": {
                  "docs": {
                    "AbstractCollection.html#set": {
                      "ref": "AbstractCollection.html#set",
                      "tf": 1.8518518518518516
                    },
                    "AbstractModel.html#unset": {
                      "ref": "AbstractModel.html#unset",
                      "tf": 5
                    },
                    "Utility.AugmentedMap.html#has": {
                      "ref": "Utility.AugmentedMap.html#has",
                      "tf": 10
                    },
                    "Utility.Stack.html#search": {
                      "ref": "Utility.Stack.html#search",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            },
            "h": {
              "docs": {},
              "a": {
                "docs": {},
                "u": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "CollectionIterator.html#next": {
                          "ref": "CollectionIterator.html#next",
                          "tf": 3.8461538461538463
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "e": {
                "docs": {},
                "n": {
                  "docs": {},
                  "d": {
                    "docs": {
                      "Object.html": {
                        "ref": "Object.html",
                        "tf": 10
                      },
                      "AbstractSecurityClient.html": {
                        "ref": "AbstractSecurityClient.html",
                        "tf": 10
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "s": {
                      "docs": {},
                      ".": {
                        "docs": {},
                        "t": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "f": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "m": {
                                          "docs": {
                                            "Utility.exports.Transformer.html": {
                                              "ref": "Utility.exports.Transformer.html",
                                              "tf": 600
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "c": {
              "docs": {},
              "h": {
                "docs": {
                  "AbstractCollection.html#sort": {
                    "ref": "AbstractCollection.html#sort",
                    "tf": 2.941176470588235
                  },
                  "AbstractCollection.html#pluck": {
                    "ref": "AbstractCollection.html#pluck",
                    "tf": 10
                  },
                  "Utility.html#.mergeSort": {
                    "ref": "Utility.html#.mergeSort",
                    "tf": 3.125
                  }
                }
              }
            }
          },
          "m": {
            "docs": {},
            "p": {
              "docs": {},
              "t": {
                "docs": {},
                "i": {
                  "docs": {
                    "AbstractCollection.html#isEmpty": {
                      "ref": "AbstractCollection.html#isEmpty",
                      "tf": 10
                    },
                    "AbstractModel.html#isEmpty": {
                      "ref": "AbstractModel.html#isEmpty",
                      "tf": 10
                    },
                    "Utility.AugmentedMap.html#isEmpty": {
                      "ref": "Utility.AugmentedMap.html#isEmpty",
                      "tf": 12.5
                    },
                    "Utility.Stack.html#empty": {
                      "ref": "Utility.Stack.html#empty",
                      "tf": 712.5
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "r": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "Logger.AbstractLogger.html#error": {
                      "ref": "Logger.AbstractLogger.html#error",
                      "tf": 662.5
                    }
                  }
                }
              }
            }
          },
          "s": {
            "6": {
              "docs": {
                "Utility.AugmentedMap.html": {
                  "ref": "Utility.AugmentedMap.html",
                  "tf": 16.666666666666664
                },
                "Utility.AugmentedMap.html#isEmpty": {
                  "ref": "Utility.AugmentedMap.html#isEmpty",
                  "tf": 12.5
                }
              }
            },
            "docs": {},
            "c": {
              "docs": {},
              "a": {
                "docs": {},
                "p": {
                  "docs": {
                    "AbstractModel.html#escape": {
                      "ref": "AbstractModel.html#escape",
                      "tf": 766.6666666666666
                    }
                  }
                }
              }
            }
          },
          "f": {
            "docs": {},
            "f": {
              "docs": {},
              "i": {
                "docs": {},
                "c": {
                  "docs": {},
                  "i": {
                    "docs": {
                      "Utility.html#.mergeSort": {
                        "ref": "Utility.html#.mergeSort",
                        "tf": 1.9230769230769231
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "h": {
          "docs": {},
          "i": {
            "docs": {},
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "o": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "Application.html": {
                          "ref": "Application.html",
                          "tf": 2.631578947368421
                        },
                        "Application.html#start": {
                          "ref": "Application.html#start",
                          "tf": 12.5
                        },
                        "Application.html#stop": {
                          "ref": "Application.html#stop",
                          "tf": 12.5
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "h": {
                "docs": {
                  "AbstractModel.html#set": {
                    "ref": "AbstractModel.html#set",
                    "tf": 2.631578947368421
                  },
                  "AbstractModel.html#save": {
                    "ref": "AbstractModel.html#save",
                    "tf": 6.666666666666667
                  },
                  "AbstractModel.html#parse": {
                    "ref": "AbstractModel.html#parse",
                    "tf": 3.8461538461538463
                  }
                }
              },
              "c": {
                "docs": {},
                "h": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "g": {
                        "docs": {
                          "AbstractModel.html#hasChanged": {
                            "ref": "AbstractModel.html#hasChanged",
                            "tf": 750
                          }
                        }
                      }
                    }
                  }
                }
              },
              "p": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "m": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "s": {
                            "docs": {
                              "Security.Context.html#.Context#hasPermission": {
                                "ref": "Security.Context.html#.Context#hasPermission",
                                "tf": 87.5
                              },
                              "Security.Entry.html#hasPermission": {
                                "ref": "Security.Entry.html#hasPermission",
                                "tf": 650
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "l": {
                  "docs": {
                    "Utility.AsynchronousQueue.html": {
                      "ref": "Utility.AsynchronousQueue.html",
                      "tf": 7.142857142857142
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "v": {
                "docs": {
                  "Utility.html#.mergeSort": {
                    "ref": "Utility.html#.mergeSort",
                    "tf": 10
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            ":": {
              "docs": {},
              "m": {
                "docs": {},
                "m": {
                  "docs": {
                    "Utility.html#.formatDate": {
                      "ref": "Utility.html#.formatDate",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "a": {
              "docs": {},
              "p": {
                "docs": {},
                "s": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "Utility.html#.mergeSort": {
                            "ref": "Utility.html#.mergeSort",
                            "tf": 1.9230769230769231
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "p": {
          "docs": {},
          "a": {
            "docs": {},
            "g": {
              "docs": {},
              "e": {
                "docs": {
                  "Application.html": {
                    "ref": "Application.html",
                    "tf": 2.631578947368421
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "s": {
                "docs": {
                  "AbstractCollection.html#create": {
                    "ref": "AbstractCollection.html#create",
                    "tf": 2.941176470588235
                  },
                  "AbstractCollection.html#parse": {
                    "ref": "AbstractCollection.html#parse",
                    "tf": 4.545454545454546
                  },
                  "AbstractModel.html#destroy": {
                    "ref": "AbstractModel.html#destroy",
                    "tf": 2.941176470588235
                  },
                  "AbstractModel.html#parse": {
                    "ref": "AbstractModel.html#parse",
                    "tf": 3.8461538461538463
                  },
                  "AbstractModel.html#changedAttributes": {
                    "ref": "AbstractModel.html#changedAttributes",
                    "tf": 1.6666666666666667
                  },
                  "AbstractModel.html#reset": {
                    "ref": "AbstractModel.html#reset",
                    "tf": 8.333333333333332
                  }
                },
                "w": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "d": {
                        "docs": {
                          "Security.Client.ACLClient.html#authenticate": {
                            "ref": "Security.Client.ACLClient.html#authenticate",
                            "tf": 33.33333333333333
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "s": {
                "docs": {
                  "AbstractCollection.html#parse": {
                    "ref": "AbstractCollection.html#parse",
                    "tf": 754.5454545454545
                  },
                  "AbstractModel.html#parse": {
                    "ref": "AbstractModel.html#parse",
                    "tf": 753.8461538461538
                  }
                },
                "e": {
                  "docs": {},
                  ":": {
                    "docs": {},
                    "j": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {
                              "Utility.AugmentedMap.html#marshall": {
                                "ref": "Utility.AugmentedMap.html#marshall",
                                "tf": 5.555555555555555
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "t": {
                "docs": {
                  "Security.Principal.html": {
                    "ref": "Security.Principal.html",
                    "tf": 7.142857142857142
                  }
                },
                "i": {
                  "docs": {
                    "CollectionIterator.html": {
                      "ref": "CollectionIterator.html",
                      "tf": 2.631578947368421
                    }
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "k": {
                "docs": {},
                "a": {
                  "docs": {},
                  "g": {
                    "docs": {
                      "module-Augmented-Logger.html": {
                        "ref": "module-Augmented-Logger.html",
                        "tf": 25
                      },
                      "module-Augmented-Security.html": {
                        "ref": "module-Augmented-Security.html",
                        "tf": 16.666666666666664
                      },
                      "Utility.html": {
                        "ref": "Utility.html",
                        "tf": 12.5
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "h": {
                "docs": {
                  "Augmented.Utility.MessageReader.html#.getMessage": {
                    "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                    "tf": 2
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "r": {
                "docs": {
                  "Utility.html#.mergeSort": {
                    "ref": "Utility.html#.mergeSort",
                    "tf": 3.125
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "p": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "Application.html#started": {
                            "ref": "Application.html#started",
                            "tf": 16.666666666666664
                          },
                          "Application.html#router": {
                            "ref": "Application.html#router",
                            "tf": 16.666666666666664
                          },
                          "AbstractCollection.html#preinitialize": {
                            "ref": "AbstractCollection.html#preinitialize",
                            "tf": 16.666666666666664
                          },
                          "AbstractCollection.html#find": {
                            "ref": "AbstractCollection.html#find",
                            "tf": 12.5
                          },
                          "AbstractCollection.html#filter": {
                            "ref": "AbstractCollection.html#filter",
                            "tf": 12.5
                          },
                          "AbstractCollection.html#sortByKey": {
                            "ref": "AbstractCollection.html#sortByKey",
                            "tf": 10
                          },
                          "AbstractModel.html#preinitialize": {
                            "ref": "AbstractModel.html#preinitialize",
                            "tf": 16.666666666666664
                          },
                          "Utility.AugmentedMap.html#marshall": {
                            "ref": "Utility.AugmentedMap.html#marshall",
                            "tf": 5.555555555555555
                          }
                        }
                      }
                    },
                    "i": {
                      "docs": {
                        "Utility.html#.sortObjects": {
                          "ref": "Utility.html#.sortObjects",
                          "tf": 10
                        }
                      }
                    }
                  }
                }
              },
              "t": {
                "docs": {},
                "o": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "l": {
                        "docs": {
                          "CollectionIterator.html": {
                            "ref": "CollectionIterator.html",
                            "tf": 2.631578947368421
                          }
                        }
                      }
                    }
                  }
                }
              },
              "x": {
                "docs": {},
                "i": {
                  "docs": {
                    "AbstractModel.html#matches": {
                      "ref": "AbstractModel.html#matches",
                      "tf": 8.333333333333332
                    }
                  }
                }
              },
              "c": {
                "docs": {},
                "e": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "s": {
                      "docs": {
                        "Utility.AsynchronousQueue.html#add": {
                          "ref": "Utility.AsynchronousQueue.html#add",
                          "tf": 10
                        },
                        "Utility.AsynchronousQueue.html#clear": {
                          "ref": "Utility.AsynchronousQueue.html#clear",
                          "tf": 16.666666666666664
                        },
                        "Utility.AsynchronousQueue.html#process": {
                          "ref": "Utility.AsynchronousQueue.html#process",
                          "tf": 725
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {
                "Utility.html#.formatBinary": {
                  "ref": "Utility.html#.formatBinary",
                  "tf": 25
                }
              },
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {
                          "AbstractCollection.html#preinitialize": {
                            "ref": "AbstractCollection.html#preinitialize",
                            "tf": 750
                          },
                          "AbstractModel.html#preinitialize": {
                            "ref": "AbstractModel.html#preinitialize",
                            "tf": 750
                          }
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "e": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "AbstractCollection.html#set": {
                          "ref": "AbstractCollection.html#set",
                          "tf": 1.8518518518518516
                        }
                      }
                    }
                  }
                }
              },
              "v": {
                "docs": {},
                "i": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "u": {
                      "docs": {
                        "AbstractModel.html#previous": {
                          "ref": "AbstractModel.html#previous",
                          "tf": 756.25
                        }
                      },
                      "s": {
                        "docs": {},
                        "&": {
                          "docs": {},
                          "q": {
                            "docs": {},
                            "u": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  ";": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "h": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "n": {
                                            "docs": {},
                                            "g": {
                                              "docs": {},
                                              "e": {
                                                "docs": {},
                                                "&": {
                                                  "docs": {},
                                                  "q": {
                                                    "docs": {},
                                                    "u": {
                                                      "docs": {},
                                                      "o": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {
                                                            "AbstractModel.html#previousAttributes": {
                                                              "ref": "AbstractModel.html#previousAttributes",
                                                              "tf": 10
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "t": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "i": {
                                  "docs": {},
                                  "b": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "AbstractModel.html#previousAttributes": {
                                            "ref": "AbstractModel.html#previousAttributes",
                                            "tf": 750
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "c": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "Utility.html#.formatBinary": {
                        "ref": "Utility.html#.formatBinary",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "m": {
                "docs": {},
                "i": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "AbstractModel.html#set": {
                        "ref": "AbstractModel.html#set",
                        "tf": 2.631578947368421
                      }
                    }
                  }
                }
              },
              "n": {
                "docs": {},
                "c": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "p": {
                      "docs": {
                        "Security.Context.html#.Context#principal": {
                          "ref": "Security.Context.html#.Context#principal",
                          "tf": 91.66666666666666
                        },
                        "Security.Context.html#.Context#permissions": {
                          "ref": "Security.Context.html#.Context#permissions",
                          "tf": 12.5
                        },
                        "Security.Context.html#.Context#addPermission": {
                          "ref": "Security.Context.html#.Context#addPermission",
                          "tf": 10
                        },
                        "Security.Context.html#.Context#removePermission": {
                          "ref": "Security.Context.html#.Context#removePermission",
                          "tf": 12.5
                        },
                        "Security.Context.html#.Context#hasPermission": {
                          "ref": "Security.Context.html#.Context#hasPermission",
                          "tf": 12.5
                        },
                        "Security.Client.OAUTH2Client.html#access": {
                          "ref": "Security.Client.OAUTH2Client.html#access",
                          "tf": 50
                        },
                        "Security.Principal.html": {
                          "ref": "Security.Principal.html",
                          "tf": 750
                        }
                      }
                    }
                  }
                }
              },
              "c": {
                "docs": {},
                "i": {
                  "docs": {},
                  "p": {
                    "docs": {
                      "Security.Principal.html": {
                        "ref": "Security.Principal.html",
                        "tf": 7.142857142857142
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "s": {
              "docs": {},
              "h": {
                "docs": {
                  "AbstractCollection.html#push": {
                    "ref": "AbstractCollection.html#push",
                    "tf": 750
                  },
                  "Utility.Stack.html#push": {
                    "ref": "Utility.Stack.html#push",
                    "tf": 662.5
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {
                  "AbstractModel.html#toJSON": {
                    "ref": "AbstractModel.html#toJSON",
                    "tf": 12.5
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "p": {
              "docs": {
                "AbstractCollection.html#pop": {
                  "ref": "AbstractCollection.html#pop",
                  "tf": 750
                },
                "Utility.Stack.html#pop": {
                  "ref": "Utility.Stack.html#pop",
                  "tf": 708.3333333333334
                }
              }
            },
            "s": {
              "docs": {},
              "i": {
                "docs": {},
                "t": {
                  "docs": {
                    "Security.Entry.html#setNegative": {
                      "ref": "Security.Entry.html#setNegative",
                      "tf": 12.5
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "t": {
                "docs": {},
                "i": {
                  "docs": {},
                  "o": {
                    "docs": {},
                    "n": {
                      "docs": {
                        "Augmented.Utility.MessageKeyFormatter.html": {
                          "ref": "Augmented.Utility.MessageKeyFormatter.html",
                          "tf": 2.7777777777777777
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "u": {
              "docs": {},
              "c": {
                "docs": {},
                "k": {
                  "docs": {
                    "AbstractCollection.html#pluck": {
                      "ref": "AbstractCollection.html#pluck",
                      "tf": 760
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "r": {
              "docs": {},
              "s": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          ".": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "p": {
                                "docs": {},
                                "t": {
                                  "docs": {},
                                  "i": {
                                    "docs": {},
                                    "m": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "AbstractModel.html#destroy": {
                                                "ref": "AbstractModel.html#destroy",
                                                "tf": 2.941176470588235
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "m": {
                "docs": {},
                "i": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "s": {
                      "docs": {
                        "Security.Context.html#.Context#permissions": {
                          "ref": "Security.Context.html#.Context#permissions",
                          "tf": 87.5
                        },
                        "Security.Context.html#.Context#addPermission": {
                          "ref": "Security.Context.html#.Context#addPermission",
                          "tf": 43.33333333333333
                        },
                        "Security.Context.html#.Context#removePermission": {
                          "ref": "Security.Context.html#.Context#removePermission",
                          "tf": 45.83333333333333
                        },
                        "Security.Context.html#.Context#hasPermission": {
                          "ref": "Security.Context.html#.Context#hasPermission",
                          "tf": 45.83333333333333
                        },
                        "Security.Entry.html": {
                          "ref": "Security.Entry.html",
                          "tf": 10
                        },
                        "Security.Entry.html#permissions": {
                          "ref": "Security.Entry.html#permissions",
                          "tf": 725
                        },
                        "Security.Entry.html#addPermission": {
                          "ref": "Security.Entry.html#addPermission",
                          "tf": 75
                        },
                        "Security.Entry.html#removePermission": {
                          "ref": "Security.Entry.html#removePermission",
                          "tf": 75
                        },
                        "Security.Entry.html#hasPermission": {
                          "ref": "Security.Entry.html#hasPermission",
                          "tf": 66.66666666666666
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "k": {
                "docs": {
                  "Utility.Stack.html#peek": {
                    "ref": "Utility.Stack.html#peek",
                    "tf": 710
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "e": {
              "docs": {},
              "c": {
                "docs": {
                  "Augmented.Utility.MessageKeyFormatter.html": {
                    "ref": "Augmented.Utility.MessageKeyFormatter.html",
                    "tf": 2.7777777777777777
                  }
                }
              }
            }
          }
        },
        "t": {
          "docs": {},
          "r": {
            "docs": {},
            "a": {
              "docs": {},
              "c": {
                "docs": {},
                "k": {
                  "docs": {
                    "Application.html": {
                      "ref": "Application.html",
                      "tf": 2.631578947368421
                    }
                  }
                }
              },
              "n": {
                "docs": {},
                "s": {
                  "docs": {},
                  "f": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "m": {
                          "docs": {
                            "AbstractCollection.html#get": {
                              "ref": "AbstractCollection.html#get",
                              "tf": 3.8461538461538463
                            },
                            "AbstractModel.html#toJSON": {
                              "ref": "AbstractModel.html#toJSON",
                              "tf": 12.5
                            },
                            "Utility.exports.Transformer.html": {
                              "ref": "Utility.exports.Transformer.html",
                              "tf": 105.55555555555556
                            },
                            "Utility.html#.TransformerType": {
                              "ref": "Utility.html#.TransformerType",
                              "tf": 20
                            }
                          },
                          "e": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "y": {
                                  "docs": {},
                                  "p": {
                                    "docs": {
                                      "Utility.html#.TransformerType": {
                                        "ref": "Utility.html#.TransformerType",
                                        "tf": 683.3333333333334
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "u": {
              "docs": {},
              "e": {
                "docs": {
                  "AbstractCollection.html#has": {
                    "ref": "AbstractCollection.html#has",
                    "tf": 12.5
                  },
                  "AbstractCollection.html#create": {
                    "ref": "AbstractCollection.html#create",
                    "tf": 2.941176470588235
                  },
                  "AbstractCollection.html#supportsValidation": {
                    "ref": "AbstractCollection.html#supportsValidation",
                    "tf": 8.333333333333332
                  },
                  "AbstractCollection.html#isValid": {
                    "ref": "AbstractCollection.html#isValid",
                    "tf": 10
                  },
                  "AbstractCollection.html#isEmpty": {
                    "ref": "AbstractCollection.html#isEmpty",
                    "tf": 10
                  },
                  "AbstractModel.html#destroy": {
                    "ref": "AbstractModel.html#destroy",
                    "tf": 2.941176470588235
                  },
                  "AbstractModel.html#supportsValidation": {
                    "ref": "AbstractModel.html#supportsValidation",
                    "tf": 8.333333333333332
                  },
                  "AbstractModel.html#isValid": {
                    "ref": "AbstractModel.html#isValid",
                    "tf": 4.166666666666666
                  },
                  "AbstractModel.html#isEmpty": {
                    "ref": "AbstractModel.html#isEmpty",
                    "tf": 10
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "g": {
                "docs": {},
                "g": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "AbstractModel.html#fetch": {
                          "ref": "AbstractModel.html#fetch",
                          "tf": 4.166666666666666
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "e": {
              "docs": {},
              "m": {
                "docs": {},
                "o": {
                  "docs": {},
                  "d": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "s": {
                          "docs": {},
                          "&": {
                            "docs": {},
                            "q": {
                              "docs": {},
                              "u": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "AbstractCollection.html#toJSON": {
                                        "ref": "AbstractCollection.html#toJSON",
                                        "tf": 8.333333333333332
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "c": {
                "docs": {},
                "o": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "c": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "AbstractCollection.html#create": {
                                "ref": "AbstractCollection.html#create",
                                "tf": 2.941176470588235
                              },
                              "AbstractCollection.html#parse": {
                                "ref": "AbstractCollection.html#parse",
                                "tf": 4.545454545454546
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "u": {
                "docs": {},
                "s": {
                  "docs": {
                    "CollectionIterator.html": {
                      "ref": "CollectionIterator.html",
                      "tf": 2.631578947368421
                    }
                  }
                }
              },
              "l": {
                "docs": {},
                "a": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Augmented.Utility.MessageReader.html#.getMessage": {
                          "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                          "tf": 2
                        }
                      }
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "t": {
                "docs": {},
                "a": {
                  "docs": {},
                  "l": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "d": {
                            "docs": {},
                            "i": {
                              "docs": {
                                "AbstractCollection.html#set": {
                                  "ref": "AbstractCollection.html#set",
                                  "tf": 1.8518518518518516
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "o": {
                "docs": {},
                "u": {
                  "docs": {},
                  "g": {
                    "docs": {},
                    "h": {
                      "docs": {
                        "AbstractCollection.html#get": {
                          "ref": "AbstractCollection.html#get",
                          "tf": 3.8461538461538463
                        },
                        "AbstractCollection.html#parse": {
                          "ref": "AbstractCollection.html#parse",
                          "tf": 4.545454545454546
                        },
                        "Augmented.Utility.MessageReader.html#.getMessage": {
                          "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                          "tf": 2
                        },
                        "Utility.html#.mergeSort": {
                          "ref": "Utility.html#.mergeSort",
                          "tf": 3.125
                        }
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "r": {
                "docs": {},
                "d": {
                  "docs": {
                    "CollectionIterator.html": {
                      "ref": "CollectionIterator.html",
                      "tf": 2.631578947368421
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "j": {
              "docs": {},
              "s": {
                "docs": {},
                "o": {
                  "docs": {},
                  "n": {
                    "docs": {
                      "AbstractCollection.html#toJSON": {
                        "ref": "AbstractCollection.html#toJSON",
                        "tf": 750
                      },
                      "AbstractModel.html#toJSON": {
                        "ref": "AbstractModel.html#toJSON",
                        "tf": 762.5
                      },
                      "Utility.AugmentedMap.html#toJSON": {
                        "ref": "Utility.AugmentedMap.html#toJSON",
                        "tf": 700
                      }
                    }
                  }
                }
              }
            },
            "s": {
              "docs": {},
              "t": {
                "docs": {},
                "r": {
                  "docs": {
                    "AbstractCollection.html#toString": {
                      "ref": "AbstractCollection.html#toString",
                      "tf": 760
                    },
                    "AbstractModel.html#toString": {
                      "ref": "AbstractModel.html#toString",
                      "tf": 760
                    },
                    "Utility.AugmentedMap.html#toString": {
                      "ref": "Utility.AugmentedMap.html#toString",
                      "tf": 700
                    },
                    "Utility.Stack.html#toString": {
                      "ref": "Utility.Stack.html#toString",
                      "tf": 710
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "r": {
                "docs": {},
                "r": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "y": {
                      "docs": {
                        "Utility.Stack.html#toArray": {
                          "ref": "Utility.Stack.html#toArray",
                          "tf": 710
                        }
                      }
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {},
              "e": {
                "docs": {},
                "t": {
                  "docs": {},
                  "h": {
                    "docs": {
                      "Augmented.Utility.MessageKeyFormatter.html": {
                        "ref": "Augmented.Utility.MessageKeyFormatter.html",
                        "tf": 2.7777777777777777
                      }
                    }
                  }
                }
              }
            }
          },
          "w": {
            "docs": {},
            "o": {
              "docs": {
                "AbstractCollection.html#add": {
                  "ref": "AbstractCollection.html#add",
                  "tf": 3.571428571428571
                },
                "AbstractModel.html#isValid": {
                  "ref": "AbstractModel.html#isValid",
                  "tf": 4.166666666666666
                }
              }
            }
          },
          "u": {
            "docs": {},
            "p": {
              "docs": {},
              "l": {
                "docs": {
                  "AbstractCollection.html#entries": {
                    "ref": "AbstractCollection.html#entries",
                    "tf": 10
                  }
                }
              }
            }
          },
          "y": {
            "docs": {},
            "p": {
              "docs": {},
              "e": {
                "docs": {
                  "Logger.LoggerFactory.html#.getLogger": {
                    "ref": "Logger.LoggerFactory.html#.getLogger",
                    "tf": 25
                  },
                  "AbstractSecurityClient.html#type": {
                    "ref": "AbstractSecurityClient.html#type",
                    "tf": 750
                  },
                  "Security.AuthenticationFactory.html": {
                    "ref": "Security.AuthenticationFactory.html",
                    "tf": 6.25
                  },
                  "Utility.AugmentedMap.html#marshall": {
                    "ref": "Utility.AugmentedMap.html#marshall",
                    "tf": 5.555555555555555
                  },
                  "Utility.exports.Transformer.html": {
                    "ref": "Utility.exports.Transformer.html",
                    "tf": 11.11111111111111
                  },
                  "Utility.html#.TransformerType": {
                    "ref": "Utility.html#.TransformerType",
                    "tf": 10
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "m": {
              "docs": {},
              "e": {
                "docs": {
                  "AbstractModel.html#previous": {
                    "ref": "AbstractModel.html#previous",
                    "tf": 6.25
                  },
                  "AbstractModel.html#previousAttributes": {
                    "ref": "AbstractModel.html#previousAttributes",
                    "tf": 10
                  }
                },
                "o": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Utility.AsynchronousQueue.html#timeout": {
                          "ref": "Utility.AsynchronousQueue.html#timeout",
                          "tf": 725
                        }
                      }
                    }
                  }
                },
                ".": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "Utility.html#.mergeSort": {
                          "ref": "Utility.html#.mergeSort",
                          "tf": 1.9230769230769231
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "u": {
          "docs": {},
          "s": {
            "docs": {
              "Application.html": {
                "ref": "Application.html",
                "tf": 2.631578947368421
              },
              "AbstractCollection.html#where": {
                "ref": "AbstractCollection.html#where",
                "tf": 6.25
              },
              "AbstractCollection.html#findWhere": {
                "ref": "AbstractCollection.html#findWhere",
                "tf": 5.555555555555555
              },
              "AbstractModel.html#changedAttributes": {
                "ref": "AbstractModel.html#changedAttributes",
                "tf": 1.6666666666666667
              },
              "AbstractSecurityClient.html": {
                "ref": "AbstractSecurityClient.html",
                "tf": 10
              },
              "Security.AuthenticationFactory.html": {
                "ref": "Security.AuthenticationFactory.html",
                "tf": 6.25
              },
              "Security.Entry.html": {
                "ref": "Security.Entry.html",
                "tf": 10
              },
              "Security.Principal.html": {
                "ref": "Security.Principal.html",
                "tf": 7.142857142857142
              },
              "Augmented.Utility.BundleObject.html": {
                "ref": "Augmented.Utility.BundleObject.html",
                "tf": 10
              },
              "Utility.html#.TransformerType": {
                "ref": "Utility.html#.TransformerType",
                "tf": 10
              }
            },
            "e": {
              "docs": {},
              "r": {
                "docs": {
                  "Security.Client.ACLClient.html#authenticate": {
                    "ref": "Security.Client.ACLClient.html#authenticate",
                    "tf": 25
                  }
                },
                "n": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "m": {
                      "docs": {
                        "Security.Client.ACLClient.html#authenticate": {
                          "ref": "Security.Client.ACLClient.html#authenticate",
                          "tf": 33.33333333333333
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "d": {
              "docs": {},
              "a": {
                "docs": {},
                "t": {
                  "docs": {
                    "AbstractCollection.html#set": {
                      "ref": "AbstractCollection.html#set",
                      "tf": 3.7037037037037033
                    },
                    "AbstractCollection.html#update": {
                      "ref": "AbstractCollection.html#update",
                      "tf": 762.5
                    },
                    "AbstractModel.html#set": {
                      "ref": "AbstractModel.html#set",
                      "tf": 2.631578947368421
                    },
                    "AbstractModel.html#changedAttributes": {
                      "ref": "AbstractModel.html#changedAttributes",
                      "tf": 1.6666666666666667
                    },
                    "AbstractModel.html#update": {
                      "ref": "AbstractModel.html#update",
                      "tf": 787.5
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "s": {
              "docs": {},
              "h": {
                "docs": {},
                "i": {
                  "docs": {},
                  "f": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "AbstractCollection.html#unshift": {
                          "ref": "AbstractCollection.html#unshift",
                          "tf": 750
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "t": {
                  "docs": {
                    "AbstractModel.html#unset": {
                      "ref": "AbstractModel.html#unset",
                      "tf": 755
                    },
                    "AbstractModel.html#changedAttributes": {
                      "ref": "AbstractModel.html#changedAttributes",
                      "tf": 1.6666666666666667
                    }
                  }
                }
              }
            },
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "n": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "m": {
                          "docs": {
                            "AbstractCollection.html#sort": {
                              "ref": "AbstractCollection.html#sort",
                              "tf": 2.941176470588235
                            }
                          }
                        }
                      }
                    }
                  },
                  "s": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "o": {
                        "docs": {},
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "'": {
                              "docs": {
                                "AbstractModel.html#matches": {
                                  "ref": "AbstractModel.html#matches",
                                  "tf": 8.333333333333332
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                },
                "f": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "d": {
                          "docs": {},
                          ".": {
                            "docs": {},
                            "y": {
                              "docs": {
                                "AbstractModel.html#changedAttributes": {
                                  "ref": "AbstractModel.html#changedAttributes",
                                  "tf": 1.6666666666666667
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "e": {
                "docs": {},
                "s": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "AbstractCollection.html#create": {
                        "ref": "AbstractCollection.html#create",
                        "tf": 2.941176470588235
                      }
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "q": {
                "docs": {},
                "u": {
                  "docs": {
                    "AbstractCollection.html#modelId": {
                      "ref": "AbstractCollection.html#modelId",
                      "tf": 10
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "l": {
              "docs": {
                "AbstractModel.html#url": {
                  "ref": "AbstractModel.html#url",
                  "tf": 754.1666666666666
                }
              }
            },
            "i": {
              "docs": {
                "AbstractSecurityClient.html#uri": {
                  "ref": "AbstractSecurityClient.html#uri",
                  "tf": 750
                }
              }
            }
          },
          "t": {
            "docs": {},
            "i": {
              "docs": {},
              "l": {
                "docs": {
                  "Utility.html": {
                    "ref": "Utility.html",
                    "tf": 1925
                  }
                },
                "i": {
                  "docs": {},
                  "t": {
                    "docs": {},
                    "y": {
                      "docs": {},
                      ".": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "g": {
                              "docs": {},
                              "m": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "n": {
                                    "docs": {},
                                    "t": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "d": {
                                          "docs": {},
                                          "m": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "p": {
                                                "docs": {
                                                  "Utility.AugmentedMap.html": {
                                                    "ref": "Utility.AugmentedMap.html",
                                                    "tf": 1250
                                                  }
                                                },
                                                "#": {
                                                  "docs": {},
                                                  "s": {
                                                    "docs": {
                                                      "Utility.AugmentedMap.html#size": {
                                                        "ref": "Utility.AugmentedMap.html#size",
                                                        "tf": 1100
                                                      }
                                                    },
                                                    "e": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {
                                                          "Utility.AugmentedMap.html#set": {
                                                            "ref": "Utility.AugmentedMap.html#set",
                                                            "tf": 1100
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "g": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {
                                                          "Utility.AugmentedMap.html#get": {
                                                            "ref": "Utility.AugmentedMap.html#get",
                                                            "tf": 1150
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "i": {
                                                    "docs": {},
                                                    "n": {
                                                      "docs": {},
                                                      "d": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "x": {
                                                            "docs": {},
                                                            "o": {
                                                              "docs": {},
                                                              "f": {
                                                                "docs": {
                                                                  "Utility.AugmentedMap.html#indexOf": {
                                                                    "ref": "Utility.AugmentedMap.html#indexOf",
                                                                    "tf": 1100
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "s": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "m": {
                                                          "docs": {},
                                                          "p": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "i": {
                                                                "docs": {
                                                                  "Utility.AugmentedMap.html#isEmpty": {
                                                                    "ref": "Utility.AugmentedMap.html#isEmpty",
                                                                    "tf": 1100
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "r": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "m": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "v": {
                                                            "docs": {
                                                              "Utility.AugmentedMap.html#remove": {
                                                                "ref": "Utility.AugmentedMap.html#remove",
                                                                "tf": 1100
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "h": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {
                                                        "Utility.AugmentedMap.html#has": {
                                                          "ref": "Utility.AugmentedMap.html#has",
                                                          "tf": 1150
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "f": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "c": {
                                                              "docs": {},
                                                              "h": {
                                                                "docs": {
                                                                  "Utility.AugmentedMap.html#forEach": {
                                                                    "ref": "Utility.AugmentedMap.html#forEach",
                                                                    "tf": 1100
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "k": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "y": {
                                                        "docs": {
                                                          "Utility.AugmentedMap.html#key": {
                                                            "ref": "Utility.AugmentedMap.html#key",
                                                            "tf": 1100
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "e": {
                                                    "docs": {},
                                                    "n": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "i": {
                                                            "docs": {
                                                              "Utility.AugmentedMap.html#entries": {
                                                                "ref": "Utility.AugmentedMap.html#entries",
                                                                "tf": 1100
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "v": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "l": {
                                                        "docs": {},
                                                        "u": {
                                                          "docs": {
                                                            "Utility.AugmentedMap.html#values": {
                                                              "ref": "Utility.AugmentedMap.html#values",
                                                              "tf": 1100
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "c": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {
                                                              "Utility.AugmentedMap.html#clear": {
                                                                "ref": "Utility.AugmentedMap.html#clear",
                                                                "tf": 1100
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "t": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "j": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "o": {
                                                            "docs": {},
                                                            "n": {
                                                              "docs": {
                                                                "Utility.AugmentedMap.html#toJSON": {
                                                                  "ref": "Utility.AugmentedMap.html#toJSON",
                                                                  "tf": 1100
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "s": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {
                                                              "Utility.AugmentedMap.html#toString": {
                                                                "ref": "Utility.AugmentedMap.html#toString",
                                                                "tf": 1100
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  },
                                                  "m": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "h": {
                                                            "docs": {},
                                                            "a": {
                                                              "docs": {},
                                                              "l": {
                                                                "docs": {
                                                                  "Utility.AugmentedMap.html#marshall": {
                                                                    "ref": "Utility.AugmentedMap.html#marshall",
                                                                    "tf": 1100
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "s": {
                            "docs": {},
                            "y": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "h": {
                                    "docs": {},
                                    "r": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "u": {
                                              "docs": {},
                                              "s": {
                                                "docs": {},
                                                "q": {
                                                  "docs": {},
                                                  "u": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "u": {
                                                        "docs": {
                                                          "Utility.AsynchronousQueue.html": {
                                                            "ref": "Utility.AsynchronousQueue.html",
                                                            "tf": 1250
                                                          }
                                                        },
                                                        "e": {
                                                          "docs": {},
                                                          "#": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "i": {
                                                                "docs": {},
                                                                "m": {
                                                                  "docs": {},
                                                                  "e": {
                                                                    "docs": {},
                                                                    "o": {
                                                                      "docs": {},
                                                                      "u": {
                                                                        "docs": {},
                                                                        "t": {
                                                                          "docs": {
                                                                            "Utility.AsynchronousQueue.html#timeout": {
                                                                              "ref": "Utility.AsynchronousQueue.html#timeout",
                                                                              "tf": 1100
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            "q": {
                                                              "docs": {},
                                                              "u": {
                                                                "docs": {},
                                                                "e": {
                                                                  "docs": {},
                                                                  "u": {
                                                                    "docs": {
                                                                      "Utility.AsynchronousQueue.html#queue": {
                                                                        "ref": "Utility.AsynchronousQueue.html#queue",
                                                                        "tf": 1100
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            "a": {
                                                              "docs": {},
                                                              "d": {
                                                                "docs": {},
                                                                "d": {
                                                                  "docs": {
                                                                    "Utility.AsynchronousQueue.html#add": {
                                                                      "ref": "Utility.AsynchronousQueue.html#add",
                                                                      "tf": 1100
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            "c": {
                                                              "docs": {},
                                                              "l": {
                                                                "docs": {},
                                                                "e": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "r": {
                                                                      "docs": {
                                                                        "Utility.AsynchronousQueue.html#clear": {
                                                                          "ref": "Utility.AsynchronousQueue.html#clear",
                                                                          "tf": 1100
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            "p": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "o": {
                                                                  "docs": {},
                                                                  "c": {
                                                                    "docs": {},
                                                                    "e": {
                                                                      "docs": {},
                                                                      "s": {
                                                                        "docs": {},
                                                                        "s": {
                                                                          "docs": {
                                                                            "Utility.AsynchronousQueue.html#process": {
                                                                              "ref": "Utility.AsynchronousQueue.html#process",
                                                                              "tf": 1100
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "s": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "k": {
                                  "docs": {
                                    "Utility.Stack.html": {
                                      "ref": "Utility.Stack.html",
                                      "tf": 1250
                                    }
                                  },
                                  "#": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "m": {
                                        "docs": {},
                                        "p": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "i": {
                                              "docs": {
                                                "Utility.Stack.html#empty": {
                                                  "ref": "Utility.Stack.html#empty",
                                                  "tf": 1100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "p": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "k": {
                                            "docs": {
                                              "Utility.Stack.html#peek": {
                                                "ref": "Utility.Stack.html#peek",
                                                "tf": 1100
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "o": {
                                        "docs": {},
                                        "p": {
                                          "docs": {
                                            "Utility.Stack.html#pop": {
                                              "ref": "Utility.Stack.html#pop",
                                              "tf": 1100
                                            }
                                          }
                                        }
                                      },
                                      "u": {
                                        "docs": {},
                                        "s": {
                                          "docs": {},
                                          "h": {
                                            "docs": {
                                              "Utility.Stack.html#push": {
                                                "ref": "Utility.Stack.html#push",
                                                "tf": 1100
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "s": {
                                      "docs": {
                                        "Utility.Stack.html#size": {
                                          "ref": "Utility.Stack.html#size",
                                          "tf": 1100
                                        }
                                      },
                                      "e": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "c": {
                                              "docs": {},
                                              "h": {
                                                "docs": {
                                                  "Utility.Stack.html#search": {
                                                    "ref": "Utility.Stack.html#search",
                                                    "tf": 1100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "c": {
                                      "docs": {},
                                      "l": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "r": {
                                              "docs": {
                                                "Utility.Stack.html#clear": {
                                                  "ref": "Utility.Stack.html#clear",
                                                  "tf": 1100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "t": {
                                      "docs": {},
                                      "o": {
                                        "docs": {},
                                        "a": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "a": {
                                                "docs": {},
                                                "y": {
                                                  "docs": {
                                                    "Utility.Stack.html#toArray": {
                                                      "ref": "Utility.Stack.html#toArray",
                                                      "tf": 1100
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        },
                                        "s": {
                                          "docs": {},
                                          "t": {
                                            "docs": {},
                                            "r": {
                                              "docs": {
                                                "Utility.Stack.html#toString": {
                                                  "ref": "Utility.Stack.html#toString",
                                                  "tf": 1100
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "o": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "t": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "b": {
                                    "docs": {},
                                    "j": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "c": {
                                          "docs": {},
                                          "t": {
                                            "docs": {
                                              "Utility.html#.sortObjects": {
                                                "ref": "Utility.html#.sortObjects",
                                                "tf": 1150
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          },
                          "c": {
                            "docs": {},
                            "h": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "m": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "g": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "r": {
                                              "docs": {
                                                "Utility.html#.SchemaGenerator": {
                                                  "ref": "Utility.html#.SchemaGenerator",
                                                  "tf": 1150
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "e": {
                          "docs": {},
                          "x": {
                            "docs": {},
                            "p": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "r": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "s": {
                                      "docs": {},
                                      ".": {
                                        "docs": {},
                                        "t": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "a": {
                                              "docs": {},
                                              "n": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "f": {
                                                    "docs": {},
                                                    "o": {
                                                      "docs": {},
                                                      "r": {
                                                        "docs": {},
                                                        "m": {
                                                          "docs": {
                                                            "Utility.exports.Transformer.html": {
                                                              "ref": "Utility.exports.Transformer.html",
                                                              "tf": 1200
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "b": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "d": {
                                "docs": {},
                                "l": {
                                  "docs": {},
                                  "e": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "b": {
                                        "docs": {},
                                        "j": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "c": {
                                              "docs": {},
                                              "t": {
                                                "docs": {
                                                  "Augmented.Utility.BundleObject.html": {
                                                    "ref": "Augmented.Utility.BundleObject.html",
                                                    "tf": 100
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "r": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "o": {
                                "docs": {},
                                "u": {
                                  "docs": {},
                                  "r": {
                                    "docs": {},
                                    "c": {
                                      "docs": {},
                                      "e": {
                                        "docs": {},
                                        "b": {
                                          "docs": {},
                                          "u": {
                                            "docs": {},
                                            "n": {
                                              "docs": {},
                                              "d": {
                                                "docs": {},
                                                "l": {
                                                  "docs": {
                                                    "Augmented.Utility.ResourceBundle.html": {
                                                      "ref": "Augmented.Utility.ResourceBundle.html",
                                                      "tf": 100
                                                    }
                                                  },
                                                  "e": {
                                                    "docs": {},
                                                    ".": {
                                                      "docs": {},
                                                      "g": {
                                                        "docs": {},
                                                        "e": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "b": {
                                                              "docs": {},
                                                              "u": {
                                                                "docs": {},
                                                                "n": {
                                                                  "docs": {},
                                                                  "d": {
                                                                    "docs": {},
                                                                    "l": {
                                                                      "docs": {
                                                                        "Augmented.Utility.ResourceBundle.html#.getBundle": {
                                                                          "ref": "Augmented.Utility.ResourceBundle.html#.getBundle",
                                                                          "tf": 75
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            },
                                                            "s": {
                                                              "docs": {},
                                                              "t": {
                                                                "docs": {},
                                                                "r": {
                                                                  "docs": {
                                                                    "Augmented.Utility.ResourceBundle.html#.getString": {
                                                                      "ref": "Augmented.Utility.ResourceBundle.html#.getString",
                                                                      "tf": 75
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "m": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "s": {
                              "docs": {},
                              "s": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "g": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "d": {
                                              "docs": {
                                                "Augmented.Utility.MessageReader.html": {
                                                  "ref": "Augmented.Utility.MessageReader.html",
                                                  "tf": 100
                                                }
                                              },
                                              "e": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  ".": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {},
                                                          "m": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {},
                                                                "s": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "g": {
                                                                      "docs": {
                                                                        "Augmented.Utility.MessageReader.html#.getMessage": {
                                                                          "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                                                                          "tf": 75
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      },
                                      "k": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "y": {
                                            "docs": {},
                                            "f": {
                                              "docs": {},
                                              "o": {
                                                "docs": {},
                                                "r": {
                                                  "docs": {},
                                                  "m": {
                                                    "docs": {},
                                                    "a": {
                                                      "docs": {},
                                                      "t": {
                                                        "docs": {},
                                                        "t": {
                                                          "docs": {
                                                            "Augmented.Utility.MessageKeyFormatter.html": {
                                                              "ref": "Augmented.Utility.MessageKeyFormatter.html",
                                                              "tf": 100
                                                            }
                                                          },
                                                          "e": {
                                                            "docs": {},
                                                            "r": {
                                                              "docs": {},
                                                              ".": {
                                                                "docs": {},
                                                                "f": {
                                                                  "docs": {},
                                                                  "o": {
                                                                    "docs": {},
                                                                    "r": {
                                                                      "docs": {},
                                                                      "m": {
                                                                        "docs": {},
                                                                        "a": {
                                                                          "docs": {},
                                                                          "t": {
                                                                            "docs": {
                                                                              "Augmented.Utility.MessageKeyFormatter.html#.format": {
                                                                                "ref": "Augmented.Utility.MessageKeyFormatter.html#.format",
                                                                                "tf": 75
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            },
                            "r": {
                              "docs": {},
                              "g": {
                                "docs": {},
                                "e": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "Utility.html#.mergeSort": {
                                              "ref": "Utility.html#.mergeSort",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "t": {
                          "docs": {},
                          "r": {
                            "docs": {},
                            "a": {
                              "docs": {},
                              "n": {
                                "docs": {},
                                "s": {
                                  "docs": {},
                                  "f": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "m": {
                                          "docs": {},
                                          "e": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "t": {
                                                "docs": {},
                                                "y": {
                                                  "docs": {},
                                                  "p": {
                                                    "docs": {
                                                      "Utility.html#.TransformerType": {
                                                        "ref": "Utility.html#.TransformerType",
                                                        "tf": 1150
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "f": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "m": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "t": {
                                    "docs": {},
                                    "b": {
                                      "docs": {},
                                      "i": {
                                        "docs": {},
                                        "n": {
                                          "docs": {},
                                          "a": {
                                            "docs": {},
                                            "r": {
                                              "docs": {},
                                              "i": {
                                                "docs": {
                                                  "Utility.html#.formatBinary": {
                                                    "ref": "Utility.html#.formatBinary",
                                                    "tf": 1150
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "d": {
                                      "docs": {
                                        "Utility.html#.formatDate": {
                                          "ref": "Utility.html#.formatDate",
                                          "tf": 1150
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        },
                        "q": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "i": {
                              "docs": {},
                              "c": {
                                "docs": {},
                                "k": {
                                  "docs": {},
                                  "s": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "r": {
                                        "docs": {},
                                        "t": {
                                          "docs": {
                                            "Utility.html#.QuickSort": {
                                              "ref": "Utility.html#.QuickSort",
                                              "tf": 1150
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "f": {
          "docs": {},
          "u": {
            "docs": {},
            "n": {
              "docs": {},
              "c": {
                "docs": {},
                "t": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "Application.html#initialize": {
                            "ref": "Application.html#initialize",
                            "tf": 110
                          },
                          "Application.html#beforeInitialize": {
                            "ref": "Application.html#beforeInitialize",
                            "tf": 110
                          },
                          "Application.html#afterInitialize": {
                            "ref": "Application.html#afterInitialize",
                            "tf": 110
                          },
                          "Application.html#setMetadataItem": {
                            "ref": "Application.html#setMetadataItem",
                            "tf": 110
                          },
                          "Application.html#getMetadataItem": {
                            "ref": "Application.html#getMetadataItem",
                            "tf": 110
                          },
                          "Application.html#registerRouter": {
                            "ref": "Application.html#registerRouter",
                            "tf": 110
                          },
                          "Application.html#start": {
                            "ref": "Application.html#start",
                            "tf": 110
                          },
                          "Application.html#stop": {
                            "ref": "Application.html#stop",
                            "tf": 110
                          },
                          "AbstractCollection.html#preinitialize": {
                            "ref": "AbstractCollection.html#preinitialize",
                            "tf": 110
                          },
                          "AbstractCollection.html#toJSON": {
                            "ref": "AbstractCollection.html#toJSON",
                            "tf": 110
                          },
                          "AbstractCollection.html#add": {
                            "ref": "AbstractCollection.html#add",
                            "tf": 110
                          },
                          "AbstractCollection.html#remove": {
                            "ref": "AbstractCollection.html#remove",
                            "tf": 110
                          },
                          "AbstractCollection.html#set": {
                            "ref": "AbstractCollection.html#set",
                            "tf": 110
                          },
                          "AbstractCollection.html#reset": {
                            "ref": "AbstractCollection.html#reset",
                            "tf": 110
                          },
                          "AbstractCollection.html#push": {
                            "ref": "AbstractCollection.html#push",
                            "tf": 110
                          },
                          "AbstractCollection.html#pop": {
                            "ref": "AbstractCollection.html#pop",
                            "tf": 110
                          },
                          "AbstractCollection.html#unshift": {
                            "ref": "AbstractCollection.html#unshift",
                            "tf": 110
                          },
                          "AbstractCollection.html#shift": {
                            "ref": "AbstractCollection.html#shift",
                            "tf": 110
                          },
                          "AbstractCollection.html#slice": {
                            "ref": "AbstractCollection.html#slice",
                            "tf": 110
                          },
                          "AbstractCollection.html#get": {
                            "ref": "AbstractCollection.html#get",
                            "tf": 110
                          },
                          "AbstractCollection.html#has": {
                            "ref": "AbstractCollection.html#has",
                            "tf": 110
                          },
                          "AbstractCollection.html#at": {
                            "ref": "AbstractCollection.html#at",
                            "tf": 110
                          },
                          "AbstractCollection.html#find": {
                            "ref": "AbstractCollection.html#find",
                            "tf": 110
                          },
                          "AbstractCollection.html#filter": {
                            "ref": "AbstractCollection.html#filter",
                            "tf": 110
                          },
                          "AbstractCollection.html#where": {
                            "ref": "AbstractCollection.html#where",
                            "tf": 110
                          },
                          "AbstractCollection.html#findWhere": {
                            "ref": "AbstractCollection.html#findWhere",
                            "tf": 110
                          },
                          "AbstractCollection.html#sort": {
                            "ref": "AbstractCollection.html#sort",
                            "tf": 110
                          },
                          "AbstractCollection.html#pluck": {
                            "ref": "AbstractCollection.html#pluck",
                            "tf": 110
                          },
                          "AbstractCollection.html#fetch": {
                            "ref": "AbstractCollection.html#fetch",
                            "tf": 110
                          },
                          "AbstractCollection.html#create": {
                            "ref": "AbstractCollection.html#create",
                            "tf": 110
                          },
                          "AbstractCollection.html#parse": {
                            "ref": "AbstractCollection.html#parse",
                            "tf": 110
                          },
                          "AbstractCollection.html#clone": {
                            "ref": "AbstractCollection.html#clone",
                            "tf": 110
                          },
                          "AbstractCollection.html#modelId": {
                            "ref": "AbstractCollection.html#modelId",
                            "tf": 110
                          },
                          "AbstractCollection.html#values": {
                            "ref": "AbstractCollection.html#values",
                            "tf": 110
                          },
                          "AbstractCollection.html#keys": {
                            "ref": "AbstractCollection.html#keys",
                            "tf": 110
                          },
                          "AbstractCollection.html#entries": {
                            "ref": "AbstractCollection.html#entries",
                            "tf": 110
                          },
                          "AbstractCollection.html#supportsValidation": {
                            "ref": "AbstractCollection.html#supportsValidation",
                            "tf": 110
                          },
                          "AbstractCollection.html#isValid": {
                            "ref": "AbstractCollection.html#isValid",
                            "tf": 110
                          },
                          "AbstractCollection.html#getValidationMessages": {
                            "ref": "AbstractCollection.html#getValidationMessages",
                            "tf": 110
                          },
                          "AbstractCollection.html#validate": {
                            "ref": "AbstractCollection.html#validate",
                            "tf": 110
                          },
                          "AbstractCollection.html#sync": {
                            "ref": "AbstractCollection.html#sync",
                            "tf": 110
                          },
                          "AbstractCollection.html#save": {
                            "ref": "AbstractCollection.html#save",
                            "tf": 110
                          },
                          "AbstractCollection.html#update": {
                            "ref": "AbstractCollection.html#update",
                            "tf": 110
                          },
                          "AbstractCollection.html#sortByKey": {
                            "ref": "AbstractCollection.html#sortByKey",
                            "tf": 110
                          },
                          "AbstractCollection.html#isEmpty": {
                            "ref": "AbstractCollection.html#isEmpty",
                            "tf": 110
                          },
                          "AbstractCollection.html#size": {
                            "ref": "AbstractCollection.html#size",
                            "tf": 110
                          },
                          "AbstractCollection.html#toString": {
                            "ref": "AbstractCollection.html#toString",
                            "tf": 110
                          },
                          "CollectionIterator.html": {
                            "ref": "CollectionIterator.html",
                            "tf": 2.631578947368421
                          },
                          "CollectionIterator.html#next": {
                            "ref": "CollectionIterator.html#next",
                            "tf": 110
                          },
                          "Logger.AbstractLogger.html#log": {
                            "ref": "Logger.AbstractLogger.html#log",
                            "tf": 110
                          },
                          "Logger.AbstractLogger.html#info": {
                            "ref": "Logger.AbstractLogger.html#info",
                            "tf": 110
                          },
                          "Logger.AbstractLogger.html#error": {
                            "ref": "Logger.AbstractLogger.html#error",
                            "tf": 110
                          },
                          "Logger.AbstractLogger.html#debug": {
                            "ref": "Logger.AbstractLogger.html#debug",
                            "tf": 110
                          },
                          "Logger.AbstractLogger.html#warn": {
                            "ref": "Logger.AbstractLogger.html#warn",
                            "tf": 110
                          },
                          "Logger.LoggerFactory.html#.getLogger": {
                            "ref": "Logger.LoggerFactory.html#.getLogger",
                            "tf": 110
                          },
                          "AbstractModel.html#preinitialize": {
                            "ref": "AbstractModel.html#preinitialize",
                            "tf": 110
                          },
                          "AbstractModel.html#get": {
                            "ref": "AbstractModel.html#get",
                            "tf": 110
                          },
                          "AbstractModel.html#set": {
                            "ref": "AbstractModel.html#set",
                            "tf": 110
                          },
                          "AbstractModel.html#escape": {
                            "ref": "AbstractModel.html#escape",
                            "tf": 110
                          },
                          "AbstractModel.html#has": {
                            "ref": "AbstractModel.html#has",
                            "tf": 110
                          },
                          "AbstractModel.html#matches": {
                            "ref": "AbstractModel.html#matches",
                            "tf": 110
                          },
                          "AbstractModel.html#unset": {
                            "ref": "AbstractModel.html#unset",
                            "tf": 110
                          },
                          "AbstractModel.html#clear": {
                            "ref": "AbstractModel.html#clear",
                            "tf": 110
                          },
                          "AbstractModel.html#toJSON": {
                            "ref": "AbstractModel.html#toJSON",
                            "tf": 110
                          },
                          "AbstractModel.html#fetch": {
                            "ref": "AbstractModel.html#fetch",
                            "tf": 110
                          },
                          "AbstractModel.html#save": {
                            "ref": "AbstractModel.html#save",
                            "tf": 110
                          },
                          "AbstractModel.html#destroy": {
                            "ref": "AbstractModel.html#destroy",
                            "tf": 110
                          },
                          "AbstractModel.html#url": {
                            "ref": "AbstractModel.html#url",
                            "tf": 110
                          },
                          "AbstractModel.html#parse": {
                            "ref": "AbstractModel.html#parse",
                            "tf": 110
                          },
                          "AbstractModel.html#clone": {
                            "ref": "AbstractModel.html#clone",
                            "tf": 110
                          },
                          "AbstractModel.html#isNew": {
                            "ref": "AbstractModel.html#isNew",
                            "tf": 110
                          },
                          "AbstractModel.html#hasChanged": {
                            "ref": "AbstractModel.html#hasChanged",
                            "tf": 110
                          },
                          "AbstractModel.html#changedAttributes": {
                            "ref": "AbstractModel.html#changedAttributes",
                            "tf": 110
                          },
                          "AbstractModel.html#previous": {
                            "ref": "AbstractModel.html#previous",
                            "tf": 110
                          },
                          "AbstractModel.html#previousAttributes": {
                            "ref": "AbstractModel.html#previousAttributes",
                            "tf": 110
                          },
                          "AbstractModel.html#supportsValidation": {
                            "ref": "AbstractModel.html#supportsValidation",
                            "tf": 110
                          },
                          "AbstractModel.html#isValid": {
                            "ref": "AbstractModel.html#isValid",
                            "tf": 110
                          },
                          "AbstractModel.html#validate": {
                            "ref": "AbstractModel.html#validate",
                            "tf": 110
                          },
                          "AbstractModel.html#getValidationMessages": {
                            "ref": "AbstractModel.html#getValidationMessages",
                            "tf": 110
                          },
                          "AbstractModel.html#sync": {
                            "ref": "AbstractModel.html#sync",
                            "tf": 110
                          },
                          "AbstractModel.html#reset": {
                            "ref": "AbstractModel.html#reset",
                            "tf": 110
                          },
                          "AbstractModel.html#isEmpty": {
                            "ref": "AbstractModel.html#isEmpty",
                            "tf": 110
                          },
                          "AbstractModel.html#toString": {
                            "ref": "AbstractModel.html#toString",
                            "tf": 110
                          },
                          "AbstractModel.html#update": {
                            "ref": "AbstractModel.html#update",
                            "tf": 110
                          },
                          "Security.Client.ACLClient.html#authenticate": {
                            "ref": "Security.Client.ACLClient.html#authenticate",
                            "tf": 110
                          },
                          "Security.AuthenticationFactory.html#.getSecurityClient": {
                            "ref": "Security.AuthenticationFactory.html#.getSecurityClient",
                            "tf": 110
                          },
                          "Security.Context.html#.Context#addPermission": {
                            "ref": "Security.Context.html#.Context#addPermission",
                            "tf": 110
                          },
                          "Security.Context.html#.Context#removePermission": {
                            "ref": "Security.Context.html#.Context#removePermission",
                            "tf": 110
                          },
                          "Security.Context.html#.Context#hasPermission": {
                            "ref": "Security.Context.html#.Context#hasPermission",
                            "tf": 110
                          },
                          "Security.Entry.html#isNegative": {
                            "ref": "Security.Entry.html#isNegative",
                            "tf": 110
                          },
                          "Security.Entry.html#addPermission": {
                            "ref": "Security.Entry.html#addPermission",
                            "tf": 110
                          },
                          "Security.Entry.html#removePermission": {
                            "ref": "Security.Entry.html#removePermission",
                            "tf": 110
                          },
                          "Security.Entry.html#hasPermission": {
                            "ref": "Security.Entry.html#hasPermission",
                            "tf": 110
                          },
                          "Security.Entry.html#setNegative": {
                            "ref": "Security.Entry.html#setNegative",
                            "tf": 110
                          },
                          "Security.Client.OAUTH2Client.html#authorize": {
                            "ref": "Security.Client.OAUTH2Client.html#authorize",
                            "tf": 110
                          },
                          "Security.Client.OAUTH2Client.html#access": {
                            "ref": "Security.Client.OAUTH2Client.html#access",
                            "tf": 110
                          },
                          "Utility.AugmentedMap.html#set": {
                            "ref": "Utility.AugmentedMap.html#set",
                            "tf": 110
                          },
                          "Utility.AugmentedMap.html#get": {
                            "ref": "Utility.AugmentedMap.html#get",
                            "tf": 110
                          },
                          "Utility.AugmentedMap.html#indexOf": {
                            "ref": "Utility.AugmentedMap.html#indexOf",
                            "tf": 110
                          },
                          "Utility.AugmentedMap.html#remove": {
                            "ref": "Utility.AugmentedMap.html#remove",
                            "tf": 110
                          },
                          "Utility.AugmentedMap.html#has": {
                            "ref": "Utility.AugmentedMap.html#has",
                            "tf": 110
                          },
                          "Utility.AugmentedMap.html#forEach": {
                            "ref": "Utility.AugmentedMap.html#forEach",
                            "tf": 110
                          },
                          "Utility.AugmentedMap.html#key": {
                            "ref": "Utility.AugmentedMap.html#key",
                            "tf": 110
                          },
                          "Utility.AugmentedMap.html#entries": {
                            "ref": "Utility.AugmentedMap.html#entries",
                            "tf": 110
                          },
                          "Utility.AugmentedMap.html#values": {
                            "ref": "Utility.AugmentedMap.html#values",
                            "tf": 110
                          },
                          "Utility.AugmentedMap.html#clear": {
                            "ref": "Utility.AugmentedMap.html#clear",
                            "tf": 110
                          },
                          "Utility.AugmentedMap.html#size": {
                            "ref": "Utility.AugmentedMap.html#size",
                            "tf": 110
                          },
                          "Utility.AugmentedMap.html#toJSON": {
                            "ref": "Utility.AugmentedMap.html#toJSON",
                            "tf": 110
                          },
                          "Utility.AugmentedMap.html#toString": {
                            "ref": "Utility.AugmentedMap.html#toString",
                            "tf": 110
                          },
                          "Utility.AugmentedMap.html#isEmpty": {
                            "ref": "Utility.AugmentedMap.html#isEmpty",
                            "tf": 110
                          },
                          "Utility.AugmentedMap.html#marshall": {
                            "ref": "Utility.AugmentedMap.html#marshall",
                            "tf": 110
                          },
                          "Utility.AsynchronousQueue.html": {
                            "ref": "Utility.AsynchronousQueue.html",
                            "tf": 7.142857142857142
                          },
                          "Utility.AsynchronousQueue.html#add": {
                            "ref": "Utility.AsynchronousQueue.html#add",
                            "tf": 110
                          },
                          "Utility.AsynchronousQueue.html#clear": {
                            "ref": "Utility.AsynchronousQueue.html#clear",
                            "tf": 110
                          },
                          "Utility.AsynchronousQueue.html#process": {
                            "ref": "Utility.AsynchronousQueue.html#process",
                            "tf": 110
                          },
                          "Utility.Stack.html#empty": {
                            "ref": "Utility.Stack.html#empty",
                            "tf": 110
                          },
                          "Utility.Stack.html#peek": {
                            "ref": "Utility.Stack.html#peek",
                            "tf": 110
                          },
                          "Utility.Stack.html#pop": {
                            "ref": "Utility.Stack.html#pop",
                            "tf": 110
                          },
                          "Utility.Stack.html#push": {
                            "ref": "Utility.Stack.html#push",
                            "tf": 110
                          },
                          "Utility.Stack.html#search": {
                            "ref": "Utility.Stack.html#search",
                            "tf": 110
                          },
                          "Utility.Stack.html#size": {
                            "ref": "Utility.Stack.html#size",
                            "tf": 110
                          },
                          "Utility.Stack.html#clear": {
                            "ref": "Utility.Stack.html#clear",
                            "tf": 110
                          },
                          "Utility.Stack.html#toArray": {
                            "ref": "Utility.Stack.html#toArray",
                            "tf": 110
                          },
                          "Utility.Stack.html#toString": {
                            "ref": "Utility.Stack.html#toString",
                            "tf": 110
                          },
                          "ValidationFramework.html#supportsValidation": {
                            "ref": "ValidationFramework.html#supportsValidation",
                            "tf": 110
                          },
                          "ValidationFramework.html#registerSchema": {
                            "ref": "ValidationFramework.html#registerSchema",
                            "tf": 110
                          },
                          "ValidationFramework.html#getSchema": {
                            "ref": "ValidationFramework.html#getSchema",
                            "tf": 110
                          },
                          "ValidationFramework.html#getSchemas": {
                            "ref": "ValidationFramework.html#getSchemas",
                            "tf": 110
                          },
                          "ValidationFramework.html#clearSchemas": {
                            "ref": "ValidationFramework.html#clearSchemas",
                            "tf": 110
                          },
                          "ValidationFramework.html#validate": {
                            "ref": "ValidationFramework.html#validate",
                            "tf": 110
                          },
                          "ValidationFramework.html#getValidationMessages": {
                            "ref": "ValidationFramework.html#getValidationMessages",
                            "tf": 110
                          },
                          "ValidationFramework.html#generateSchema": {
                            "ref": "ValidationFramework.html#generateSchema",
                            "tf": 110
                          },
                          "Augmented.Utility.ResourceBundle.html#.getBundle": {
                            "ref": "Augmented.Utility.ResourceBundle.html#.getBundle",
                            "tf": 110
                          },
                          "Augmented.Utility.ResourceBundle.html#.getString": {
                            "ref": "Augmented.Utility.ResourceBundle.html#.getString",
                            "tf": 110
                          },
                          "Augmented.Utility.MessageReader.html#.getMessage": {
                            "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                            "tf": 110
                          },
                          "Utility.html#.formatBinary": {
                            "ref": "Utility.html#.formatBinary",
                            "tf": 110
                          },
                          "Utility.html#.formatDate": {
                            "ref": "Utility.html#.formatDate",
                            "tf": 110
                          },
                          "Utility.html#.sortObjects": {
                            "ref": "Utility.html#.sortObjects",
                            "tf": 110
                          },
                          "Utility.html#.mergeSort": {
                            "ref": "Utility.html#.mergeSort",
                            "tf": 110
                          },
                          "Utility.html#.QuickSort": {
                            "ref": "Utility.html#.QuickSort",
                            "tf": 110
                          },
                          "Utility.html#.SchemaGenerator": {
                            "ref": "Utility.html#.SchemaGenerator",
                            "tf": 110
                          },
                          "Augmented.Utility.MessageKeyFormatter.html#.format": {
                            "ref": "Augmented.Utility.MessageKeyFormatter.html#.format",
                            "tf": 110
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "u": {
                "docs": {},
                "r": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "l": {
                          "docs": {
                            "CollectionIterator.html#next": {
                              "ref": "CollectionIterator.html#next",
                              "tf": 3.8461538461538463
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "l": {
                "docs": {
                  "Utility.AsynchronousQueue.html#queue": {
                    "ref": "Utility.AsynchronousQueue.html#queue",
                    "tf": 25
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "n": {
              "docs": {},
              "i": {
                "docs": {},
                "s": {
                  "docs": {},
                  "h": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        ".": {
                          "docs": {},
                          "u": {
                            "docs": {},
                            "s": {
                              "docs": {
                                "AbstractCollection.html#reset": {
                                  "ref": "AbstractCollection.html#reset",
                                  "tf": 2.083333333333333
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "d": {
                "docs": {
                  "AbstractCollection.html#find": {
                    "ref": "AbstractCollection.html#find",
                    "tf": 712.5
                  },
                  "AbstractCollection.html#findWhere": {
                    "ref": "AbstractCollection.html#findWhere",
                    "tf": 5.555555555555555
                  }
                },
                "w": {
                  "docs": {},
                  "h": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "r": {
                        "docs": {
                          "AbstractCollection.html#findWhere": {
                            "ref": "AbstractCollection.html#findWhere",
                            "tf": 750
                          }
                        }
                      }
                    }
                  }
                }
              },
              "a": {
                "docs": {},
                "l": {
                  "docs": {
                    "Utility.html#.mergeSort": {
                      "ref": "Utility.html#.mergeSort",
                      "tf": 1.9230769230769231
                    }
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "e": {
                "docs": {
                  "AbstractCollection.html#reset": {
                    "ref": "AbstractCollection.html#reset",
                    "tf": 2.083333333333333
                  },
                  "AbstractModel.html#set": {
                    "ref": "AbstractModel.html#set",
                    "tf": 2.631578947368421
                  },
                  "AbstractModel.html#unset": {
                    "ref": "AbstractModel.html#unset",
                    "tf": 5
                  },
                  "AbstractModel.html#clear": {
                    "ref": "AbstractModel.html#clear",
                    "tf": 10
                  },
                  "AbstractModel.html#previous": {
                    "ref": "AbstractModel.html#previous",
                    "tf": 6.25
                  }
                }
              },
              "i": {
                "docs": {},
                "n": {
                  "docs": {},
                  "g": {
                    "docs": {},
                    "a": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "i": {
                          "docs": {
                            "AbstractCollection.html#reset": {
                              "ref": "AbstractCollection.html#reset",
                              "tf": 2.083333333333333
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              "s": {
                "docs": {},
                "t": {
                  "docs": {
                    "AbstractCollection.html#findWhere": {
                      "ref": "AbstractCollection.html#findWhere",
                      "tf": 5.555555555555555
                    },
                    "Utility.Stack.html#peek": {
                      "ref": "Utility.Stack.html#peek",
                      "tf": 10
                    },
                    "Utility.Stack.html#pop": {
                      "ref": "Utility.Stack.html#pop",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "t": {
                "docs": {},
                "e": {
                  "docs": {},
                  "r": {
                    "docs": {
                      "AbstractCollection.html#filter": {
                        "ref": "AbstractCollection.html#filter",
                        "tf": 712.5
                      },
                      "AbstractCollection.html#where": {
                        "ref": "AbstractCollection.html#where",
                        "tf": 6.25
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "r": {
              "docs": {},
              "c": {
                "docs": {
                  "AbstractCollection.html#sort": {
                    "ref": "AbstractCollection.html#sort",
                    "tf": 2.941176470588235
                  }
                }
              },
              "m": {
                "docs": {
                  "AbstractModel.html#get": {
                    "ref": "AbstractModel.html#get",
                    "tf": 16.666666666666664
                  }
                },
                "a": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "Utility.html#.formatBinary": {
                        "ref": "Utility.html#.formatBinary",
                        "tf": 8.333333333333332
                      },
                      "Utility.html#.formatDate": {
                        "ref": "Utility.html#.formatDate",
                        "tf": 16.666666666666664
                      },
                      "Augmented.Utility.MessageKeyFormatter.html#.format": {
                        "ref": "Augmented.Utility.MessageKeyFormatter.html#.format",
                        "tf": 625
                      }
                    },
                    "b": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "a": {
                            "docs": {},
                            "r": {
                              "docs": {},
                              "i": {
                                "docs": {
                                  "Utility.html#.formatBinary": {
                                    "ref": "Utility.html#.formatBinary",
                                    "tf": 675
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "d": {
                      "docs": {
                        "Utility.html#.formatDate": {
                          "ref": "Utility.html#.formatDate",
                          "tf": 683.3333333333334
                        }
                      }
                    }
                  }
                }
              },
              "e": {
                "docs": {},
                "a": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "h": {
                      "docs": {
                        "Utility.AugmentedMap.html#forEach": {
                          "ref": "Utility.AugmentedMap.html#forEach",
                          "tf": 660
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "l": {
                "docs": {},
                "o": {
                  "docs": {},
                  "w": {
                    "docs": {
                      "Utility.AugmentedMap.html#marshall": {
                        "ref": "Utility.AugmentedMap.html#marshall",
                        "tf": 5.555555555555555
                      }
                    }
                  }
                }
              }
            },
            "u": {
              "docs": {},
              "n": {
                "docs": {},
                "d": {
                  "docs": {
                    "Augmented.Utility.MessageReader.html#.getMessage": {
                      "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                      "tf": 2
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "t": {
              "docs": {},
              "c": {
                "docs": {},
                "h": {
                  "docs": {
                    "AbstractCollection.html#fetch": {
                      "ref": "AbstractCollection.html#fetch",
                      "tf": 775
                    },
                    "AbstractModel.html#fetch": {
                      "ref": "AbstractModel.html#fetch",
                      "tf": 783.3333333333334
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "c": {
              "docs": {},
              "t": {
                "docs": {},
                "o": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "i": {
                      "docs": {
                        "Logger.LoggerFactory.html": {
                          "ref": "Logger.LoggerFactory.html",
                          "tf": 10
                        }
                      }
                    }
                  }
                }
              }
            },
            "l": {
              "docs": {},
              "l": {
                "docs": {},
                "b": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "c": {
                      "docs": {},
                      "k": {
                        "docs": {
                          "Augmented.Utility.MessageReader.html#.getMessage": {
                            "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                            "tf": 2
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "l": {
            "docs": {},
            "a": {
              "docs": {},
              "g": {
                "docs": {
                  "Security.Entry.html#isNegative": {
                    "ref": "Security.Entry.html#isNegative",
                    "tf": 25
                  }
                }
              }
            }
          },
          "n": {
            "docs": {
              "Utility.AugmentedMap.html#forEach": {
                "ref": "Utility.AugmentedMap.html#forEach",
                "tf": 50
              }
            }
          },
          "r": {
            "docs": {},
            "a": {
              "docs": {},
              "m": {
                "docs": {},
                "e": {
                  "docs": {},
                  "w": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "k": {
                          "docs": {
                            "ValidationFramework.html": {
                              "ref": "ValidationFramework.html",
                              "tf": 4.545454545454546
                            },
                            "ValidationFramework.html#supportsValidation": {
                              "ref": "ValidationFramework.html#supportsValidation",
                              "tf": 12.5
                            },
                            "ValidationFramework.html#registerSchema": {
                              "ref": "ValidationFramework.html#registerSchema",
                              "tf": 16.666666666666664
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "b": {
          "docs": {},
          "e": {
            "docs": {},
            "f": {
              "docs": {},
              "o": {
                "docs": {},
                "r": {
                  "docs": {
                    "Application.html#beforeInitialize": {
                      "ref": "Application.html#beforeInitialize",
                      "tf": 12.5
                    },
                    "AbstractModel.html#destroy": {
                      "ref": "AbstractModel.html#destroy",
                      "tf": 2.941176470588235
                    }
                  },
                  "e": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "n": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "i": {
                              "docs": {
                                "Application.html#beforeInitialize": {
                                  "ref": "Application.html#beforeInitialize",
                                  "tf": 750
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "m": {
              "docs": {},
              "o": {
                "docs": {},
                "d": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "l": {
                      "docs": {
                        "AbstractCollection.html#add": {
                          "ref": "AbstractCollection.html#add",
                          "tf": 3.571428571428571
                        }
                      }
                    }
                  }
                }
              }
            },
            "g": {
              "docs": {},
              "i": {
                "docs": {},
                "n": {
                  "docs": {
                    "AbstractCollection.html#unshift": {
                      "ref": "AbstractCollection.html#unshift",
                      "tf": 12.5
                    },
                    "AbstractCollection.html#shift": {
                      "ref": "AbstractCollection.html#shift",
                      "tf": 12.5
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "w": {
                "docs": {},
                "e": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "n": {
                      "docs": {},
                      "c": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "l": {
                            "docs": {},
                            "l": {
                              "docs": {},
                              "e": {
                                "docs": {},
                                "c": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "CollectionIterator.html": {
                                        "ref": "CollectionIterator.html",
                                        "tf": 2.631578947368421
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "p": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {},
                  "s": {
                    "docs": {},
                    "i": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "AbstractModel.html#changedAttributes": {
                              "ref": "AbstractModel.html#changedAttributes",
                              "tf": 1.6666666666666667
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "l": {
              "docs": {},
              "k": {
                "docs": {
                  "AbstractCollection.html#reset": {
                    "ref": "AbstractCollection.html#reset",
                    "tf": 2.083333333333333
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "l": {
                "docs": {},
                "d": {
                  "docs": {
                    "ValidationFramework.html": {
                      "ref": "ValidationFramework.html",
                      "tf": 4.545454545454546
                    },
                    "Utility.html#.mergeSort": {
                      "ref": "Utility.html#.mergeSort",
                      "tf": 1.9230769230769231
                    }
                  }
                }
              }
            },
            "n": {
              "docs": {},
              "d": {
                "docs": {},
                "l": {
                  "docs": {
                    "Augmented.Utility.BundleObject.html": {
                      "ref": "Augmented.Utility.BundleObject.html",
                      "tf": 10
                    },
                    "Augmented.Utility.ResourceBundle.html#.getBundle": {
                      "ref": "Augmented.Utility.ResourceBundle.html#.getBundle",
                      "tf": 33.33333333333333
                    },
                    "Augmented.Utility.ResourceBundle.html#.getString": {
                      "ref": "Augmented.Utility.ResourceBundle.html#.getString",
                      "tf": 12.5
                    },
                    "Augmented.Utility.MessageReader.html": {
                      "ref": "Augmented.Utility.MessageReader.html",
                      "tf": 12.5
                    },
                    "Augmented.Utility.MessageReader.html#.getMessage": {
                      "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                      "tf": 2
                    }
                  },
                  "e": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "b": {
                        "docs": {},
                        "j": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "c": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Augmented.Utility.BundleObject.html": {
                                    "ref": "Augmented.Utility.BundleObject.html",
                                    "tf": 700
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "(": {
                      "docs": {
                        "Augmented.Utility.ResourceBundle.html#.getBundle": {
                          "ref": "Augmented.Utility.ResourceBundle.html#.getBundle",
                          "tf": 12.5
                        }
                      }
                    },
                    ".": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "f": {
                          "docs": {
                            "Augmented.Utility.MessageReader.html#.getMessage": {
                              "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                              "tf": 2
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "o": {
              "docs": {},
              "w": {
                "docs": {},
                "s": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "CollectionIterator.html": {
                          "ref": "CollectionIterator.html",
                          "tf": 2.631578947368421
                        }
                      }
                    }
                  }
                }
              }
            },
            "a": {
              "docs": {},
              "c": {
                "docs": {},
                "k": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "s": {
                        "docs": {},
                        "l": {
                          "docs": {},
                          "o": {
                            "docs": {},
                            "o": {
                              "docs": {},
                              "p": {
                                "docs": {
                                  "Augmented.Utility.MessageReader.html#.getMessage": {
                                    "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                                    "tf": 2
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "o": {
            "docs": {},
            "u": {
              "docs": {},
              "n": {
                "docs": {},
                "d": {
                  "docs": {
                    "AbstractModel.html#sync": {
                      "ref": "AbstractModel.html#sync",
                      "tf": 8.333333333333332
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "s": {
              "docs": {},
              "e": {
                "docs": {
                  "ValidationFramework.html": {
                    "ref": "ValidationFramework.html",
                    "tf": 9.090909090909092
                  }
                }
              }
            },
            "c": {
              "docs": {},
              "k": {
                "docs": {
                  "Augmented.Utility.MessageReader.html#.getMessage": {
                    "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                    "tf": 2
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "n": {
              "docs": {},
              "a": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {
                      "Utility.html#.formatBinary": {
                        "ref": "Utility.html#.formatBinary",
                        "tf": 8.333333333333332
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "k": {
          "docs": {},
          "e": {
            "docs": {},
            "y": {
              "docs": {
                "Application.html#setMetadataItem": {
                  "ref": "Application.html#setMetadataItem",
                  "tf": 33.33333333333333
                },
                "Application.html#getMetadataItem": {
                  "ref": "Application.html#getMetadataItem",
                  "tf": 50
                },
                "AbstractCollection.html#keys": {
                  "ref": "AbstractCollection.html#keys",
                  "tf": 750
                },
                "AbstractCollection.html#sortByKey": {
                  "ref": "AbstractCollection.html#sortByKey",
                  "tf": 60
                },
                "Utility.AugmentedMap.html#set": {
                  "ref": "Utility.AugmentedMap.html#set",
                  "tf": 45.83333333333333
                },
                "Utility.AugmentedMap.html#get": {
                  "ref": "Utility.AugmentedMap.html#get",
                  "tf": 116.66666666666666
                },
                "Utility.AugmentedMap.html#indexOf": {
                  "ref": "Utility.AugmentedMap.html#indexOf",
                  "tf": 66.66666666666666
                },
                "Utility.AugmentedMap.html#remove": {
                  "ref": "Utility.AugmentedMap.html#remove",
                  "tf": 62.5
                },
                "Utility.AugmentedMap.html#has": {
                  "ref": "Utility.AugmentedMap.html#has",
                  "tf": 110
                },
                "Utility.AugmentedMap.html#forEach": {
                  "ref": "Utility.AugmentedMap.html#forEach",
                  "tf": 10
                },
                "Utility.AugmentedMap.html#key": {
                  "ref": "Utility.AugmentedMap.html#key",
                  "tf": 716.6666666666666
                },
                "Utility.AugmentedMap.html#size": {
                  "ref": "Utility.AugmentedMap.html#size",
                  "tf": 16.666666666666664
                },
                "Augmented.Utility.MessageReader.html#.getMessage": {
                  "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                  "tf": 37.33333333333333
                },
                "Utility.html#.sortObjects": {
                  "ref": "Utility.html#.sortObjects",
                  "tf": 25
                },
                "Augmented.Utility.MessageKeyFormatter.html": {
                  "ref": "Augmented.Utility.MessageKeyFormatter.html",
                  "tf": 8.333333333333332
                },
                "Augmented.Utility.MessageKeyFormatter.html#.format": {
                  "ref": "Augmented.Utility.MessageKeyFormatter.html#.format",
                  "tf": 16.666666666666664
                }
              },
              "/": {
                "docs": {},
                "v": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "l": {
                      "docs": {},
                      "u": {
                        "docs": {
                          "Utility.AugmentedMap.html#marshall": {
                            "ref": "Utility.AugmentedMap.html#marshall",
                            "tf": 5.555555555555555
                          }
                        }
                      }
                    }
                  }
                }
              },
              "w": {
                "docs": {},
                "r": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "p": {
                      "docs": {
                        "Augmented.Utility.MessageReader.html#.getMessage": {
                          "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                          "tf": 2
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {},
            "o": {
              "docs": {},
              "w": {
                "docs": {
                  "AbstractModel.html#set": {
                    "ref": "AbstractModel.html#set",
                    "tf": 2.631578947368421
                  }
                }
              }
            }
          }
        },
        "v": {
          "docs": {},
          "a": {
            "docs": {},
            "l": {
              "docs": {},
              "u": {
                "docs": {
                  "Application.html#setMetadataItem": {
                    "ref": "Application.html#setMetadataItem",
                    "tf": 33.33333333333333
                  },
                  "AbstractCollection.html#values": {
                    "ref": "AbstractCollection.html#values",
                    "tf": 750
                  },
                  "AbstractModel.html#previous": {
                    "ref": "AbstractModel.html#previous",
                    "tf": 6.25
                  },
                  "Utility.AugmentedMap.html#set": {
                    "ref": "Utility.AugmentedMap.html#set",
                    "tf": 45.83333333333333
                  },
                  "Utility.AugmentedMap.html#get": {
                    "ref": "Utility.AugmentedMap.html#get",
                    "tf": 16.666666666666664
                  },
                  "Utility.AugmentedMap.html#remove": {
                    "ref": "Utility.AugmentedMap.html#remove",
                    "tf": 12.5
                  },
                  "Utility.AugmentedMap.html#forEach": {
                    "ref": "Utility.AugmentedMap.html#forEach",
                    "tf": 10
                  },
                  "Utility.AugmentedMap.html#entries": {
                    "ref": "Utility.AugmentedMap.html#entries",
                    "tf": 12.5
                  },
                  "Utility.AugmentedMap.html#values": {
                    "ref": "Utility.AugmentedMap.html#values",
                    "tf": 716.6666666666666
                  }
                }
              },
              "i": {
                "docs": {},
                "d": {
                  "docs": {
                    "AbstractCollection.html": {
                      "ref": "AbstractCollection.html",
                      "tf": 7.142857142857142
                    },
                    "AbstractCollection.html#preinitialize": {
                      "ref": "AbstractCollection.html#preinitialize",
                      "tf": 16.666666666666664
                    },
                    "AbstractCollection.html#supportsValidation": {
                      "ref": "AbstractCollection.html#supportsValidation",
                      "tf": 8.333333333333332
                    },
                    "AbstractCollection.html#isValid": {
                      "ref": "AbstractCollection.html#isValid",
                      "tf": 10
                    },
                    "AbstractCollection.html#getValidationMessages": {
                      "ref": "AbstractCollection.html#getValidationMessages",
                      "tf": 12.5
                    },
                    "AbstractCollection.html#validate": {
                      "ref": "AbstractCollection.html#validate",
                      "tf": 775
                    },
                    "AbstractModel.html": {
                      "ref": "AbstractModel.html",
                      "tf": 10
                    },
                    "AbstractModel.html#preinitialize": {
                      "ref": "AbstractModel.html#preinitialize",
                      "tf": 16.666666666666664
                    },
                    "AbstractModel.html#supportsValidation": {
                      "ref": "AbstractModel.html#supportsValidation",
                      "tf": 8.333333333333332
                    },
                    "AbstractModel.html#isValid": {
                      "ref": "AbstractModel.html#isValid",
                      "tf": 4.166666666666666
                    },
                    "AbstractModel.html#validate": {
                      "ref": "AbstractModel.html#validate",
                      "tf": 775
                    },
                    "AbstractModel.html#getValidationMessages": {
                      "ref": "AbstractModel.html#getValidationMessages",
                      "tf": 12.5
                    },
                    "ValidationFramework.html": {
                      "ref": "ValidationFramework.html",
                      "tf": 9.090909090909092
                    },
                    "ValidationFramework.html#supportsValidation": {
                      "ref": "ValidationFramework.html#supportsValidation",
                      "tf": 12.5
                    },
                    "ValidationFramework.html#validate": {
                      "ref": "ValidationFramework.html#validate",
                      "tf": 695.8333333333334
                    },
                    "ValidationFramework.html#getValidationMessages": {
                      "ref": "ValidationFramework.html#getValidationMessages",
                      "tf": 12.5
                    },
                    "ValidationFramework.html#generateSchema": {
                      "ref": "ValidationFramework.html#generateSchema",
                      "tf": 12.5
                    }
                  },
                  "r": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "n": {
                        "docs": {
                          "AbstractModel.html#isValid": {
                            "ref": "AbstractModel.html#isValid",
                            "tf": 4.166666666666666
                          }
                        }
                      }
                    }
                  },
                  "a": {
                    "docs": {},
                    "t": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "n": {
                            "docs": {},
                            "f": {
                              "docs": {},
                              "r": {
                                "docs": {},
                                "a": {
                                  "docs": {},
                                  "m": {
                                    "docs": {},
                                    "e": {
                                      "docs": {},
                                      "w": {
                                        "docs": {},
                                        "o": {
                                          "docs": {},
                                          "r": {
                                            "docs": {},
                                            "k": {
                                              "docs": {
                                                "ValidationFramework.html": {
                                                  "ref": "ValidationFramework.html",
                                                  "tf": 1900
                                                }
                                              },
                                              "#": {
                                                "docs": {},
                                                "s": {
                                                  "docs": {},
                                                  "u": {
                                                    "docs": {},
                                                    "p": {
                                                      "docs": {},
                                                      "p": {
                                                        "docs": {},
                                                        "o": {
                                                          "docs": {},
                                                          "r": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "s": {
                                                                "docs": {},
                                                                "v": {
                                                                  "docs": {},
                                                                  "a": {
                                                                    "docs": {},
                                                                    "l": {
                                                                      "docs": {},
                                                                      "i": {
                                                                        "docs": {},
                                                                        "d": {
                                                                          "docs": {
                                                                            "ValidationFramework.html#supportsValidation": {
                                                                              "ref": "ValidationFramework.html#supportsValidation",
                                                                              "tf": 1150
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "r": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "g": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "s": {
                                                          "docs": {},
                                                          "t": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "r": {
                                                                "docs": {},
                                                                "s": {
                                                                  "docs": {},
                                                                  "c": {
                                                                    "docs": {},
                                                                    "h": {
                                                                      "docs": {},
                                                                      "e": {
                                                                        "docs": {},
                                                                        "m": {
                                                                          "docs": {},
                                                                          "a": {
                                                                            "docs": {
                                                                              "ValidationFramework.html#registerSchema": {
                                                                                "ref": "ValidationFramework.html#registerSchema",
                                                                                "tf": 1150
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "g": {
                                                  "docs": {},
                                                  "e": {
                                                    "docs": {},
                                                    "t": {
                                                      "docs": {},
                                                      "s": {
                                                        "docs": {},
                                                        "c": {
                                                          "docs": {},
                                                          "h": {
                                                            "docs": {},
                                                            "e": {
                                                              "docs": {},
                                                              "m": {
                                                                "docs": {},
                                                                "a": {
                                                                  "docs": {
                                                                    "ValidationFramework.html#getSchema": {
                                                                      "ref": "ValidationFramework.html#getSchema",
                                                                      "tf": 1150
                                                                    },
                                                                    "ValidationFramework.html#getSchemas": {
                                                                      "ref": "ValidationFramework.html#getSchemas",
                                                                      "tf": 1150
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      },
                                                      "v": {
                                                        "docs": {},
                                                        "a": {
                                                          "docs": {},
                                                          "l": {
                                                            "docs": {},
                                                            "i": {
                                                              "docs": {},
                                                              "d": {
                                                                "docs": {},
                                                                "a": {
                                                                  "docs": {},
                                                                  "t": {
                                                                    "docs": {},
                                                                    "i": {
                                                                      "docs": {},
                                                                      "o": {
                                                                        "docs": {},
                                                                        "n": {
                                                                          "docs": {},
                                                                          "m": {
                                                                            "docs": {},
                                                                            "e": {
                                                                              "docs": {},
                                                                              "s": {
                                                                                "docs": {},
                                                                                "s": {
                                                                                  "docs": {},
                                                                                  "a": {
                                                                                    "docs": {},
                                                                                    "g": {
                                                                                      "docs": {
                                                                                        "ValidationFramework.html#getValidationMessages": {
                                                                                          "ref": "ValidationFramework.html#getValidationMessages",
                                                                                          "tf": 1150
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    },
                                                    "n": {
                                                      "docs": {},
                                                      "e": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "a": {
                                                            "docs": {},
                                                            "t": {
                                                              "docs": {},
                                                              "e": {
                                                                "docs": {},
                                                                "s": {
                                                                  "docs": {},
                                                                  "c": {
                                                                    "docs": {},
                                                                    "h": {
                                                                      "docs": {},
                                                                      "e": {
                                                                        "docs": {},
                                                                        "m": {
                                                                          "docs": {},
                                                                          "a": {
                                                                            "docs": {
                                                                              "ValidationFramework.html#generateSchema": {
                                                                                "ref": "ValidationFramework.html#generateSchema",
                                                                                "tf": 1150
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "c": {
                                                  "docs": {},
                                                  "l": {
                                                    "docs": {},
                                                    "e": {
                                                      "docs": {},
                                                      "a": {
                                                        "docs": {},
                                                        "r": {
                                                          "docs": {},
                                                          "s": {
                                                            "docs": {},
                                                            "c": {
                                                              "docs": {},
                                                              "h": {
                                                                "docs": {},
                                                                "e": {
                                                                  "docs": {},
                                                                  "m": {
                                                                    "docs": {},
                                                                    "a": {
                                                                      "docs": {
                                                                        "ValidationFramework.html#clearSchemas": {
                                                                          "ref": "ValidationFramework.html#clearSchemas",
                                                                          "tf": 1150
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                },
                                                "v": {
                                                  "docs": {},
                                                  "a": {
                                                    "docs": {},
                                                    "l": {
                                                      "docs": {},
                                                      "i": {
                                                        "docs": {},
                                                        "d": {
                                                          "docs": {
                                                            "ValidationFramework.html#validate": {
                                                              "ref": "ValidationFramework.html#validate",
                                                              "tf": 1150
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "e": {
              "docs": {},
              "w": {
                "docs": {
                  "AbstractModel.html#changedAttributes": {
                    "ref": "AbstractModel.html#changedAttributes",
                    "tf": 1.6666666666666667
                  }
                }
              }
            },
            "a": {
              "docs": {
                "Security.Entry.html": {
                  "ref": "Security.Entry.html",
                  "tf": 10
                },
                "Security.Client.OAUTH2Client.html#authorize": {
                  "ref": "Security.Client.OAUTH2Client.html#authorize",
                  "tf": 12.5
                },
                "Security.Client.OAUTH2Client.html#access": {
                  "ref": "Security.Client.OAUTH2Client.html#access",
                  "tf": 12.5
                },
                "ValidationFramework.html#validate": {
                  "ref": "ValidationFramework.html#validate",
                  "tf": 12.5
                },
                "ValidationFramework.html#getValidationMessages": {
                  "ref": "ValidationFramework.html#getValidationMessages",
                  "tf": 12.5
                },
                "ValidationFramework.html#generateSchema": {
                  "ref": "ValidationFramework.html#generateSchema",
                  "tf": 12.5
                }
              }
            }
          }
        },
        "j": {
          "docs": {},
          "s": {
            "docs": {},
            "o": {
              "docs": {},
              "n": {
                "docs": {
                  "AbstractCollection.html#toJSON": {
                    "ref": "AbstractCollection.html#toJSON",
                    "tf": 8.333333333333332
                  },
                  "AbstractModel.html#isValid": {
                    "ref": "AbstractModel.html#isValid",
                    "tf": 4.166666666666666
                  },
                  "Utility.AugmentedMap.html#toJSON": {
                    "ref": "Utility.AugmentedMap.html#toJSON",
                    "tf": 16.666666666666664
                  },
                  "Utility.AugmentedMap.html#toString": {
                    "ref": "Utility.AugmentedMap.html#toString",
                    "tf": 12.5
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "v": {
              "docs": {},
              "a": {
                "docs": {},
                "s": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "i": {
                        "docs": {},
                        "p": {
                          "docs": {},
                          "t": {
                            "docs": {
                              "AbstractCollection.html#add": {
                                "ref": "AbstractCollection.html#add",
                                "tf": 3.571428571428571
                              },
                              "CollectionIterator.html": {
                                "ref": "CollectionIterator.html",
                                "tf": 2.631578947368421
                              }
                            },
                            "'": {
                              "docs": {
                                "CollectionIterator.html": {
                                  "ref": "CollectionIterator.html",
                                  "tf": 2.631578947368421
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "o": {
          "docs": {},
          "b": {
            "docs": {},
            "j": {
              "docs": {},
              "e": {
                "docs": {},
                "c": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "AbstractCollection.html#add": {
                        "ref": "AbstractCollection.html#add",
                        "tf": 3.571428571428571
                      },
                      "AbstractCollection.html#get": {
                        "ref": "AbstractCollection.html#get",
                        "tf": 7.6923076923076925
                      },
                      "AbstractModel.html#set": {
                        "ref": "AbstractModel.html#set",
                        "tf": 2.631578947368421
                      },
                      "AbstractModel.html#changedAttributes": {
                        "ref": "AbstractModel.html#changedAttributes",
                        "tf": 3.3333333333333335
                      },
                      "Object.html": {
                        "ref": "Object.html",
                        "tf": 1900
                      },
                      "Security.Principal.html": {
                        "ref": "Security.Principal.html",
                        "tf": 7.142857142857142
                      },
                      "Utility.AugmentedMap.html#entries": {
                        "ref": "Utility.AugmentedMap.html#entries",
                        "tf": 12.5
                      },
                      "Utility.AugmentedMap.html#marshall": {
                        "ref": "Utility.AugmentedMap.html#marshall",
                        "tf": 5.555555555555555
                      },
                      "Utility.exports.Transformer.html": {
                        "ref": "Utility.exports.Transformer.html",
                        "tf": 11.11111111111111
                      },
                      "Augmented.Utility.BundleObject.html": {
                        "ref": "Augmented.Utility.BundleObject.html",
                        "tf": 10
                      },
                      "Utility.html#.sortObjects": {
                        "ref": "Utility.html#.sortObjects",
                        "tf": 20
                      }
                    },
                    "b": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "s": {
                          "docs": {
                            "Object.html": {
                              "ref": "Object.html",
                              "tf": 10
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "n": {
            "docs": {
              "AbstractCollection.html#clone": {
                "ref": "AbstractCollection.html#clone",
                "tf": 7.142857142857142
              },
              "AbstractModel.html#clone": {
                "ref": "AbstractModel.html#clone",
                "tf": 8.333333333333332
              },
              "Utility.html#.mergeSort": {
                "ref": "Utility.html#.mergeSort",
                "tf": 1.9230769230769231
              }
            },
            "e": {
              "docs": {},
              "s": {
                "docs": {},
                ",": {
                  "docs": {},
                  "r": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "m": {
                        "docs": {},
                        "o": {
                          "docs": {},
                          "v": {
                            "docs": {
                              "AbstractCollection.html#set": {
                                "ref": "AbstractCollection.html#set",
                                "tf": 1.8518518518518516
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              },
              ".": {
                "docs": {},
                "i": {
                  "docs": {},
                  "f": {
                    "docs": {
                      "AbstractModel.html#destroy": {
                        "ref": "AbstractModel.html#destroy",
                        "tf": 2.941176470588235
                      }
                    }
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "h": {
                "docs": {
                  "AbstractModel.html#parse": {
                    "ref": "AbstractModel.html#parse",
                    "tf": 3.8461538461538463
                  }
                }
              }
            }
          },
          "p": {
            "docs": {},
            "e": {
              "docs": {},
              "r": {
                "docs": {
                  "AbstractCollection.html#set": {
                    "ref": "AbstractCollection.html#set",
                    "tf": 1.8518518518518516
                  },
                  "AbstractCollection.html#reset": {
                    "ref": "AbstractCollection.html#reset",
                    "tf": 2.083333333333333
                  },
                  "CollectionIterator.html": {
                    "ref": "CollectionIterator.html",
                    "tf": 2.631578947368421
                  },
                  "AbstractModel.html#set": {
                    "ref": "AbstractModel.html#set",
                    "tf": 2.631578947368421
                  }
                }
              }
            },
            "t": {
              "docs": {},
              "i": {
                "docs": {},
                "m": {
                  "docs": {
                    "AbstractCollection.html#reset": {
                      "ref": "AbstractCollection.html#reset",
                      "tf": 2.083333333333333
                    }
                  }
                }
              }
            }
          },
          "u": {
            "docs": {},
            "t": {
              "docs": {
                "AbstractCollection.html#slice": {
                  "ref": "AbstractCollection.html#slice",
                  "tf": 8.333333333333332
                },
                "Augmented.Utility.MessageReader.html": {
                  "ref": "Augmented.Utility.MessageReader.html",
                  "tf": 12.5
                },
                "Augmented.Utility.MessageReader.html#.getMessage": {
                  "ref": "Augmented.Utility.MessageReader.html#.getMessage",
                  "tf": 2
                }
              }
            }
          },
          "r": {
            "docs": {},
            "d": {
              "docs": {},
              "e": {
                "docs": {},
                "r": {
                  "docs": {
                    "AbstractCollection.html#sort": {
                      "ref": "AbstractCollection.html#sort",
                      "tf": 2.941176470588235
                    },
                    "Utility.html#.mergeSort": {
                      "ref": "Utility.html#.mergeSort",
                      "tf": 3.125
                    }
                  }
                }
              }
            },
            "f": {
              "docs": {},
              "a": {
                "docs": {},
                "l": {
                  "docs": {},
                  "s": {
                    "docs": {
                      "AbstractModel.html#changedAttributes": {
                        "ref": "AbstractModel.html#changedAttributes",
                        "tf": 1.6666666666666667
                      }
                    }
                  }
                }
              }
            }
          },
          "v": {
            "docs": {},
            "e": {
              "docs": {},
              "r": {
                "docs": {},
                "r": {
                  "docs": {},
                  "i": {
                    "docs": {},
                    "d": {
                      "docs": {
                        "AbstractModel.html#url": {
                          "ref": "AbstractModel.html#url",
                          "tf": 4.166666666666666
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "a": {
            "docs": {},
            "u": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "2": {
                    "docs": {
                      "Security.Client.OAUTH2Client.html": {
                        "ref": "Security.Client.OAUTH2Client.html",
                        "tf": 25
                      }
                    },
                    "c": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "i": {
                          "docs": {},
                          "e": {
                            "docs": {},
                            "n": {
                              "docs": {},
                              "t": {
                                "docs": {
                                  "Security.Client.OAUTH2Client.html": {
                                    "ref": "Security.Client.OAUTH2Client.html",
                                    "tf": 600
                                  }
                                },
                                "#": {
                                  "docs": {},
                                  "a": {
                                    "docs": {},
                                    "u": {
                                      "docs": {},
                                      "t": {
                                        "docs": {},
                                        "h": {
                                          "docs": {},
                                          "o": {
                                            "docs": {},
                                            "r": {
                                              "docs": {
                                                "Security.Client.OAUTH2Client.html#authorize": {
                                                  "ref": "Security.Client.OAUTH2Client.html#authorize",
                                                  "tf": 75
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    },
                                    "c": {
                                      "docs": {},
                                      "c": {
                                        "docs": {},
                                        "e": {
                                          "docs": {},
                                          "s": {
                                            "docs": {},
                                            "s": {
                                              "docs": {
                                                "Security.Client.OAUTH2Client.html#access": {
                                                  "ref": "Security.Client.OAUTH2Client.html#access",
                                                  "tf": 75
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "docs": {
                    "Security.Client.OAUTH2Client.html#authorize": {
                      "ref": "Security.Client.OAUTH2Client.html#authorize",
                      "tf": 12.5
                    },
                    "Security.Client.OAUTH2Client.html#access": {
                      "ref": "Security.Client.OAUTH2Client.html#access",
                      "tf": 12.5
                    }
                  }
                }
              }
            }
          }
        },
        "w": {
          "docs": {},
          "a": {
            "docs": {},
            "n": {
              "docs": {},
              "t": {
                "docs": {
                  "AbstractCollection.html#reset": {
                    "ref": "AbstractCollection.html#reset",
                    "tf": 2.083333333333333
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "t": {
                "docs": {
                  "AbstractCollection.html#create": {
                    "ref": "AbstractCollection.html#create",
                    "tf": 2.941176470588235
                  },
                  "AbstractModel.html#destroy": {
                    "ref": "AbstractModel.html#destroy",
                    "tf": 5.88235294117647
                  }
                }
              }
            },
            "r": {
              "docs": {},
              "n": {
                "docs": {
                  "Logger.AbstractLogger.html#warn": {
                    "ref": "Logger.AbstractLogger.html#warn",
                    "tf": 662.5
                  }
                }
              }
            }
          },
          "i": {
            "docs": {},
            "t": {
              "docs": {},
              "h": {
                "docs": {},
                "o": {
                  "docs": {},
                  "u": {
                    "docs": {},
                    "t": {
                      "docs": {
                        "AbstractCollection.html#reset": {
                          "ref": "AbstractCollection.html#reset",
                          "tf": 2.083333333333333
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "e": {
            "docs": {},
            "w": {
              "docs": {},
              "a": {
                "docs": {},
                "i": {
                  "docs": {},
                  "t": {
                    "docs": {
                      "AbstractCollection.html#create": {
                        "ref": "AbstractCollection.html#create",
                        "tf": 2.941176470588235
                      }
                    }
                  }
                }
              }
            }
          },
          "h": {
            "docs": {},
            "a": {
              "docs": {},
              "t": {
                "docs": {},
                "p": {
                  "docs": {},
                  "a": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "t": {
                        "docs": {
                          "AbstractModel.html#changedAttributes": {
                            "ref": "AbstractModel.html#changedAttributes",
                            "tf": 1.6666666666666667
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "t": {
                "docs": {},
                "h": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "Utility.AugmentedMap.html#has": {
                          "ref": "Utility.AugmentedMap.html#has",
                          "tf": 10
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "r": {
            "docs": {},
            "a": {
              "docs": {},
              "p": {
                "docs": {},
                "p": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "r": {
                      "docs": {
                        "ValidationFramework.html": {
                          "ref": "ValidationFramework.html",
                          "tf": 4.545454545454546
                        }
                      }
                    }
                  }
                }
              }
            },
            "o": {
              "docs": {},
              "n": {
                "docs": {},
                "g": {
                  "docs": {
                    "Utility.html#.mergeSort": {
                      "ref": "Utility.html#.mergeSort",
                      "tf": 3.125
                    }
                  }
                }
              }
            }
          }
        },
        "q": {
          "docs": {},
          "u": {
            "docs": {},
            "o": {
              "docs": {},
              "t": {
                "docs": {},
                ";": {
                  "docs": {},
                  "c": {
                    "docs": {},
                    "r": {
                      "docs": {},
                      "e": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "&": {
                                "docs": {},
                                "q": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "AbstractCollection.html#save": {
                                            "ref": "AbstractCollection.html#save",
                                            "tf": 12.5
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    },
                    "h": {
                      "docs": {},
                      "a": {
                        "docs": {},
                        "n": {
                          "docs": {},
                          "g": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "&": {
                                "docs": {},
                                "q": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "AbstractModel.html#set": {
                                            "ref": "AbstractModel.html#set",
                                            "tf": 2.631578947368421
                                          },
                                          "AbstractModel.html#unset": {
                                            "ref": "AbstractModel.html#unset",
                                            "tf": 5
                                          },
                                          "AbstractModel.html#clear": {
                                            "ref": "AbstractModel.html#clear",
                                            "tf": 10
                                          },
                                          "AbstractModel.html#fetch": {
                                            "ref": "AbstractModel.html#fetch",
                                            "tf": 4.166666666666666
                                          },
                                          "AbstractModel.html#hasChanged": {
                                            "ref": "AbstractModel.html#hasChanged",
                                            "tf": 4.166666666666666
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "u": {
                    "docs": {},
                    "p": {
                      "docs": {},
                      "d": {
                        "docs": {},
                        "a": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "&": {
                                "docs": {},
                                "q": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "AbstractCollection.html#update": {
                                            "ref": "AbstractCollection.html#update",
                                            "tf": 12.5
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "d": {
                    "docs": {},
                    "e": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "t": {
                            "docs": {},
                            "e": {
                              "docs": {},
                              "&": {
                                "docs": {},
                                "q": {
                                  "docs": {},
                                  "u": {
                                    "docs": {},
                                    "o": {
                                      "docs": {},
                                      "t": {
                                        "docs": {
                                          "AbstractCollection.html#remove": {
                                            "ref": "AbstractCollection.html#remove",
                                            "tf": 12.5
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "r": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "l": {
                        "docs": {},
                        "e": {
                          "docs": {},
                          "&": {
                            "docs": {},
                            "q": {
                              "docs": {},
                              "u": {
                                "docs": {},
                                "o": {
                                  "docs": {},
                                  "t": {
                                    "docs": {
                                      "Augmented.Utility.MessageKeyFormatter.html": {
                                        "ref": "Augmented.Utility.MessageKeyFormatter.html",
                                        "tf": 2.7777777777777777
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "e": {
              "docs": {},
              "u": {
                "docs": {},
                "e": {
                  "docs": {
                    "Utility.AsynchronousQueue.html": {
                      "ref": "Utility.AsynchronousQueue.html",
                      "tf": 7.142857142857142
                    },
                    "Utility.AsynchronousQueue.html#timeout": {
                      "ref": "Utility.AsynchronousQueue.html#timeout",
                      "tf": 25
                    },
                    "Utility.AsynchronousQueue.html#queue": {
                      "ref": "Utility.AsynchronousQueue.html#queue",
                      "tf": 725
                    },
                    "Utility.AsynchronousQueue.html#add": {
                      "ref": "Utility.AsynchronousQueue.html#add",
                      "tf": 10
                    },
                    "Utility.AsynchronousQueue.html#clear": {
                      "ref": "Utility.AsynchronousQueue.html#clear",
                      "tf": 16.666666666666664
                    },
                    "Utility.AsynchronousQueue.html#process": {
                      "ref": "Utility.AsynchronousQueue.html#process",
                      "tf": 25
                    }
                  }
                }
              }
            },
            "i": {
              "docs": {},
              "c": {
                "docs": {},
                "k": {
                  "docs": {
                    "Utility.html#.QuickSort": {
                      "ref": "Utility.html#.QuickSort",
                      "tf": 12.5
                    }
                  },
                  "s": {
                    "docs": {},
                    "o": {
                      "docs": {},
                      "r": {
                        "docs": {},
                        "t": {
                          "docs": {
                            "Utility.html#.QuickSort": {
                              "ref": "Utility.html#.QuickSort",
                              "tf": 683.3333333333334
                            },
                            "Utility.html#.mergeSort": {
                              "ref": "Utility.html#.mergeSort",
                              "tf": 1.9230769230769231
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "y": {
          "docs": {},
          "o": {
            "docs": {},
            "u": {
              "docs": {},
              "'": {
                "docs": {},
                "r": {
                  "docs": {},
                  "e": {
                    "docs": {},
                    "u": {
                      "docs": {},
                      "s": {
                        "docs": {
                          "AbstractModel.html#url": {
                            "ref": "AbstractModel.html#url",
                            "tf": 4.166666666666666
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
      "length": 1608
    },
    "corpusTokens": [
      "abstract",
      "abstractcollect",
      "abstractcollection#add",
      "abstractcollection#at",
      "abstractcollection#clon",
      "abstractcollection#cr",
      "abstractcollection#entri",
      "abstractcollection#fetch",
      "abstractcollection#filt",
      "abstractcollection#find",
      "abstractcollection#findwher",
      "abstractcollection#get",
      "abstractcollection#getvalidationmessag",
      "abstractcollection#ha",
      "abstractcollection#isempti",
      "abstractcollection#isvalid",
      "abstractcollection#key",
      "abstractcollection#modelid",
      "abstractcollection#pars",
      "abstractcollection#pluck",
      "abstractcollection#pop",
      "abstractcollection#preiniti",
      "abstractcollection#push",
      "abstractcollection#remov",
      "abstractcollection#reset",
      "abstractcollection#s",
      "abstractcollection#sav",
      "abstractcollection#set",
      "abstractcollection#shift",
      "abstractcollection#slic",
      "abstractcollection#sort",
      "abstractcollection#sortbykey",
      "abstractcollection#supportsvalid",
      "abstractcollection#sync",
      "abstractcollection#tojson",
      "abstractcollection#tostr",
      "abstractcollection#unshift",
      "abstractcollection#upd",
      "abstractcollection#valid",
      "abstractcollection#valu",
      "abstractcollection#wher",
      "abstractlogg",
      "abstractlogger#debug",
      "abstractlogger#error",
      "abstractlogger#info",
      "abstractlogger#log",
      "abstractlogger#warn",
      "abstractmodel",
      "abstractmodel#changedattribut",
      "abstractmodel#clear",
      "abstractmodel#clon",
      "abstractmodel#destroy",
      "abstractmodel#escap",
      "abstractmodel#fetch",
      "abstractmodel#get",
      "abstractmodel#getvalidationmessag",
      "abstractmodel#ha",
      "abstractmodel#haschang",
      "abstractmodel#isempti",
      "abstractmodel#isnew",
      "abstractmodel#isvalid",
      "abstractmodel#match",
      "abstractmodel#pars",
      "abstractmodel#preiniti",
      "abstractmodel#previ",
      "abstractmodel#previousattribut",
      "abstractmodel#reset",
      "abstractmodel#sav",
      "abstractmodel#set",
      "abstractmodel#supportsvalid",
      "abstractmodel#sync",
      "abstractmodel#tojson",
      "abstractmodel#tostr",
      "abstractmodel#unset",
      "abstractmodel#upd",
      "abstractmodel#url",
      "abstractmodel#valid",
      "abstractsecuritycli",
      "abstractsecurityclient#typ",
      "abstractsecurityclient#uri",
      "access",
      "acl",
      "aclclient",
      "aclclient#authent",
      "ad",
      "add",
      "addpermiss",
      "adjac",
      "advanc",
      "afteriniti",
      "again",
      "against",
      "againstop",
      "agre",
      "algorithm",
      "allow",
      "along",
      "alreadi",
      "alway",
      "am/pm",
      "and/or",
      "anoth",
      "anycombin",
      "api",
      "app",
      "applic",
      "application#afteriniti",
      "application#beforeiniti",
      "application#datastor",
      "application#getmetadataitem",
      "application#initi",
      "application#metadata",
      "application#nam",
      "application#registerrout",
      "application#rout",
      "application#setmetadataitem",
      "application#start",
      "application#stop",
      "application.an",
      "application.appl",
      "application/service/modul",
      "arr",
      "array",
      "async",
      "asynchronousqueu",
      "asynchronousqueue#add",
      "asynchronousqueue#clear",
      "asynchronousqueue#process",
      "asynchronousqueue#queu",
      "asynchronousqueue#timeout",
      "attr",
      "attribut",
      "augment",
      "augmented.j",
      "augmented.security.contextus",
      "augmented.utility.asynchronousqueu",
      "augmented.utility.bundleobject",
      "augmented.utility.messagekeyformatt",
      "augmented.utility.messagekeyformatter.format",
      "augmented.utility.messagekeyformatterconcaten",
      "augmented.utility.messageread",
      "augmented.utility.messagereader.getmessag",
      "augmented.utility.resourcebundl",
      "augmented.utility.resourcebundle.getbundl",
      "augmented.utility.resourcebundle.getstr",
      "augmented.utility.schemageneratorgenr",
      "augmented.utility.stack",
      "augmented.utility.transform",
      "augmented.utility.transformertyp",
      "augmented.validationframework",
      "augmentedmap",
      "augmentedmap#clear",
      "augmentedmap#entri",
      "augmentedmap#foreach",
      "augmentedmap#get",
      "augmentedmap#ha",
      "augmentedmap#indexof",
      "augmentedmap#isempti",
      "augmentedmap#key",
      "augmentedmap#marshal",
      "augmentedmap#remov",
      "augmentedmap#s",
      "augmentedmap#set",
      "augmentedmap#tojson",
      "augmentedmap#tostr",
      "augmentedmap#valu",
      "augmented~logg",
      "augmented~secur",
      "authent",
      "authenticationfactori",
      "authenticationfactory.getsecuritycli",
      "author",
      "back",
      "base",
      "befor",
      "beforeiniti",
      "begin",
      "bemodel",
      "bepersist",
      "betweencollect",
      "binari",
      "bound",
      "bracketsloop",
      "browser",
      "build",
      "bulk",
      "bundl",
      "bundle(",
      "bundle.if",
      "bundleobject",
      "call",
      "case",
      "casesof",
      "chain",
      "chang",
      "changedattribut",
      "check",
      "cid",
      "cidproperti",
      "circumst",
      "class",
      "class.provid",
      "clear",
      "clearschema",
      "client",
      "client.aclcli",
      "client.aclclient#authent",
      "client.oauth2cli",
      "client.oauth2client#access",
      "client.oauth2client#author",
      "clienttyp",
      "clone",
      "collecion.sync",
      "collect",
      "collection.remov",
      "collection.s",
      "collection.sav",
      "collection.upd",
      "collectioniter",
      "collectioniterator#next",
      "collectiononc",
      "color",
      "colorconsolelogg",
      "compar",
      "compon",
      "configur",
      "consol",
      "consolelogg",
      "contain",
      "context",
      "context#addpermiss",
      "context#haspermiss",
      "context#permiss",
      "context#princip",
      "context#removepermiss",
      "context.context#addpermiss",
      "context.context#haspermiss",
      "context.context#permiss",
      "context.context#princip",
      "context.context#removepermiss",
      "convert",
      "core",
      "creat",
      "data",
      "datastor",
      "datatomarshal",
      "date",
      "debug",
      "default",
      "defin",
      "delet",
      "destroy",
      "determin",
      "develop",
      "diff",
      "differ",
      "document",
      "doesn't",
      "don&quot;t",
      "done",
      "dure",
      "each",
      "effici",
      "empti",
      "end",
      "endpointthat",
      "entir",
      "entri",
      "entry#addpermiss",
      "entry#haspermiss",
      "entry#isneg",
      "entry#permiss",
      "entry#removepermiss",
      "entry#setneg",
      "error",
      "es6",
      "escap",
      "event",
      "event.if",
      "ex",
      "exhaust",
      "exist",
      "exports.transform",
      "extend",
      "factori",
      "fallback",
      "fetch",
      "filter",
      "final",
      "find",
      "findwher",
      "finished.us",
      "fire",
      "firingani",
      "first",
      "flag",
      "fn",
      "follow",
      "forc",
      "foreach",
      "form",
      "format",
      "formatbinari",
      "formatd",
      "found",
      "framework",
      "full",
      "function",
      "futurecal",
      "generateschema",
      "get",
      "getbundl",
      "getlogg",
      "getmessag",
      "getmetadataitem",
      "getpermiss",
      "getprincip",
      "getschema",
      "getsecuritycli",
      "getstr",
      "getvalidationmessag",
      "given",
      "global",
      "granular",
      "halv",
      "handl",
      "haschang",
      "hash",
      "haspermiss",
      "heapsort",
      "hh:mm",
      "histori",
      "id",
      "ident",
      "identifi",
      "ignor",
      "immedi",
      "implement",
      "impliment",
      "index",
      "indexof",
      "individually,y",
      "info",
      "ing",
      "initi",
      "insert",
      "instanc",
      "interoper",
      "isempti",
      "ismiss",
      "isneg",
      "isnew",
      "isth",
      "isvalid",
      "item",
      "itemi",
      "iter",
      "itself",
      "javascript",
      "javascript'",
      "json",
      "key",
      "key/valu",
      "keywrap",
      "know",
      "lack",
      "larg",
      "last",
      "last&quot;change&quot",
      "less",
      "level",
      "librari",
      "librarieswhich",
      "list",
      "list:class",
      "list:modul",
      "list:namespac",
      "log",
      "logger",
      "logger.abstractlogg",
      "logger.abstractlogger#debug",
      "logger.abstractlogger#error",
      "logger.abstractlogger#info",
      "logger.abstractlogger#log",
      "logger.abstractlogger#warn",
      "logger.colorconsolelogg",
      "logger.consolelogg",
      "logger.loggerfactori",
      "logger.loggerfactory.getlogg",
      "loggerfactori",
      "loggerfactory.getlogg",
      "longer",
      "loop",
      "lt;abstract&gt",
      "lt;static&gt",
      "maintain",
      "map",
      "mapdatatomarshal",
      "marshal",
      "match",
      "member",
      "merg",
      "mergesort",
      "messag",
      "message.kind",
      "message.level",
      "messagekeyformatt",
      "messagekeyformatter.format",
      "messageread",
      "messagereader.getmessag",
      "metadata",
      "method",
      "mm/dd/yyyi",
      "model",
      "model#set,th",
      "model'",
      "model'sloc",
      "model'sst",
      "model,determin",
      "modelid",
      "modern",
      "modul",
      "module:aug",
      "module:augmented~logg",
      "module:augmented~secur",
      "more",
      "much",
      "name",
      "namespac",
      "necessari",
      "need",
      "neg",
      "negaiv",
      "never",
      "new",
      "next",
      "noopif",
      "normal",
      "notifyinganyon",
      "num",
      "number",
      "oauth",
      "oauth2",
      "oauth2client",
      "oauth2client#access",
      "oauth2client#author",
      "object",
      "objectbas",
      "on",
      "one.if",
      "ones,remov",
      "onth",
      "oper",
      "optim",
      "order",
      "orfals",
      "out",
      "overrid",
      "packag",
      "page",
      "pair",
      "pars",
      "parse:json",
      "part",
      "parti",
      "pass",
      "password",
      "path",
      "peek",
      "permiss",
      "persisted.optimist",
      "piec",
      "pluck",
      "pop",
      "portion",
      "posit",
      "pre",
      "precis",
      "preiniti",
      "present",
      "previou",
      "previous&quot;change&quot",
      "previousattribut",
      "pricip",
      "primit",
      "princip",
      "process",
      "properi",
      "properti",
      "protocol",
      "proxi",
      "pure",
      "push",
      "queue",
      "quick",
      "quicksort",
      "quot;change&quot",
      "quot;create&quot",
      "quot;delete&quot",
      "quot;rule&quot",
      "quot;update&quot",
      "raw",
      "re",
      "read",
      "readm",
      "real",
      "record",
      "recurs",
      "refer",
      "regist",
      "registerrout",
      "registerschema",
      "remov",
      "removepermiss",
      "repeatedli",
      "repres",
      "represent",
      "reset",
      "resourc",
      "resourcebundl",
      "resourcebundle.getbundl",
      "resourcebundle.getstr",
      "respond",
      "respons",
      "rest",
      "return",
      "rewrit",
      "role/privileg",
      "rout",
      "router",
      "save",
      "schema",
      "schemagener",
      "search",
      "secur",
      "security.authenticationfactori",
      "security.authenticationfactory.getsecuritycli",
      "security.cli",
      "security.client.aclcli",
      "security.client.aclclient#authent",
      "security.client.oauth2cli",
      "security.client.oauth2client#access",
      "security.client.oauth2client#author",
      "security.context",
      "security.context.context#addpermiss",
      "security.context.context#haspermiss",
      "security.context.context#permiss",
      "security.context.context#princip",
      "security.context.context#removepermiss",
      "security.entri",
      "security.entry#addpermiss",
      "security.entry#haspermiss",
      "security.entry#isneg",
      "security.entry#permiss",
      "security.entry#removepermiss",
      "security.entry#setneg",
      "security.princip",
      "server",
      "server.if",
      "set",
      "setmetadataitem",
      "setneg",
      "setpermiss",
      "shift",
      "similar",
      "simpl",
      "simpli",
      "singl",
      "size",
      "slice",
      "small",
      "sort",
      "sortbykey",
      "sortobject",
      "special",
      "specif",
      "specifi",
      "split",
      "squar",
      "stack",
      "stack#clear",
      "stack#empti",
      "stack#peek",
      "stack#pop",
      "stack#push",
      "stack#search",
      "stack#siz",
      "stack#toarray",
      "stack#tostr",
      "standard",
      "start",
      "startup",
      "state",
      "step",
      "stop",
      "storag",
      "string",
      "structur",
      "sub",
      "such",
      "support",
      "supportsvalid",
      "swap",
      "symbol",
      "sync",
      "thatalreadi",
      "thecollect",
      "thelast",
      "themodels&quot",
      "theus",
      "third",
      "through",
      "time",
      "time.it",
      "timeout",
      "toarray",
      "togeth",
      "tojson",
      "tostr",
      "track",
      "transform",
      "transformertyp",
      "trigger",
      "true",
      "tupl",
      "two",
      "type",
      "undefined.y",
      "undernorm",
      "underscore'",
      "uniqu",
      "unless",
      "unset",
      "unshift",
      "updat",
      "uri",
      "url",
      "us",
      "user",
      "usernam",
      "util",
      "utility.asynchronousqueu",
      "utility.asynchronousqueue#add",
      "utility.asynchronousqueue#clear",
      "utility.asynchronousqueue#process",
      "utility.asynchronousqueue#queu",
      "utility.asynchronousqueue#timeout",
      "utility.augmentedmap",
      "utility.augmentedmap#clear",
      "utility.augmentedmap#entri",
      "utility.augmentedmap#foreach",
      "utility.augmentedmap#get",
      "utility.augmentedmap#ha",
      "utility.augmentedmap#indexof",
      "utility.augmentedmap#isempti",
      "utility.augmentedmap#key",
      "utility.augmentedmap#marshal",
      "utility.augmentedmap#remov",
      "utility.augmentedmap#s",
      "utility.augmentedmap#set",
      "utility.augmentedmap#tojson",
      "utility.augmentedmap#tostr",
      "utility.augmentedmap#valu",
      "utility.bundleobject",
      "utility.exports.transform",
      "utility.formatbinari",
      "utility.formatd",
      "utility.mergesort",
      "utility.messagekeyformatt",
      "utility.messagekeyformatter.format",
      "utility.messageread",
      "utility.messagereader.getmessag",
      "utility.quicksort",
      "utility.resourcebundl",
      "utility.resourcebundle.getbundl",
      "utility.resourcebundle.getstr",
      "utility.schemagener",
      "utility.sortobject",
      "utility.stack",
      "utility.stack#clear",
      "utility.stack#empti",
      "utility.stack#peek",
      "utility.stack#pop",
      "utility.stack#push",
      "utility.stack#s",
      "utility.stack#search",
      "utility.stack#toarray",
      "utility.stack#tostr",
      "utility.transformertyp",
      "valid",
      "validationframework",
      "validationframework#clearschema",
      "validationframework#generateschema",
      "validationframework#getschema",
      "validationframework#getvalidationmessag",
      "validationframework#registerschema",
      "validationframework#supportsvalid",
      "validationframework#valid",
      "validrun",
      "valu",
      "via",
      "view",
      "wait",
      "want",
      "warn",
      "wewait",
      "whatpart",
      "whether",
      "without",
      "wrapper",
      "wrong",
      "you'reus"
    ],
    "pipeline": [
      "trimmer",
      "stopWordFilter",
      "stemmer"
    ]
  },
  "store": {
    "index.html": {
      "id": "index.html",
      "kind": "readme",
      "title": "Augmented.js",
      "longname": "index",
      "name": "Augmented.js",
      "tags": "index",
      "summary": "Augmented.js Next - Simply Development.",
      "description": "",
      "body": ""
    },
    "global.html": {
      "id": "global.html",
      "kind": "global",
      "title": "Globals",
      "longname": "global",
      "name": "Globals",
      "tags": "global",
      "summary": "All documented globals.",
      "description": "",
      "body": ""
    },
    "list_class.html": {
      "id": "list_class.html",
      "kind": "list",
      "title": "Classes",
      "longname": "list:class",
      "name": "Classes",
      "tags": "list:class",
      "summary": "All documented classes.",
      "description": "",
      "body": ""
    },
    "list_module.html": {
      "id": "list_module.html",
      "kind": "list",
      "title": "Modules",
      "longname": "list:module",
      "name": "Modules",
      "tags": "list:module",
      "summary": "All documented modules.",
      "description": "",
      "body": ""
    },
    "list_namespace.html": {
      "id": "list_namespace.html",
      "kind": "list",
      "title": "Namespaces",
      "longname": "list:namespace",
      "name": "Namespaces",
      "tags": "list:namespace",
      "summary": "All documented namespaces.",
      "description": "",
      "body": ""
    },
    "Application.html": {
      "id": "Application.html",
      "kind": "class",
      "title": "Application",
      "longname": "Application",
      "name": "Application",
      "tags": "Application",
      "summary": "",
      "description": "Application Class for use to define an application.An application contains metadata and initializers for the application.Applications track history, and normally would contain the entire single page App startup.",
      "body": ""
    },
    "Application.html#started": {
      "id": "Application.html#started",
      "kind": "member",
      "title": "started",
      "longname": "Application#started",
      "name": "started",
      "tags": "Application#started started",
      "summary": "",
      "description": "The started property of the application"
    },
    "Application.html#name": {
      "id": "Application.html#name",
      "kind": "member",
      "title": "name",
      "longname": "Application#name",
      "name": "name",
      "tags": "Application#name name",
      "summary": "",
      "description": "The application name"
    },
    "Application.html#metadata": {
      "id": "Application.html#metadata",
      "kind": "member",
      "title": "metadata",
      "longname": "Application#metadata",
      "name": "metadata",
      "tags": "Application#metadata metadata",
      "summary": "",
      "description": "The metadata map"
    },
    "Application.html#datastore": {
      "id": "Application.html#datastore",
      "kind": "member",
      "title": "datastore",
      "longname": "Application#datastore",
      "name": "datastore",
      "tags": "Application#datastore datastore",
      "summary": "",
      "description": "Gets the datastore for the application"
    },
    "Application.html#router": {
      "id": "Application.html#router",
      "kind": "member",
      "title": "router",
      "longname": "Application#router",
      "name": "router",
      "tags": "Application#router router",
      "summary": "",
      "description": "The router property of the application"
    },
    "Application.html#initialize": {
      "id": "Application.html#initialize",
      "kind": "function",
      "title": "initialize()",
      "longname": "Application#initialize",
      "name": "initialize",
      "tags": "Application#initialize initialize",
      "summary": "",
      "description": "Event for after during startup of the application"
    },
    "Application.html#beforeInitialize": {
      "id": "Application.html#beforeInitialize",
      "kind": "function",
      "title": "beforeInitialize()",
      "longname": "Application#beforeInitialize",
      "name": "beforeInitialize",
      "tags": "Application#beforeInitialize beforeInitialize",
      "summary": "",
      "description": "Event for before the startup of the application"
    },
    "Application.html#afterInitialize": {
      "id": "Application.html#afterInitialize",
      "kind": "function",
      "title": "afterInitialize()",
      "longname": "Application#afterInitialize",
      "name": "afterInitialize",
      "tags": "Application#afterInitialize afterInitialize",
      "summary": "",
      "description": "Event for after the startup of the application"
    },
    "Application.html#setMetadataItem": {
      "id": "Application.html#setMetadataItem",
      "kind": "function",
      "title": "setMetadataItem( key, value )",
      "longname": "Application#setMetadataItem",
      "name": "setMetadataItem",
      "tags": "Application#setMetadataItem setMetadataItem",
      "summary": "",
      "description": "Set a specific item in metadata"
    },
    "Application.html#getMetadataItem": {
      "id": "Application.html#getMetadataItem",
      "kind": "function",
      "title": "getMetadataItem( key )",
      "longname": "Application#getMetadataItem",
      "name": "getMetadataItem",
      "tags": "Application#getMetadataItem getMetadataItem",
      "summary": "",
      "description": "Get a specific item in metadata"
    },
    "Application.html#registerRouter": {
      "id": "Application.html#registerRouter",
      "kind": "function",
      "title": "registerRouter( router )",
      "longname": "Application#registerRouter",
      "name": "registerRouter",
      "tags": "Application#registerRouter registerRouter",
      "summary": "",
      "description": "Register a Router - adds routes to the application"
    },
    "Application.html#start": {
      "id": "Application.html#start",
      "kind": "function",
      "title": "start()",
      "longname": "Application#start",
      "name": "start",
      "tags": "Application#start start",
      "summary": "",
      "description": "Event to start the application and history"
    },
    "Application.html#stop": {
      "id": "Application.html#stop",
      "kind": "function",
      "title": "stop()",
      "longname": "Application#stop",
      "name": "stop",
      "tags": "Application#stop stop",
      "summary": "",
      "description": "Event to stop the application and history"
    },
    "AbstractCollection.html": {
      "id": "AbstractCollection.html",
      "kind": "class",
      "title": "AbstractCollection",
      "longname": "AbstractCollection",
      "name": "AbstractCollection",
      "tags": "AbstractCollection",
      "summary": "",
      "description": "Abstract Augmented Collection Supports: Validation and Schemas Security",
      "body": ""
    },
    "AbstractCollection.html#preinitialize": {
      "id": "AbstractCollection.html#preinitialize",
      "kind": "function",
      "title": "preinitialize()",
      "longname": "AbstractCollection#preinitialize",
      "name": "preinitialize",
      "tags": "AbstractCollection#preinitialize preinitialize",
      "summary": "",
      "description": "Validation Message property"
    },
    "AbstractCollection.html#toJSON": {
      "id": "AbstractCollection.html#toJSON",
      "kind": "function",
      "title": "toJSON()",
      "longname": "AbstractCollection#toJSON",
      "name": "toJSON",
      "tags": "AbstractCollection#toJSON toJSON",
      "summary": "",
      "description": "The JSON representation of a Collection is an array of themodels&quot; attributes."
    },
    "AbstractCollection.html#add": {
      "id": "AbstractCollection.html#add",
      "kind": "function",
      "title": "add()",
      "longname": "AbstractCollection#add",
      "name": "add",
      "tags": "AbstractCollection#add add",
      "summary": "",
      "description": "Add a model, or list of models to the set. models may beModels or raw JavaScript objects to be converted to Models, or anycombination of the two."
    },
    "AbstractCollection.html#remove": {
      "id": "AbstractCollection.html#remove",
      "kind": "function",
      "title": "remove()",
      "longname": "AbstractCollection#remove",
      "name": "remove",
      "tags": "AbstractCollection#remove remove",
      "summary": "",
      "description": "Collection.remove - Remove from the collection as a &quot;delete&quot;"
    },
    "AbstractCollection.html#set": {
      "id": "AbstractCollection.html#set",
      "kind": "function",
      "title": "set()",
      "longname": "AbstractCollection#set",
      "name": "set",
      "tags": "AbstractCollection#set set",
      "summary": "",
      "description": "Update a collection by set-ing a new list of models, adding new ones,removing models that are no longer present, and merging models thatalready exist in the collection, as necessary. Similar to Model#set,the core operation for updating the data contained by the collection."
    },
    "AbstractCollection.html#reset": {
      "id": "AbstractCollection.html#reset",
      "kind": "function",
      "title": "reset()",
      "longname": "AbstractCollection#reset",
      "name": "reset",
      "tags": "AbstractCollection#reset reset",
      "summary": "",
      "description": "When you have more items than you want to add or remove individually,you can reset the entire set with a new list of models, without firingany granular add or remove events. Fires reset when finished.Useful for bulk operations and optimizations."
    },
    "AbstractCollection.html#push": {
      "id": "AbstractCollection.html#push",
      "kind": "function",
      "title": "push()",
      "longname": "AbstractCollection#push",
      "name": "push",
      "tags": "AbstractCollection#push push",
      "summary": "",
      "description": "Add a model to the end of the collection."
    },
    "AbstractCollection.html#pop": {
      "id": "AbstractCollection.html#pop",
      "kind": "function",
      "title": "pop()",
      "longname": "AbstractCollection#pop",
      "name": "pop",
      "tags": "AbstractCollection#pop pop",
      "summary": "",
      "description": "Remove a model from the end of the collection."
    },
    "AbstractCollection.html#unshift": {
      "id": "AbstractCollection.html#unshift",
      "kind": "function",
      "title": "unshift()",
      "longname": "AbstractCollection#unshift",
      "name": "unshift",
      "tags": "AbstractCollection#unshift unshift",
      "summary": "",
      "description": "Add a model to the beginning of the collection."
    },
    "AbstractCollection.html#shift": {
      "id": "AbstractCollection.html#shift",
      "kind": "function",
      "title": "shift()",
      "longname": "AbstractCollection#shift",
      "name": "shift",
      "tags": "AbstractCollection#shift shift",
      "summary": "",
      "description": "Remove a model from the beginning of the collection."
    },
    "AbstractCollection.html#slice": {
      "id": "AbstractCollection.html#slice",
      "kind": "function",
      "title": "slice()",
      "longname": "AbstractCollection#slice",
      "name": "slice",
      "tags": "AbstractCollection#slice slice",
      "summary": "",
      "description": "Slice out a sub-array of models from the collection."
    },
    "AbstractCollection.html#get": {
      "id": "AbstractCollection.html#get",
      "kind": "function",
      "title": "get()",
      "longname": "AbstractCollection#get",
      "name": "get",
      "tags": "AbstractCollection#get get",
      "summary": "",
      "description": "Get a model from the set by id, cid, model object with id or cidproperties, or an attributes object that is transformed through modelId."
    },
    "AbstractCollection.html#has": {
      "id": "AbstractCollection.html#has",
      "kind": "function",
      "title": "has()",
      "longname": "AbstractCollection#has",
      "name": "has",
      "tags": "AbstractCollection#has has",
      "summary": "",
      "description": "Returns true if the model is in the collection."
    },
    "AbstractCollection.html#at": {
      "id": "AbstractCollection.html#at",
      "kind": "function",
      "title": "at()",
      "longname": "AbstractCollection#at",
      "name": "at",
      "tags": "AbstractCollection#at at",
      "summary": "",
      "description": "Get the model at the given index."
    },
    "AbstractCollection.html#find": {
      "id": "AbstractCollection.html#find",
      "kind": "function",
      "title": "find( attrs )",
      "longname": "AbstractCollection#find",
      "name": "find",
      "tags": "AbstractCollection#find find",
      "summary": "",
      "description": "find the model that matches these properties"
    },
    "AbstractCollection.html#filter": {
      "id": "AbstractCollection.html#filter",
      "kind": "function",
      "title": "filter( attrs )",
      "longname": "AbstractCollection#filter",
      "name": "filter",
      "tags": "AbstractCollection#filter filter",
      "summary": "",
      "description": "filter the models that match these properties"
    },
    "AbstractCollection.html#where": {
      "id": "AbstractCollection.html#where",
      "kind": "function",
      "title": "where( attrs )",
      "longname": "AbstractCollection#where",
      "name": "where",
      "tags": "AbstractCollection#where where",
      "summary": "",
      "description": "Return models with matching attributes. Useful for simple cases of filter."
    },
    "AbstractCollection.html#findWhere": {
      "id": "AbstractCollection.html#findWhere",
      "kind": "function",
      "title": "findWhere()",
      "longname": "AbstractCollection#findWhere",
      "name": "findWhere",
      "tags": "AbstractCollection#findWhere findWhere",
      "summary": "",
      "description": "Return the first model with matching attributes. Useful for simple casesof find."
    },
    "AbstractCollection.html#sort": {
      "id": "AbstractCollection.html#sort",
      "kind": "function",
      "title": "sort()",
      "longname": "AbstractCollection#sort",
      "name": "sort",
      "tags": "AbstractCollection#sort sort",
      "summary": "",
      "description": "Force the collection to re-sort itself. You don&quot;t need to call this undernormal circumstances, as the set will maintain sort order as each itemis added."
    },
    "AbstractCollection.html#pluck": {
      "id": "AbstractCollection.html#pluck",
      "kind": "function",
      "title": "pluck()",
      "longname": "AbstractCollection#pluck",
      "name": "pluck",
      "tags": "AbstractCollection#pluck pluck",
      "summary": "",
      "description": "Pluck an attribute from each model in the collection."
    },
    "AbstractCollection.html#fetch": {
      "id": "AbstractCollection.html#fetch",
      "kind": "function",
      "title": "fetch()",
      "longname": "AbstractCollection#fetch",
      "name": "fetch",
      "tags": "AbstractCollection#fetch fetch",
      "summary": "",
      "description": "Fetch the collection"
    },
    "AbstractCollection.html#create": {
      "id": "AbstractCollection.html#create",
      "kind": "function",
      "title": "create()",
      "longname": "AbstractCollection#create",
      "name": "create",
      "tags": "AbstractCollection#create create",
      "summary": "",
      "description": "Create a new instance of a model in this collection. Add the model to thecollection immediately, unless wait: true is passed, in which case wewait for the server to agree."
    },
    "AbstractCollection.html#parse": {
      "id": "AbstractCollection.html#parse",
      "kind": "function",
      "title": "parse()",
      "longname": "AbstractCollection#parse",
      "name": "parse",
      "tags": "AbstractCollection#parse parse",
      "summary": "",
      "description": "*parse** converts a response into a list of models to be added to thecollection. The default implementation is just to pass it through."
    },
    "AbstractCollection.html#clone": {
      "id": "AbstractCollection.html#clone",
      "kind": "function",
      "title": "clone()",
      "longname": "AbstractCollection#clone",
      "name": "clone",
      "tags": "AbstractCollection#clone clone",
      "summary": "",
      "description": "Create a new collection with an identical list of models as this one."
    },
    "AbstractCollection.html#modelId": {
      "id": "AbstractCollection.html#modelId",
      "kind": "function",
      "title": "modelId()",
      "longname": "AbstractCollection#modelId",
      "name": "modelId",
      "tags": "AbstractCollection#modelId modelId",
      "summary": "",
      "description": "Define how to uniquely identify models in the collection."
    },
    "AbstractCollection.html#values": {
      "id": "AbstractCollection.html#values",
      "kind": "function",
      "title": "values()",
      "longname": "AbstractCollection#values",
      "name": "values",
      "tags": "AbstractCollection#values values",
      "summary": "",
      "description": "Get an iterator of all models in this collection."
    },
    "AbstractCollection.html#keys": {
      "id": "AbstractCollection.html#keys",
      "kind": "function",
      "title": "keys()",
      "longname": "AbstractCollection#keys",
      "name": "keys",
      "tags": "AbstractCollection#keys keys",
      "summary": "",
      "description": "Get an iterator of all model IDs in this collection."
    },
    "AbstractCollection.html#entries": {
      "id": "AbstractCollection.html#entries",
      "kind": "function",
      "title": "entries()",
      "longname": "AbstractCollection#entries",
      "name": "entries",
      "tags": "AbstractCollection#entries entries",
      "summary": "",
      "description": "Get an iterator of all [ID, model] tuples in this collection."
    },
    "AbstractCollection.html#supportsValidation": {
      "id": "AbstractCollection.html#supportsValidation",
      "kind": "function",
      "title": "supportsValidation()",
      "longname": "AbstractCollection#supportsValidation",
      "name": "supportsValidation",
      "tags": "AbstractCollection#supportsValidation supportsValidation",
      "summary": "",
      "description": "supportsValidation - Returns True if this collection supports validation"
    },
    "AbstractCollection.html#isValid": {
      "id": "AbstractCollection.html#isValid",
      "kind": "function",
      "title": "isValid()",
      "longname": "AbstractCollection#isValid",
      "name": "isValid",
      "tags": "AbstractCollection#isValid isValid",
      "summary": "",
      "description": "isValid - Returns True if this collection is valid"
    },
    "AbstractCollection.html#getValidationMessages": {
      "id": "AbstractCollection.html#getValidationMessages",
      "kind": "function",
      "title": "getValidationMessages()",
      "longname": "AbstractCollection#getValidationMessages",
      "name": "getValidationMessages",
      "tags": "AbstractCollection#getValidationMessages getValidationMessages",
      "summary": "",
      "description": "getValidationMessages - Returns the validation messages"
    },
    "AbstractCollection.html#validate": {
      "id": "AbstractCollection.html#validate",
      "kind": "function",
      "title": "validate()",
      "longname": "AbstractCollection#validate",
      "name": "validate",
      "tags": "AbstractCollection#validate validate",
      "summary": "",
      "description": "Validates the collection"
    },
    "AbstractCollection.html#sync": {
      "id": "AbstractCollection.html#sync",
      "kind": "function",
      "title": "sync()",
      "longname": "AbstractCollection#sync",
      "name": "sync",
      "tags": "AbstractCollection#sync sync",
      "summary": "",
      "description": "Collecion.sync"
    },
    "AbstractCollection.html#save": {
      "id": "AbstractCollection.html#save",
      "kind": "function",
      "title": "save()",
      "longname": "AbstractCollection#save",
      "name": "save",
      "tags": "AbstractCollection#save save",
      "summary": "",
      "description": "Collection.save - Saves the collection as a &quot;create&quot;"
    },
    "AbstractCollection.html#update": {
      "id": "AbstractCollection.html#update",
      "kind": "function",
      "title": "update()",
      "longname": "AbstractCollection#update",
      "name": "update",
      "tags": "AbstractCollection#update update",
      "summary": "",
      "description": "Collection.update - Updates the collection as an &quot;update&quot;"
    },
    "AbstractCollection.html#sortByKey": {
      "id": "AbstractCollection.html#sortByKey",
      "kind": "function",
      "title": "sortByKey( key )",
      "longname": "AbstractCollection#sortByKey",
      "name": "sortByKey",
      "tags": "AbstractCollection#sortByKey sortByKey",
      "summary": "",
      "description": "sortByKey - Sorts the collection by a property key"
    },
    "AbstractCollection.html#isEmpty": {
      "id": "AbstractCollection.html#isEmpty",
      "kind": "function",
      "title": "isEmpty()",
      "longname": "AbstractCollection#isEmpty",
      "name": "isEmpty",
      "tags": "AbstractCollection#isEmpty isEmpty",
      "summary": "",
      "description": "isEmpty - returns true is the collection is empty"
    },
    "AbstractCollection.html#size": {
      "id": "AbstractCollection.html#size",
      "kind": "function",
      "title": "size()",
      "longname": "AbstractCollection#size",
      "name": "size",
      "tags": "AbstractCollection#size size",
      "summary": "",
      "description": "Collection.size - returns the size of the collection"
    },
    "AbstractCollection.html#toString": {
      "id": "AbstractCollection.html#toString",
      "kind": "function",
      "title": "toString()",
      "longname": "AbstractCollection#toString",
      "name": "toString",
      "tags": "AbstractCollection#toString toString",
      "summary": "",
      "description": "toString - returns the collection data as a string"
    },
    "CollectionIterator.html": {
      "id": "CollectionIterator.html",
      "kind": "class",
      "title": "CollectionIterator",
      "longname": "CollectionIterator",
      "name": "CollectionIterator",
      "tags": "CollectionIterator",
      "summary": "",
      "description": "A CollectionIterator implements JavaScript's Iterator protocol, allowing theuse of for of loops in modern browsers and interoperation betweenCollection and other JavaScript functions and third-party librarieswhich can operate on Iterables.",
      "body": ""
    },
    "CollectionIterator.html#next": {
      "id": "CollectionIterator.html#next",
      "kind": "function",
      "title": "next()",
      "longname": "CollectionIterator#next",
      "name": "next",
      "tags": "CollectionIterator#next next",
      "summary": "",
      "description": "Next model in collectionOnce exhausted, remove the reference to the collection so futurecalls to the next method always return done."
    },
    "Logger.AbstractLogger.html": {
      "id": "Logger.AbstractLogger.html",
      "kind": "class",
      "title": "&lt;abstract&gt; AbstractLogger",
      "longname": "Logger.AbstractLogger",
      "name": "AbstractLogger",
      "tags": "Logger.AbstractLogger AbstractLogger",
      "summary": "",
      "description": "Augmented Abstract Logger",
      "body": ""
    },
    "Logger.AbstractLogger.html#log": {
      "id": "Logger.AbstractLogger.html#log",
      "kind": "function",
      "title": "log( message, level )",
      "longname": "Logger.AbstractLogger#log",
      "name": "log",
      "tags": "Logger.AbstractLogger#log AbstractLogger#log log",
      "summary": "",
      "description": "log a message"
    },
    "Logger.AbstractLogger.html#info": {
      "id": "Logger.AbstractLogger.html#info",
      "kind": "function",
      "title": "info( message )",
      "longname": "Logger.AbstractLogger#info",
      "name": "info",
      "tags": "Logger.AbstractLogger#info AbstractLogger#info info",
      "summary": "",
      "description": "Logs a message in info level"
    },
    "Logger.AbstractLogger.html#error": {
      "id": "Logger.AbstractLogger.html#error",
      "kind": "function",
      "title": "error( message )",
      "longname": "Logger.AbstractLogger#error",
      "name": "error",
      "tags": "Logger.AbstractLogger#error AbstractLogger#error error",
      "summary": "",
      "description": "Log a message in error level"
    },
    "Logger.AbstractLogger.html#debug": {
      "id": "Logger.AbstractLogger.html#debug",
      "kind": "function",
      "title": "debug( message )",
      "longname": "Logger.AbstractLogger#debug",
      "name": "debug",
      "tags": "Logger.AbstractLogger#debug AbstractLogger#debug debug",
      "summary": "",
      "description": "Log a message in debug level"
    },
    "Logger.AbstractLogger.html#warn": {
      "id": "Logger.AbstractLogger.html#warn",
      "kind": "function",
      "title": "warn( message )",
      "longname": "Logger.AbstractLogger#warn",
      "name": "warn",
      "tags": "Logger.AbstractLogger#warn AbstractLogger#warn warn",
      "summary": "",
      "description": "Log a message in warn level"
    },
    "Logger.ColorConsoleLogger.html": {
      "id": "Logger.ColorConsoleLogger.html",
      "kind": "class",
      "title": "ColorConsoleLogger",
      "longname": "Logger.ColorConsoleLogger",
      "name": "ColorConsoleLogger",
      "tags": "Logger.ColorConsoleLogger ColorConsoleLogger",
      "summary": "",
      "description": "Color Console Logger",
      "body": ""
    },
    "Logger.ConsoleLogger.html": {
      "id": "Logger.ConsoleLogger.html",
      "kind": "class",
      "title": "ConsoleLogger",
      "longname": "Logger.ConsoleLogger",
      "name": "ConsoleLogger",
      "tags": "Logger.ConsoleLogger ConsoleLogger",
      "summary": "",
      "description": "Console Logger",
      "body": ""
    },
    "Logger.LoggerFactory.html": {
      "id": "Logger.LoggerFactory.html",
      "kind": "class",
      "title": "LoggerFactory",
      "longname": "Logger.LoggerFactory",
      "name": "LoggerFactory",
      "tags": "Logger.LoggerFactory LoggerFactory",
      "summary": "",
      "description": "A logger factory for creating a logger instance",
      "body": ""
    },
    "Logger.LoggerFactory.html#.getLogger": {
      "id": "Logger.LoggerFactory.html#.getLogger",
      "kind": "function",
      "title": "&lt;static&gt; getLogger( type, level )",
      "longname": "Logger.LoggerFactory.getLogger",
      "name": "getLogger",
      "tags": "Logger.LoggerFactory.getLogger LoggerFactory.getLogger getLogger",
      "summary": "",
      "description": "getLogger - get an instance of a logger"
    },
    "AbstractModel.html": {
      "id": "AbstractModel.html",
      "kind": "class",
      "title": "AbstractModel",
      "longname": "AbstractModel",
      "name": "AbstractModel",
      "tags": "AbstractModel",
      "summary": "",
      "description": "AbstractModel Supports: Validation and Schemas Security",
      "body": ""
    },
    "AbstractModel.html#preinitialize": {
      "id": "AbstractModel.html#preinitialize",
      "kind": "function",
      "title": "preinitialize()",
      "longname": "AbstractModel#preinitialize",
      "name": "preinitialize",
      "tags": "AbstractModel#preinitialize preinitialize",
      "summary": "",
      "description": "Validation Message property"
    },
    "AbstractModel.html#get": {
      "id": "AbstractModel.html#get",
      "kind": "function",
      "title": "get()",
      "longname": "AbstractModel#get",
      "name": "get",
      "tags": "AbstractModel#get get",
      "summary": "",
      "description": "Get the attribute form the Model"
    },
    "AbstractModel.html#set": {
      "id": "AbstractModel.html#set",
      "kind": "function",
      "title": "set()",
      "longname": "AbstractModel#set",
      "name": "set",
      "tags": "AbstractModel#set set",
      "summary": "",
      "description": "Set a hash of model attributes on the object, firing &quot;change&quot;. This isthe core primitive operation of a model, updating the data and notifyinganyone who needs to know about the change in state."
    },
    "AbstractModel.html#escape": {
      "id": "AbstractModel.html#escape",
      "kind": "function",
      "title": "escape()",
      "longname": "AbstractModel#escape",
      "name": "escape",
      "tags": "AbstractModel#escape escape",
      "summary": "",
      "description": "Escape the attribute data"
    },
    "AbstractModel.html#has": {
      "id": "AbstractModel.html#has",
      "kind": "function",
      "title": "has()",
      "longname": "AbstractModel#has",
      "name": "has",
      "tags": "AbstractModel#has has",
      "summary": "",
      "description": "Has an attribute in the Model"
    },
    "AbstractModel.html#matches": {
      "id": "AbstractModel.html#matches",
      "kind": "function",
      "title": "matches()",
      "longname": "AbstractModel#matches",
      "name": "matches",
      "tags": "AbstractModel#matches matches",
      "summary": "",
      "description": "Special-cased proxy to underscore's matches method."
    },
    "AbstractModel.html#unset": {
      "id": "AbstractModel.html#unset",
      "kind": "function",
      "title": "unset()",
      "longname": "AbstractModel#unset",
      "name": "unset",
      "tags": "AbstractModel#unset unset",
      "summary": "",
      "description": "Remove an attribute from the model, firing &quot;change&quot;. unset is a noopif the attribute doesn't exist."
    },
    "AbstractModel.html#clear": {
      "id": "AbstractModel.html#clear",
      "kind": "function",
      "title": "clear()",
      "longname": "AbstractModel#clear",
      "name": "clear",
      "tags": "AbstractModel#clear clear",
      "summary": "",
      "description": "Clear all attributes on the model, firing &quot;change&quot;."
    },
    "AbstractModel.html#toJSON": {
      "id": "AbstractModel.html#toJSON",
      "kind": "function",
      "title": "toJSON()",
      "longname": "AbstractModel#toJSON",
      "name": "toJSON",
      "tags": "AbstractModel#toJSON toJSON",
      "summary": "",
      "description": "Transforms model to pure toJSON"
    },
    "AbstractModel.html#fetch": {
      "id": "AbstractModel.html#fetch",
      "kind": "function",
      "title": "fetch()",
      "longname": "AbstractModel#fetch",
      "name": "fetch",
      "tags": "AbstractModel#fetch fetch",
      "summary": "",
      "description": "fetch - Fetches the model as a 'get'"
    },
    "AbstractModel.html#save": {
      "id": "AbstractModel.html#save",
      "kind": "function",
      "title": "save()",
      "longname": "AbstractModel#save",
      "name": "save",
      "tags": "AbstractModel#save save",
      "summary": "",
      "description": "save - Saves the model as a 'create'"
    },
    "AbstractModel.html#destroy": {
      "id": "AbstractModel.html#destroy",
      "kind": "function",
      "title": "destroy()",
      "longname": "AbstractModel#destroy",
      "name": "destroy",
      "tags": "AbstractModel#destroy destroy",
      "summary": "",
      "description": "destroy - Deletes the model as a 'delete'"
    },
    "AbstractModel.html#url": {
      "id": "AbstractModel.html#url",
      "kind": "function",
      "title": "url()",
      "longname": "AbstractModel#url",
      "name": "url",
      "tags": "AbstractModel#url url",
      "summary": "",
      "description": "Default URL for the model's representation on the server -- if you'reusing restful methods, override this to change the endpointthat will be called."
    },
    "AbstractModel.html#parse": {
      "id": "AbstractModel.html#parse",
      "kind": "function",
      "title": "parse()",
      "longname": "AbstractModel#parse",
      "name": "parse",
      "tags": "AbstractModel#parse parse",
      "summary": "",
      "description": "*parse** converts a response into the hash of attributes to be set onthe model. The default implementation is just to pass the response along."
    },
    "AbstractModel.html#clone": {
      "id": "AbstractModel.html#clone",
      "kind": "function",
      "title": "clone()",
      "longname": "AbstractModel#clone",
      "name": "clone",
      "tags": "AbstractModel#clone clone",
      "summary": "",
      "description": "Create a new model with identical attributes to this one."
    },
    "AbstractModel.html#isNew": {
      "id": "AbstractModel.html#isNew",
      "kind": "function",
      "title": "isNew()",
      "longname": "AbstractModel#isNew",
      "name": "isNew",
      "tags": "AbstractModel#isNew isNew",
      "summary": "",
      "description": "A model is new if it has never been saved to the server, and lacks an id."
    },
    "AbstractModel.html#hasChanged": {
      "id": "AbstractModel.html#hasChanged",
      "kind": "function",
      "title": "hasChanged()",
      "longname": "AbstractModel#hasChanged",
      "name": "hasChanged",
      "tags": "AbstractModel#hasChanged hasChanged",
      "summary": "",
      "description": "Determine if the model has changed since the last &quot;change&quot; event.If you specify an attribute name, determine if that attribute has changed."
    },
    "AbstractModel.html#changedAttributes": {
      "id": "AbstractModel.html#changedAttributes",
      "kind": "function",
      "title": "changedAttributes()",
      "longname": "AbstractModel#changedAttributes",
      "name": "changedAttributes",
      "tags": "AbstractModel#changedAttributes changedAttributes",
      "summary": "",
      "description": "Return an object containing all the attributes that have changed, orfalse if there are no changed attributes. Useful for determining whatparts of a view need to be updated and/or what attributes need to bepersisted to the server. Unset attributes will be set to undefined.You can also pass an attributes object to diff against the model,determining if there would be a change."
    },
    "AbstractModel.html#previous": {
      "id": "AbstractModel.html#previous",
      "kind": "function",
      "title": "previous()",
      "longname": "AbstractModel#previous",
      "name": "previous",
      "tags": "AbstractModel#previous previous",
      "summary": "",
      "description": "Get the previous value of an attribute, recorded at the time the last&quot;change&quot; event was fired."
    },
    "AbstractModel.html#previousAttributes": {
      "id": "AbstractModel.html#previousAttributes",
      "kind": "function",
      "title": "previousAttributes()",
      "longname": "AbstractModel#previousAttributes",
      "name": "previousAttributes",
      "tags": "AbstractModel#previousAttributes previousAttributes",
      "summary": "",
      "description": "Get all of the attributes of the model at the time of the previous&quot;change&quot; event."
    },
    "AbstractModel.html#supportsValidation": {
      "id": "AbstractModel.html#supportsValidation",
      "kind": "function",
      "title": "supportsValidation()",
      "longname": "AbstractModel#supportsValidation",
      "name": "supportsValidation",
      "tags": "AbstractModel#supportsValidation supportsValidation",
      "summary": "",
      "description": "supportsValidation - Returns True if this model supports validation"
    },
    "AbstractModel.html#isValid": {
      "id": "AbstractModel.html#isValid",
      "kind": "function",
      "title": "isValid()",
      "longname": "AbstractModel#isValid",
      "name": "isValid",
      "tags": "AbstractModel#isValid isValid",
      "summary": "",
      "description": "isValid - Returns True if this model is validRuns two level validation, attribute-level then JSON Schema"
    },
    "AbstractModel.html#validate": {
      "id": "AbstractModel.html#validate",
      "kind": "function",
      "title": "validate()",
      "longname": "AbstractModel#validate",
      "name": "validate",
      "tags": "AbstractModel#validate validate",
      "summary": "",
      "description": "Validates the model"
    },
    "AbstractModel.html#getValidationMessages": {
      "id": "AbstractModel.html#getValidationMessages",
      "kind": "function",
      "title": "getValidationMessages()",
      "longname": "AbstractModel#getValidationMessages",
      "name": "getValidationMessages",
      "tags": "AbstractModel#getValidationMessages getValidationMessages",
      "summary": "",
      "description": "Gets the validation messages only in an array"
    },
    "AbstractModel.html#sync": {
      "id": "AbstractModel.html#sync",
      "kind": "function",
      "title": "sync()",
      "longname": "AbstractModel#sync",
      "name": "sync",
      "tags": "AbstractModel#sync sync",
      "summary": "",
      "description": "Sync model data to bound REST call"
    },
    "AbstractModel.html#reset": {
      "id": "AbstractModel.html#reset",
      "kind": "function",
      "title": "reset( data )",
      "longname": "AbstractModel#reset",
      "name": "reset",
      "tags": "AbstractModel#reset reset",
      "summary": "",
      "description": "reset - clear and rewrite the model with passed data"
    },
    "AbstractModel.html#isEmpty": {
      "id": "AbstractModel.html#isEmpty",
      "kind": "function",
      "title": "isEmpty()",
      "longname": "AbstractModel#isEmpty",
      "name": "isEmpty",
      "tags": "AbstractModel#isEmpty isEmpty",
      "summary": "",
      "description": "isEmpty - returns true is the model is empty"
    },
    "AbstractModel.html#toString": {
      "id": "AbstractModel.html#toString",
      "kind": "function",
      "title": "toString()",
      "longname": "AbstractModel#toString",
      "name": "toString",
      "tags": "AbstractModel#toString toString",
      "summary": "",
      "description": "toString - returns the model data as a string"
    },
    "AbstractModel.html#update": {
      "id": "AbstractModel.html#update",
      "kind": "function",
      "title": "update()",
      "longname": "AbstractModel#update",
      "name": "update",
      "tags": "AbstractModel#update update",
      "summary": "",
      "description": "update - Updates the model as a 'update'"
    },
    "Object.html": {
      "id": "Object.html",
      "kind": "class",
      "title": "Object",
      "longname": "Object",
      "name": "Object",
      "tags": "Object",
      "summary": "",
      "description": "Augmented ObjectBase class for other classes to extend from",
      "body": ""
    },
    "AbstractSecurityClient.html": {
      "id": "AbstractSecurityClient.html",
      "kind": "class",
      "title": "AbstractSecurityClient",
      "longname": "AbstractSecurityClient",
      "name": "AbstractSecurityClient",
      "tags": "AbstractSecurityClient",
      "summary": "",
      "description": "The abstract Security Client - for use to extend your own",
      "body": ""
    },
    "AbstractSecurityClient.html#uri": {
      "id": "AbstractSecurityClient.html#uri",
      "kind": "member",
      "title": "uri",
      "longname": "AbstractSecurityClient#uri",
      "name": "uri",
      "tags": "AbstractSecurityClient#uri uri",
      "summary": "",
      "description": ""
    },
    "AbstractSecurityClient.html#type": {
      "id": "AbstractSecurityClient.html#type",
      "kind": "member",
      "title": "type",
      "longname": "AbstractSecurityClient#type",
      "name": "type",
      "tags": "AbstractSecurityClient#type type",
      "summary": "",
      "description": ""
    },
    "Security.Client.ACLClient.html": {
      "id": "Security.Client.ACLClient.html",
      "kind": "class",
      "title": ".Client.ACLClient",
      "longname": "Security.Client.ACLClient",
      "name": "ACLClient",
      "tags": "Security.Client.ACLClient Client.ACLClient ACLClient",
      "summary": "",
      "description": "Role/Privilege (ACL) Security",
      "body": ""
    },
    "Security.Client.ACLClient.html#authenticate": {
      "id": "Security.Client.ACLClient.html#authenticate",
      "kind": "function",
      "title": "authenticate( username, password )",
      "longname": "Security.Client.ACLClient#authenticate",
      "name": "authenticate",
      "tags": "Security.Client.ACLClient#authenticate Client.ACLClient#authenticate ACLClient#authenticate authenticate",
      "summary": "",
      "description": "authenticate the user"
    },
    "Security.AuthenticationFactory.html": {
      "id": "Security.AuthenticationFactory.html",
      "kind": "class",
      "title": "AuthenticationFactory",
      "longname": "Security.AuthenticationFactory",
      "name": "AuthenticationFactory",
      "tags": "Security.AuthenticationFactory AuthenticationFactory",
      "summary": "",
      "description": "AuthenticationFactory Class -Returns a client of given type for use with security",
      "body": ""
    },
    "Security.AuthenticationFactory.html#.getSecurityClient": {
      "id": "Security.AuthenticationFactory.html#.getSecurityClient",
      "kind": "function",
      "title": "&lt;static&gt; getSecurityClient( clientType )",
      "longname": "Security.AuthenticationFactory.getSecurityClient",
      "name": "getSecurityClient",
      "tags": "Security.AuthenticationFactory.getSecurityClient AuthenticationFactory.getSecurityClient getSecurityClient",
      "summary": "",
      "description": "Get an instance of a security client"
    },
    "Security.Context.html": {
      "id": "Security.Context.html",
      "kind": "class",
      "title": "Context",
      "longname": "Security.Context",
      "name": "Context",
      "tags": "Security.Context Context",
      "summary": "",
      "description": "Augmented.Security.ContextUsed as a security data storage class",
      "body": ""
    },
    "Security.Context.html#.Context#principal": {
      "id": "Security.Context.html#.Context#principal",
      "kind": "member",
      "title": "&lt;static&gt; Context#principal",
      "longname": "Security.Context.Context#principal",
      "name": "Context#principal",
      "tags": "Security.Context.Context#principal Context.Context#principal Context#principal principal",
      "summary": "",
      "description": "getPrincipal - get the principal of this context"
    },
    "Security.Context.html#.Context#permissions": {
      "id": "Security.Context.html#.Context#permissions",
      "kind": "member",
      "title": "&lt;static&gt; Context#permissions",
      "longname": "Security.Context.Context#permissions",
      "name": "Context#permissions",
      "tags": "Security.Context.Context#permissions Context.Context#permissions Context#permissions permissions",
      "summary": "",
      "description": "setPermissions - Set all permissions for a principal"
    },
    "Security.Context.html#.Context#addPermission": {
      "id": "Security.Context.html#.Context#addPermission",
      "kind": "function",
      "title": "&lt;static&gt; Context#addPermission( permission )",
      "longname": "Security.Context.Context#addPermission",
      "name": "Context#addPermission",
      "tags": "Security.Context.Context#addPermission Context.Context#addPermission Context#addPermission addPermission",
      "summary": "",
      "description": "addPermission - Add a new permission for a principal"
    },
    "Security.Context.html#.Context#removePermission": {
      "id": "Security.Context.html#.Context#removePermission",
      "kind": "function",
      "title": "&lt;static&gt; Context#removePermission( permission )",
      "longname": "Security.Context.Context#removePermission",
      "name": "Context#removePermission",
      "tags": "Security.Context.Context#removePermission Context.Context#removePermission Context#removePermission removePermission",
      "summary": "",
      "description": "removePermission - Remove a permission for a principal"
    },
    "Security.Context.html#.Context#hasPermission": {
      "id": "Security.Context.html#.Context#hasPermission",
      "kind": "function",
      "title": "&lt;static&gt; Context#hasPermission( permission )",
      "longname": "Security.Context.Context#hasPermission",
      "name": "Context#hasPermission",
      "tags": "Security.Context.Context#hasPermission Context.Context#hasPermission Context#hasPermission hasPermission",
      "summary": "",
      "description": "hasPermission - checks for a permission for this principal"
    },
    "Security.Entry.html": {
      "id": "Security.Entry.html",
      "kind": "class",
      "title": "Entry",
      "longname": "Security.Entry",
      "name": "Entry",
      "tags": "Security.Entry Entry",
      "summary": "",
      "description": "Used to secure a resource via permissions",
      "body": ""
    },
    "Security.Entry.html#permissions": {
      "id": "Security.Entry.html#permissions",
      "kind": "member",
      "title": "permissions",
      "longname": "Security.Entry#permissions",
      "name": "permissions",
      "tags": "Security.Entry#permissions Entry#permissions permissions",
      "summary": "",
      "description": "Sets the permissions"
    },
    "Security.Entry.html#isNegative": {
      "id": "Security.Entry.html#isNegative",
      "kind": "function",
      "title": "isNegative()",
      "longname": "Security.Entry#isNegative",
      "name": "isNegative",
      "tags": "Security.Entry#isNegative Entry#isNegative isNegative",
      "summary": "",
      "description": "Negative flag"
    },
    "Security.Entry.html#addPermission": {
      "id": "Security.Entry.html#addPermission",
      "kind": "function",
      "title": "addPermission( permission )",
      "longname": "Security.Entry#addPermission",
      "name": "addPermission",
      "tags": "Security.Entry#addPermission Entry#addPermission addPermission",
      "summary": "",
      "description": "Add a permission"
    },
    "Security.Entry.html#removePermission": {
      "id": "Security.Entry.html#removePermission",
      "kind": "function",
      "title": "removePermission( permission )",
      "longname": "Security.Entry#removePermission",
      "name": "removePermission",
      "tags": "Security.Entry#removePermission Entry#removePermission removePermission",
      "summary": "",
      "description": "Remove a permission"
    },
    "Security.Entry.html#hasPermission": {
      "id": "Security.Entry.html#hasPermission",
      "kind": "function",
      "title": "hasPermission( permission )",
      "longname": "Security.Entry#hasPermission",
      "name": "hasPermission",
      "tags": "Security.Entry#hasPermission Entry#hasPermission hasPermission",
      "summary": "",
      "description": "Returns if this entry has a permission"
    },
    "Security.Entry.html#setNegative": {
      "id": "Security.Entry.html#setNegative",
      "kind": "function",
      "title": "setNegative( negative )",
      "longname": "Security.Entry#setNegative",
      "name": "setNegative",
      "tags": "Security.Entry#setNegative Entry#setNegative setNegative",
      "summary": "",
      "description": "Sets this entry negaive or positive"
    },
    "Security.Client.OAUTH2Client.html": {
      "id": "Security.Client.OAUTH2Client.html",
      "kind": "class",
      "title": ".Client.OAUTH2Client",
      "longname": "Security.Client.OAUTH2Client",
      "name": "OAUTH2Client",
      "tags": "Security.Client.OAUTH2Client Client.OAUTH2Client OAUTH2Client",
      "summary": "",
      "description": "The OAUTH2 Client",
      "body": ""
    },
    "Security.Client.OAUTH2Client.html#authorize": {
      "id": "Security.Client.OAUTH2Client.html#authorize",
      "kind": "function",
      "title": "authorize( name )",
      "longname": "Security.Client.OAUTH2Client#authorize",
      "name": "authorize",
      "tags": "Security.Client.OAUTH2Client#authorize Client.OAUTH2Client#authorize OAUTH2Client#authorize authorize",
      "summary": "",
      "description": "Authorize the application/service/module via OAUTH"
    },
    "Security.Client.OAUTH2Client.html#access": {
      "id": "Security.Client.OAUTH2Client.html#access",
      "kind": "function",
      "title": "access( principal )",
      "longname": "Security.Client.OAUTH2Client#access",
      "name": "access",
      "tags": "Security.Client.OAUTH2Client#access Client.OAUTH2Client#access OAUTH2Client#access access",
      "summary": "",
      "description": "access the application/service/module via OAUTH"
    },
    "Security.Principal.html": {
      "id": "Security.Principal.html",
      "kind": "class",
      "title": "Principal",
      "longname": "Security.Principal",
      "name": "Principal",
      "tags": "Security.Principal Principal",
      "summary": "",
      "description": "Pricipal object for use in security as part of the abstract implimentation",
      "body": ""
    },
    "Utility.AugmentedMap.html": {
      "id": "Utility.AugmentedMap.html",
      "kind": "class",
      "title": "Utility.AugmentedMap",
      "longname": "Utility.AugmentedMap",
      "name": "AugmentedMap",
      "tags": "Utility.AugmentedMap AugmentedMap",
      "summary": "",
      "description": "ES6-like Map - than can marshall",
      "body": ""
    },
    "Utility.AugmentedMap.html#set": {
      "id": "Utility.AugmentedMap.html#set",
      "kind": "function",
      "title": "set( key, value )",
      "longname": "Utility.AugmentedMap#set",
      "name": "set",
      "tags": "Utility.AugmentedMap#set AugmentedMap#set set",
      "summary": "",
      "description": "Set the value by key in the map"
    },
    "Utility.AugmentedMap.html#get": {
      "id": "Utility.AugmentedMap.html#get",
      "kind": "function",
      "title": "get( key )",
      "longname": "Utility.AugmentedMap#get",
      "name": "get",
      "tags": "Utility.AugmentedMap#get AugmentedMap#get get",
      "summary": "",
      "description": "Get the value by key in the map"
    },
    "Utility.AugmentedMap.html#indexOf": {
      "id": "Utility.AugmentedMap.html#indexOf",
      "kind": "function",
      "title": "indexOf( key )",
      "longname": "Utility.AugmentedMap#indexOf",
      "name": "indexOf",
      "tags": "Utility.AugmentedMap#indexOf AugmentedMap#indexOf indexOf",
      "summary": "",
      "description": "Index of the key in the map"
    },
    "Utility.AugmentedMap.html#remove": {
      "id": "Utility.AugmentedMap.html#remove",
      "kind": "function",
      "title": "remove( key )",
      "longname": "Utility.AugmentedMap#remove",
      "name": "remove",
      "tags": "Utility.AugmentedMap#remove AugmentedMap#remove remove",
      "summary": "",
      "description": "Remove the value by key in the map"
    },
    "Utility.AugmentedMap.html#has": {
      "id": "Utility.AugmentedMap.html#has",
      "kind": "function",
      "title": "has( key )",
      "longname": "Utility.AugmentedMap#has",
      "name": "has",
      "tags": "Utility.AugmentedMap#has AugmentedMap#has has",
      "summary": "",
      "description": "Has returns whether a key exists in the map"
    },
    "Utility.AugmentedMap.html#forEach": {
      "id": "Utility.AugmentedMap.html#forEach",
      "kind": "function",
      "title": "forEach( fn )",
      "longname": "Utility.AugmentedMap#forEach",
      "name": "forEach",
      "tags": "Utility.AugmentedMap#forEach AugmentedMap#forEach forEach",
      "summary": "",
      "description": "Iterator forEach key to value in the map"
    },
    "Utility.AugmentedMap.html#key": {
      "id": "Utility.AugmentedMap.html#key",
      "kind": "function",
      "title": "key( i )",
      "longname": "Utility.AugmentedMap#key",
      "name": "key",
      "tags": "Utility.AugmentedMap#key AugmentedMap#key key",
      "summary": "",
      "description": "Get the key for the index in the map"
    },
    "Utility.AugmentedMap.html#entries": {
      "id": "Utility.AugmentedMap.html#entries",
      "kind": "function",
      "title": "entries()",
      "longname": "Utility.AugmentedMap#entries",
      "name": "entries",
      "tags": "Utility.AugmentedMap#entries AugmentedMap#entries entries",
      "summary": "",
      "description": "The entries value object in the map"
    },
    "Utility.AugmentedMap.html#values": {
      "id": "Utility.AugmentedMap.html#values",
      "kind": "function",
      "title": "values()",
      "longname": "Utility.AugmentedMap#values",
      "name": "values",
      "tags": "Utility.AugmentedMap#values AugmentedMap#values values",
      "summary": "",
      "description": "The values in the map as an Array"
    },
    "Utility.AugmentedMap.html#clear": {
      "id": "Utility.AugmentedMap.html#clear",
      "kind": "function",
      "title": "clear()",
      "longname": "Utility.AugmentedMap#clear",
      "name": "clear",
      "tags": "Utility.AugmentedMap#clear AugmentedMap#clear clear",
      "summary": "",
      "description": "Clear the map"
    },
    "Utility.AugmentedMap.html#size": {
      "id": "Utility.AugmentedMap.html#size",
      "kind": "function",
      "title": "size()",
      "longname": "Utility.AugmentedMap#size",
      "name": "size",
      "tags": "Utility.AugmentedMap#size AugmentedMap#size size",
      "summary": "",
      "description": "The size of the map in keys"
    },
    "Utility.AugmentedMap.html#toJSON": {
      "id": "Utility.AugmentedMap.html#toJSON",
      "kind": "function",
      "title": "toJSON()",
      "longname": "Utility.AugmentedMap#toJSON",
      "name": "toJSON",
      "tags": "Utility.AugmentedMap#toJSON AugmentedMap#toJSON toJSON",
      "summary": "",
      "description": "Represent the map in JSON"
    },
    "Utility.AugmentedMap.html#toString": {
      "id": "Utility.AugmentedMap.html#toString",
      "kind": "function",
      "title": "toString()",
      "longname": "Utility.AugmentedMap#toString",
      "name": "toString",
      "tags": "Utility.AugmentedMap#toString AugmentedMap#toString toString",
      "summary": "",
      "description": "Represent the map in a String of JSON"
    },
    "Utility.AugmentedMap.html#isEmpty": {
      "id": "Utility.AugmentedMap.html#isEmpty",
      "kind": "function",
      "title": "isEmpty()",
      "longname": "Utility.AugmentedMap#isEmpty",
      "name": "isEmpty",
      "tags": "Utility.AugmentedMap#isEmpty AugmentedMap#isEmpty isEmpty",
      "summary": "",
      "description": "Checks of the map is empty (not ES6)"
    },
    "Utility.AugmentedMap.html#marshall": {
      "id": "Utility.AugmentedMap.html#marshall",
      "kind": "function",
      "title": "marshall( dataToMarshall )",
      "longname": "Utility.AugmentedMap#marshall",
      "name": "marshall",
      "tags": "Utility.AugmentedMap#marshall AugmentedMap#marshall marshall",
      "summary": "",
      "description": "Marshalls a mapdataToMarshall must be the following type of data to parse:JSON object with properties (key/value)"
    },
    "Utility.AsynchronousQueue.html": {
      "id": "Utility.AsynchronousQueue.html",
      "kind": "class",
      "title": "Utility.AsynchronousQueue",
      "longname": "Utility.AsynchronousQueue",
      "name": "AsynchronousQueue",
      "tags": "Utility.AsynchronousQueue AsynchronousQueue",
      "summary": "",
      "description": "Augmented.Utility.AsynchronousQueue -An Async queue for handling async chained functions",
      "body": ""
    },
    "Utility.AsynchronousQueue.html#timeout": {
      "id": "Utility.AsynchronousQueue.html#timeout",
      "kind": "member",
      "title": "timeout",
      "longname": "Utility.AsynchronousQueue#timeout",
      "name": "timeout",
      "tags": "Utility.AsynchronousQueue#timeout AsynchronousQueue#timeout timeout",
      "summary": "",
      "description": "Get the timeout for the queue"
    },
    "Utility.AsynchronousQueue.html#queue": {
      "id": "Utility.AsynchronousQueue.html#queue",
      "kind": "member",
      "title": "queue",
      "longname": "Utility.AsynchronousQueue#queue",
      "name": "queue",
      "tags": "Utility.AsynchronousQueue#queue AsynchronousQueue#queue queue",
      "summary": "",
      "description": "Get the full queue"
    },
    "Utility.AsynchronousQueue.html#add": {
      "id": "Utility.AsynchronousQueue.html#add",
      "kind": "function",
      "title": "add()",
      "longname": "Utility.AsynchronousQueue#add",
      "name": "add",
      "tags": "Utility.AsynchronousQueue#add AsynchronousQueue#add add",
      "summary": "",
      "description": "Add method for adding processes to the queue"
    },
    "Utility.AsynchronousQueue.html#clear": {
      "id": "Utility.AsynchronousQueue.html#clear",
      "kind": "function",
      "title": "clear()",
      "longname": "Utility.AsynchronousQueue#clear",
      "name": "clear",
      "tags": "Utility.AsynchronousQueue#clear AsynchronousQueue#clear clear",
      "summary": "",
      "description": "Clear all processes in the queue"
    },
    "Utility.AsynchronousQueue.html#process": {
      "id": "Utility.AsynchronousQueue.html#process",
      "kind": "function",
      "title": "process()",
      "longname": "Utility.AsynchronousQueue#process",
      "name": "process",
      "tags": "Utility.AsynchronousQueue#process AsynchronousQueue#process process",
      "summary": "",
      "description": "Process the queue"
    },
    "Utility.Stack.html": {
      "id": "Utility.Stack.html",
      "kind": "class",
      "title": "Utility.Stack",
      "longname": "Utility.Stack",
      "name": "Stack",
      "tags": "Utility.Stack Stack",
      "summary": "",
      "description": "Augmented.Utility.Stack -Standard Stack data structure",
      "body": ""
    },
    "Utility.Stack.html#empty": {
      "id": "Utility.Stack.html#empty",
      "kind": "function",
      "title": "empty()",
      "longname": "Utility.Stack#empty",
      "name": "empty",
      "tags": "Utility.Stack#empty Stack#empty empty",
      "summary": "",
      "description": "The empty method clears the stack"
    },
    "Utility.Stack.html#peek": {
      "id": "Utility.Stack.html#peek",
      "kind": "function",
      "title": "peek()",
      "longname": "Utility.Stack#peek",
      "name": "peek",
      "tags": "Utility.Stack#peek Stack#peek peek",
      "summary": "",
      "description": "The peek method returns the first in the stack"
    },
    "Utility.Stack.html#pop": {
      "id": "Utility.Stack.html#pop",
      "kind": "function",
      "title": "pop()",
      "longname": "Utility.Stack#pop",
      "name": "pop",
      "tags": "Utility.Stack#pop Stack#pop pop",
      "summary": "",
      "description": "The pop method returns and removes the first in the stack"
    },
    "Utility.Stack.html#push": {
      "id": "Utility.Stack.html#push",
      "kind": "function",
      "title": "push( item )",
      "longname": "Utility.Stack#push",
      "name": "push",
      "tags": "Utility.Stack#push Stack#push push",
      "summary": "",
      "description": "The push method adds to the stack"
    },
    "Utility.Stack.html#search": {
      "id": "Utility.Stack.html#search",
      "kind": "function",
      "title": "search()",
      "longname": "Utility.Stack#search",
      "name": "search",
      "tags": "Utility.Stack#search Stack#search search",
      "summary": "",
      "description": "The search method returns where in the stack an item exists"
    },
    "Utility.Stack.html#size": {
      "id": "Utility.Stack.html#size",
      "kind": "function",
      "title": "size()",
      "longname": "Utility.Stack#size",
      "name": "size",
      "tags": "Utility.Stack#size Stack#size size",
      "summary": "",
      "description": "The size method returns the size of the stack"
    },
    "Utility.Stack.html#clear": {
      "id": "Utility.Stack.html#clear",
      "kind": "function",
      "title": "clear()",
      "longname": "Utility.Stack#clear",
      "name": "clear",
      "tags": "Utility.Stack#clear Stack#clear clear",
      "summary": "",
      "description": "The clear method clears the stack"
    },
    "Utility.Stack.html#toArray": {
      "id": "Utility.Stack.html#toArray",
      "kind": "function",
      "title": "toArray()",
      "longname": "Utility.Stack#toArray",
      "name": "toArray",
      "tags": "Utility.Stack#toArray Stack#toArray toArray",
      "summary": "",
      "description": "The toArray method returns the stack as an array"
    },
    "Utility.Stack.html#toString": {
      "id": "Utility.Stack.html#toString",
      "kind": "function",
      "title": "toString()",
      "longname": "Utility.Stack#toString",
      "name": "toString",
      "tags": "Utility.Stack#toString Stack#toString toString",
      "summary": "",
      "description": "The toString method returns the stack as an string"
    },
    "Utility.exports.Transformer.html": {
      "id": "Utility.exports.Transformer.html",
      "kind": "class",
      "title": "Utility.exports.Transformer",
      "longname": "Utility.exports.Transformer",
      "name": "exports.Transformer",
      "tags": "Utility.exports.Transformer exports.Transformer Transformer",
      "summary": "",
      "description": "Augmented.Utility.Transformer Transform an object, type, or array to another type, object, or array",
      "body": ""
    },
    "ValidationFramework.html": {
      "id": "ValidationFramework.html",
      "kind": "class",
      "title": "ValidationFramework",
      "longname": "ValidationFramework",
      "name": "ValidationFramework",
      "tags": "ValidationFramework",
      "summary": "",
      "description": "Augmented.ValidationFramework -The Validation Framework Base Wrapper Class.Provides abstraction for base validation build-in library",
      "body": ""
    },
    "ValidationFramework.html#supportsValidation": {
      "id": "ValidationFramework.html#supportsValidation",
      "kind": "function",
      "title": "supportsValidation()",
      "longname": "ValidationFramework#supportsValidation",
      "name": "supportsValidation",
      "tags": "ValidationFramework#supportsValidation supportsValidation",
      "summary": "",
      "description": "Returns if the framework supports validation"
    },
    "ValidationFramework.html#registerSchema": {
      "id": "ValidationFramework.html#registerSchema",
      "kind": "function",
      "title": "registerSchema( identity, schema )",
      "longname": "ValidationFramework#registerSchema",
      "name": "registerSchema",
      "tags": "ValidationFramework#registerSchema registerSchema",
      "summary": "",
      "description": "Registers a schema to the Framework"
    },
    "ValidationFramework.html#getSchema": {
      "id": "ValidationFramework.html#getSchema",
      "kind": "function",
      "title": "getSchema( identity )",
      "longname": "ValidationFramework#getSchema",
      "name": "getSchema",
      "tags": "ValidationFramework#getSchema getSchema",
      "summary": "",
      "description": "Gets a schema"
    },
    "ValidationFramework.html#getSchemas": {
      "id": "ValidationFramework.html#getSchemas",
      "kind": "function",
      "title": "getSchemas()",
      "longname": "ValidationFramework#getSchemas",
      "name": "getSchemas",
      "tags": "ValidationFramework#getSchemas getSchemas",
      "summary": "",
      "description": "Gets all schemas"
    },
    "ValidationFramework.html#clearSchemas": {
      "id": "ValidationFramework.html#clearSchemas",
      "kind": "function",
      "title": "clearSchemas()",
      "longname": "ValidationFramework#clearSchemas",
      "name": "clearSchemas",
      "tags": "ValidationFramework#clearSchemas clearSchemas",
      "summary": "",
      "description": "Clears all schemas"
    },
    "ValidationFramework.html#validate": {
      "id": "ValidationFramework.html#validate",
      "kind": "function",
      "title": "validate( data, schema )",
      "longname": "ValidationFramework#validate",
      "name": "validate",
      "tags": "ValidationFramework#validate validate",
      "summary": "",
      "description": "Validates data via a schema"
    },
    "ValidationFramework.html#getValidationMessages": {
      "id": "ValidationFramework.html#getValidationMessages",
      "kind": "function",
      "title": "getValidationMessages()",
      "longname": "ValidationFramework#getValidationMessages",
      "name": "getValidationMessages",
      "tags": "ValidationFramework#getValidationMessages getValidationMessages",
      "summary": "",
      "description": "Validates data via a schema"
    },
    "ValidationFramework.html#generateSchema": {
      "id": "ValidationFramework.html#generateSchema",
      "kind": "function",
      "title": "generateSchema( model )",
      "longname": "ValidationFramework#generateSchema",
      "name": "generateSchema",
      "tags": "ValidationFramework#generateSchema generateSchema",
      "summary": "",
      "description": "Validates data via a schema"
    },
    "module-Augmented.html": {
      "id": "module-Augmented.html",
      "kind": "module",
      "title": "Augmented",
      "longname": "module:Augmented",
      "name": "Augmented",
      "tags": "module:Augmented",
      "summary": "",
      "description": "Augmented.js Next - The Core Component",
      "body": ""
    },
    "module-Augmented-Logger.html": {
      "id": "module-Augmented-Logger.html",
      "kind": "namespace",
      "title": "Augmented~Logger",
      "longname": "module:Augmented~Logger",
      "name": "Logger",
      "tags": "module:Augmented~Logger",
      "summary": "",
      "description": "A Logger package",
      "body": ""
    },
    "module-Augmented-Security.html": {
      "id": "module-Augmented-Security.html",
      "kind": "namespace",
      "title": "Augmented~Security",
      "longname": "module:Augmented~Security",
      "name": "Security",
      "tags": "module:Augmented~Security",
      "summary": "",
      "description": "Security Package and API",
      "body": ""
    },
    "Security.Client.html": {
      "id": "Security.Client.html",
      "kind": "namespace",
      "title": "Client",
      "longname": "Security.Client",
      "name": "Client",
      "tags": "Security.Client Client",
      "summary": "",
      "description": "Security client namespace",
      "body": ""
    },
    "Augmented.Utility.BundleObject.html": {
      "id": "Augmented.Utility.BundleObject.html",
      "kind": "namespace",
      "title": "BundleObject",
      "longname": "Augmented.Utility.BundleObject",
      "name": "BundleObject",
      "tags": "Augmented.Utility.BundleObject Utility.BundleObject BundleObject",
      "summary": "",
      "description": "ResourceBundle Object used for configuration of a bundle",
      "body": ""
    },
    "Augmented.Utility.ResourceBundle.html": {
      "id": "Augmented.Utility.ResourceBundle.html",
      "kind": "namespace",
      "title": "ResourceBundle",
      "longname": "Augmented.Utility.ResourceBundle",
      "name": "ResourceBundle",
      "tags": "Augmented.Utility.ResourceBundle Utility.ResourceBundle ResourceBundle",
      "summary": "",
      "description": "Augmented.Utility.ResourceBundle",
      "body": ""
    },
    "Augmented.Utility.ResourceBundle.html#.getBundle": {
      "id": "Augmented.Utility.ResourceBundle.html#.getBundle",
      "kind": "function",
      "title": "&lt;static&gt; getBundle( bundle )",
      "longname": "Augmented.Utility.ResourceBundle.getBundle",
      "name": "getBundle",
      "tags": "Augmented.Utility.ResourceBundle.getBundle Utility.ResourceBundle.getBundle ResourceBundle.getBundle getBundle",
      "summary": "",
      "description": "Gets the bundle(s) and registers to Augmented.Utility.ResourceBundle"
    },
    "Augmented.Utility.ResourceBundle.html#.getString": {
      "id": "Augmented.Utility.ResourceBundle.html#.getString",
      "kind": "function",
      "title": "&lt;static&gt; getString()",
      "longname": "Augmented.Utility.ResourceBundle.getString",
      "name": "getString",
      "tags": "Augmented.Utility.ResourceBundle.getString Utility.ResourceBundle.getString ResourceBundle.getString getString",
      "summary": "",
      "description": "Gets a string from the registered bundle"
    },
    "Augmented.Utility.MessageReader.html": {
      "id": "Augmented.Utility.MessageReader.html",
      "kind": "namespace",
      "title": "MessageReader",
      "longname": "Augmented.Utility.MessageReader",
      "name": "MessageReader",
      "tags": "Augmented.Utility.MessageReader Utility.MessageReader MessageReader",
      "summary": "",
      "description": "Reads a message out of the bundle",
      "body": ""
    },
    "Augmented.Utility.MessageReader.html#.getMessage": {
      "id": "Augmented.Utility.MessageReader.html#.getMessage",
      "kind": "function",
      "title": "&lt;static&gt; getMessage( key )",
      "longname": "Augmented.Utility.MessageReader.getMessage",
      "name": "getMessage",
      "tags": "Augmented.Utility.MessageReader.getMessage Utility.MessageReader.getMessage MessageReader.getMessage getMessage",
      "summary": "",
      "description": "getMessage - get the message out of the bundle.If message is not found, then ResourceBundle returns the keywrapped in square bracketsloop through the fallback path of the key by removing thelast attribute and searching the bundle againstop when you get back a real message (not just the [key])"
    },
    "Utility.html": {
      "id": "Utility.html",
      "kind": "namespace",
      "title": "Utility",
      "longname": "Utility",
      "name": "Utility",
      "tags": "Utility",
      "summary": "",
      "description": "Utility Package -Small Utilities",
      "body": ""
    },
    "Utility.html#.TransformerType": {
      "id": "Utility.html#.TransformerType",
      "kind": "member",
      "title": "&lt;static&gt; TransformerType :Symbol",
      "longname": "Utility.TransformerType",
      "name": "TransformerType",
      "tags": "Utility.TransformerType TransformerType",
      "summary": "",
      "description": "Augmented.Utility.TransformerType Transformer type for use in the transformer"
    },
    "Utility.html#.formatBinary": {
      "id": "Utility.html#.formatBinary",
      "kind": "function",
      "title": "&lt;static&gt; formatBinary( num, pres )",
      "longname": "Utility.formatBinary",
      "name": "formatBinary",
      "tags": "Utility.formatBinary formatBinary",
      "summary": "",
      "description": "Format a number into binary string at a set precision"
    },
    "Utility.html#.formatDate": {
      "id": "Utility.html#.formatDate",
      "kind": "function",
      "title": "&lt;static&gt; formatDate( date )",
      "longname": "Utility.formatDate",
      "name": "formatDate",
      "tags": "Utility.formatDate formatDate",
      "summary": "",
      "description": "Format a date to US format (MM/DD/YYYY HH:mm AM/PM)"
    },
    "Utility.html#.sortObjects": {
      "id": "Utility.html#.sortObjects",
      "kind": "function",
      "title": "&lt;static&gt; sortObjects( array, key )",
      "longname": "Utility.sortObjects",
      "name": "sortObjects",
      "tags": "Utility.sortObjects sortObjects",
      "summary": "",
      "description": "Sorts an array of objects by propery in object"
    },
    "Utility.html#.mergeSort": {
      "id": "Utility.html#.mergeSort",
      "kind": "function",
      "title": "&lt;static&gt; mergeSort( array )",
      "longname": "Utility.mergeSort",
      "name": "mergeSort",
      "tags": "Utility.mergeSort mergeSort",
      "summary": "",
      "description": "Simple sorting algorithm that repeatedly steps through the list to be sorted, compares each pair of adjacent items and swaps them if they are in the wrong order."
    },
    "Utility.html#.QuickSort": {
      "id": "Utility.html#.QuickSort",
      "kind": "function",
      "title": "&lt;static&gt; QuickSort( arr )",
      "longname": "Utility.QuickSort",
      "name": "QuickSort",
      "tags": "Utility.QuickSort QuickSort",
      "summary": "",
      "description": "Quick Sort implimentation for Arrays -"
    },
    "Utility.html#.SchemaGenerator": {
      "id": "Utility.html#.SchemaGenerator",
      "kind": "function",
      "title": "&lt;static&gt; SchemaGenerator( data )",
      "longname": "Utility.SchemaGenerator",
      "name": "SchemaGenerator",
      "tags": "Utility.SchemaGenerator SchemaGenerator",
      "summary": "",
      "description": "Augmented.Utility.SchemaGeneratorGenrate a schema from a set of data"
    },
    "Augmented.Utility.MessageKeyFormatter.html": {
      "id": "Augmented.Utility.MessageKeyFormatter.html",
      "kind": "namespace",
      "title": "MessageKeyFormatter",
      "longname": "Augmented.Utility.MessageKeyFormatter",
      "name": "MessageKeyFormatter",
      "tags": "Augmented.Utility.MessageKeyFormatter Utility.MessageKeyFormatter MessageKeyFormatter",
      "summary": "",
      "description": "Augmented.Utility.MessageKeyFormatterConcatenate the pieces of the message together if a portion of the key ismissing, the rest of the key is ignored. ex. if the &quot;rule&quot; attribute ismissing, then the key will return with the message.level + message.kind only",
      "body": ""
    },
    "Augmented.Utility.MessageKeyFormatter.html#.format": {
      "id": "Augmented.Utility.MessageKeyFormatter.html#.format",
      "kind": "function",
      "title": "&lt;static&gt; format( message )",
      "longname": "Augmented.Utility.MessageKeyFormatter.format",
      "name": "format",
      "tags": "Augmented.Utility.MessageKeyFormatter.format Utility.MessageKeyFormatter.format MessageKeyFormatter.format format",
      "summary": "",
      "description": "Format a key for a message"
    }
  }
};