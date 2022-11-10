'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "c0dc1e4eb3d74f8dbff36ac9245d05c1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "7d7fc1f457fb2edb2cf40359d344114e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3b8fcb09aa173a0780a359c4794338f8",
".git/logs/refs/heads/main": "ab14ed1dc635c4e5046c4fcc24239638",
".git/objects/02/bb649b1bc1346bb423cb3aa144af0907780c1d": "06a05d9ba243c48576fced5eb99bdf89",
".git/objects/04/255296469cccf5cd059b70f7b88f99f7124958": "387098722839fced1b278e84beebf9f4",
".git/objects/0a/20b4553c32f93e35b0f2bd295f83f55866edd0": "b5de7a9fdbae517e85ec32d7756cbdab",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/a22aef6081c8213e0f32063ad88f98890795f1": "5d00b7f6407cecdc216cb50ceb562dae",
".git/objects/0f/78634f804705071162775be51c61a7f5929cce": "54d7b1a76e4788e2da1e5130ca882ea5",
".git/objects/11/19a566f718cfc177b5a473f6aedf7a3c73cede": "6bd913d324de382fc1f88fedbbf908ad",
".git/objects/11/a306da370ccbe9f237b5aba79383da9ea732e8": "fe0deaa11a99635b41b1cd72bfa2356d",
".git/objects/13/c9489771fd4e60ed0ea9303e882f94f640ec6d": "2ac8a1143ef93b7b5ab103d2b5456d06",
".git/objects/16/2acdbcc5e6a56db63b2a78dee0dbe69dd7be32": "9cbac8db699891a89b6b81a6c2c38feb",
".git/objects/16/f2550f1dfded3d6a741bf28475c6ff1f5c0d3f": "2218e56c3888d3cdfb284287fe5181fe",
".git/objects/19/a0075a3a2430ea68d8b05b92638327e0fcbfda": "86e26c0bc365646de7450bfeec279ce7",
".git/objects/1f/9dea86d49da71f095111707d03b9140eb69733": "0bd4fa0f40267bf0e6d88529e788d60b",
".git/objects/1f/dc3e0a9371257bc22006d15f5e5de926b09c21": "f514441ddaffbbdda439840e77342012",
".git/objects/23/6b3c3eef73679e85fc09bd89cdf996bb078ee1": "3abb6360219d724d702c9a14d7a9d41a",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ff4bb8e13dbca18873abc8dc12d5e5c3edebe8": "585c9c42a0267a30e5f89427e9bf4e73",
".git/objects/26/6dc966acef32955578df52a696f229b950b71c": "78289805fb7020f67d198f1c41260e33",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/29/fa4512f21b61564761df5585a11be1cc985476": "decc5e942c917e8ed7ad81ac82d3f283",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/30/0728b543057ecdd991dace7a442a4657304e6f": "cf4601ca2fe7b208d7f01cb8195fed65",
".git/objects/30/4ae8b02d7d20d426750be07953f285a7252efb": "b98a7037c02a3e93925d1d1e50bed45a",
".git/objects/30/b6fe706a31a78ecd721bab5e785a60e80a8fe5": "e567655cacb3a11647c2cd8876451daf",
".git/objects/33/eba8b192384487f04951539f13bf1f8dd9f9cb": "8b147483b254a82db0bcaf9f71cd7f6b",
".git/objects/35/f0f0242a84f3684f3071225fbce365622671a7": "bb209df94e9b3c030cdf3690c6cf1000",
".git/objects/39/0f2067e2af479977b3fc083ae379755c5fbc9b": "0d18c99f97331e024db3a8fdd8489f53",
".git/objects/3c/2aa04c99bc2dafcabbd19c119cd18d5c92a285": "933339fed6bbfeda9da224749c441b4a",
".git/objects/4c/c1cf113da20a0f50a6a52b16d0cf025397ba91": "a50beb7def0f9b326b75bc5d46405c8d",
".git/objects/4c/ef96af58d15b09d861a765e92528a578f7f8c1": "912b980ec729d283e2e80c4177544766",
".git/objects/4d/4d15f3472bacd31c6e1daf5e769d3e121ded45": "82153f7f84b891a33adf953096b0d2e0",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/50/2f3621e7f97d1d94ce05794e47a6c6a56e94e7": "4846687907600f306462d4d9a4c8ce72",
".git/objects/50/b17347ef089490804e7f9dc5c9528ac50ca2b9": "b114eca9ed874a0d732172d2f0375480",
".git/objects/53/6024081ae0bdd5bbfec2e0e66de5520a6a74b7": "95f5f077b8ff997c283589ccf81e6c21",
".git/objects/56/e72d1dbc269c5672acafe0dc0e7581ab875159": "9a6733668237f061677287cdbd5117d2",
".git/objects/61/fd7187d887767a4a4da9f75deb1359511db953": "fe8c0a4189e367096e3b4ed763553536",
".git/objects/64/f6f3c1ae28880f0def361176217bab4e89e34e": "31656c4fd4db3eef3b3eb56127f51de8",
".git/objects/67/628cef6b7f205bf0e6c56bdb66bca7b7aea580": "7fafdb172a727ce4eac07e8680a77e9e",
".git/objects/6d/537d799d758da76b34ca6957cf1d0baf024076": "354b53bb39addb6b996f71767e473cc5",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/72/0bbe4972407cbcb21031bf1c234ed9c4eb4123": "1a72a77d70bdec962e75339e73cb4909",
".git/objects/72/b085aef3473eb825ddcbbca7e29c672c5148d5": "c3ae6c9eb0fe431b568739cdf76d41bf",
".git/objects/73/1df6c8973b631afa2ab93b0fa471f0b1b61c8e": "236a63446490840cf7fc954188b89a0e",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/77/fe86e0fb5474056e5906cf754ac0cf46fd3098": "c611b23e959266419dac666b486b888a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/e7b6353a2c5c5d97982ca50b7428d85876f5bb": "175ed7f9c32b25473b3f3b09890e3b10",
".git/objects/84/15b597b795c132b62f73d5b4beddeeec1ae342": "6ec3d28832fd71c016c95a2823e32584",
".git/objects/85/f318dfc8149fb003ab4c77e6bb0f1ad371ae99": "f99e0bedf8a2296ef00ca4650a5f9689",
".git/objects/88/a5796c795b9c62be2e1eac970c0a2d64de3c70": "03ae40777fa5a91486fcd87bee9f75be",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fafde6a649662e31637d54d02d0834a615e7dc": "7bf0843ee42b9cc5d9c6f63909892fec",
".git/objects/8e/f6abadd74fc1174df1898af2c6b25752c65019": "1a37b421777f3db0b3b5d56f0048823e",
".git/objects/92/ec02040581953ed03188d7a88a3ed7a088f84c": "e20ffbc24e6e1bb31f24d65c66563410",
".git/objects/93/ebf0a999be8e2a84876e882a836a898099f83b": "abad66ac1db6536eb5fe73aa606819dc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/aeae38ff3ac85187482e03d4cc40602ef305b2": "b74b570358a861b3bd308a77cda90f46",
".git/objects/ac/511f380e09bec1f3ba21861e33e33cdaeea5a5": "fc0828ef8f4c30ca457c68d0a657c014",
".git/objects/af/321f699e49a7036edd42411c7e47c3334a228c": "439b397fd1b48f95fa0b75d608194f1b",
".git/objects/b4/e4c9f597fd229999608878101fb799caf149cb": "588286eb92808191612c5e8577ece7ff",
".git/objects/bb/7171a651cd215f5d7c03f140d80771061281d3": "b2b1b85c6985a2337323f1e36c57466c",
".git/objects/c2/19c129801ed3b4a4f9d1ca0ed8e5c98c2a5571": "5040e7edf4e10557c457bdf6923c2bbd",
".git/objects/ce/31834ffd8c032849c7bd1d379a357d858f0fdf": "148155fb2c3462e08f3c14691df0bf41",
".git/objects/d0/03a53106e1ade6309cf2760ecc84a8366cd26b": "474300794b39665fadd6d307c29e5463",
".git/objects/d1/e1b0aec3d2d97d9bfa6289dc9960349b3e8d73": "ab32b29a34cb0fd397d2453d36e24de1",
".git/objects/d2/a678a5321cfc917cffaa9bb16b8cab76d4b3be": "be7c203dbf7c944b5308fbe6b544ddd4",
".git/objects/d3/9850e8118cdb49764f272ac4aa836b1883282c": "5a5be9e665bf510de6ccea0b03bdb345",
".git/objects/db/a2e07a1728d02ba888af425141aa70564b6ef4": "c8b9f0e731c4d462ccf54238489f74d8",
".git/objects/dc/2981941df8e153515fcc8718292d5e83b3d594": "6267b22d54b24772c2ffea90477426e5",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/abe2710fd807665b9e6bccb50c1470b0d0067b": "bc79338ac7f540b01a847abdd9499d2f",
".git/objects/e3/f567c645b3b01d4154db9fcf71a345c2152a2d": "2dc7f9eeb17e4defed2cde4fa8d05c3d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/1c38292678d7553fbe19c80179da3620670372": "386071e39a461d97a241724a381cc65d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f3/131b24005ed0fffacc461141e8a4864c96c66e": "e1725db0bf87507ec92b766649f629e2",
".git/objects/f3/3a5edf7f6eacd523fce86f7ccb0c5ca7ab30eb": "e7308e61c80b5b1979eea8d01a25336f",
".git/objects/f6/ba0b25682334288f059875939c18b75210b7bf": "57333651d0ca79828f0cbf8173ce4c19",
".git/objects/f8/47cdd020e74c94dbb20030a2ad021c992c54a0": "841cb3e9714f3b1e4d7057c8abe715f3",
".git/objects/ff/1c1f8457f0e982bb0525d58b19534a77f04b3e": "02224bf67a085f194c97a23b16f00fe2",
".git/refs/heads/main": "a9f6489d090319fc23420dc8b2eeef1c",
"assets/AssetManifest.json": "1161bc7ae02981b3c0b554c860b459b4",
"assets/FontManifest.json": "f5d8d13383ca620d891963f3266f302c",
"assets/fonts/fa-brands-400.ttf": "9d2bbde416583cfa5cb30c995b41f732",
"assets/fonts/fa-regular-400.ttf": "f417567703b4fcfbf750952bd2db8a44",
"assets/fonts/fa-solid-900.ttf": "dd5e5b90ca8ee986b13b04310f9aef9d",
"assets/fonts/fa-v4compatibility.ttf": "d4a14b7a210bc8b5c2fe661a18e7e8db",
"assets/fonts/LATO-REGULAR.TTF": "2d36b1a925432bae7f3c53a340868c6e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/MaterialIcons-Regular.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/images/add.png": "3de4706f7a60457a7c326dfc58b15135",
"assets/images/admin.png": "968025e5431f76c9367c069f58ca3580",
"assets/images/arrowdown.png": "b2f2799d829f273aae51ae1b6a5d715a",
"assets/images/ball.png": "da6797c9e01d90f0978666408d3de561",
"assets/images/budget.png": "5119c41ddb746b0d6ffcdbe08c897c32",
"assets/images/close.png": "fd5dd4ed428bd7a53fc5f8faaab921af",
"assets/images/coin.png": "dd74d00b7c134d446145f187f833c636",
"assets/images/coupon%2520(1).png": "36ac265fff5e27511108ab8c6cc0a9d2",
"assets/images/coupon.png": "efad72852c82b9bf0755c380b1ac6144",
"assets/images/dashboard.png": "625457fddfd5a9243a36dfe32a14cf31",
"assets/images/dollar%2520(1).png": "b7e9774c075eb0a78da10c0220bc7e5d",
"assets/images/expense.png": "62868c7cdc8e5e85677704311edb37bf",
"assets/images/expenses.png": "11f79315d7440078090596542174c0de",
"assets/images/fee.png": "0031880174a8a3b901f3265b45da0f8c",
"assets/images/hand.png": "248e0d7cca1d2bff9bbe85e17298ea3d",
"assets/images/history.png": "87739b2bbfa71dd29560b387b71f8c71",
"assets/images/home32.png": "c832ba6b9e7e6013dfd4f337f904d427",
"assets/images/logout.png": "c5c9f2ac87df7e68e75e1b1b32ef6e5e",
"assets/images/man%2520(1).png": "dc5161dd5e36744d184e0b98e97d31ba",
"assets/images/membership.png": "3cd6b9f889ce10d7f665a39ef70fb90f",
"assets/images/minus.png": "7e015eafe681c3bf8611c81abf8bd1f8",
"assets/images/notification.png": "efd639bf053b5189d2c0b453f3113134",
"assets/images/promo-code.png": "d19d9bfe89fa5eaa974c53c77f9b5dba",
"assets/images/reset.png": "92a6445c32e7badb33ce385d54f84edb",
"assets/images/result.png": "96d832843d7270c27f560cf408c7c926",
"assets/images/ring-bell.png": "81b5d3ec9d72890ee5100ebe49bec81b",
"assets/images/star.png": "e0284aa046e01ff88483d17f76d63580",
"assets/images/success.png": "61b9452727c08ea0042f0f148bebcab0",
"assets/images/teamwork%2520(1).png": "962bacd0429c0e3335e887419df3372f",
"assets/images/teamwork.png": "d26fe37d9cf230202a61b1bf45fdd697",
"assets/images/tennis%2520(1).png": "44409def97fa57ebbe5c07a9e374c798",
"assets/images/tennis%2520Court.jpg": "222c6b8efecef5bb6390341e5d36503f",
"assets/images/tennis-ball%2520(1).png": "10c4e7505419d81f5495a5f8005dd982",
"assets/images/tennis-player.png": "65e22c1d522b3b3ab7da9f4349d553ef",
"assets/images/tennis32.png": "dda8d293e179851a8d1724ed7e774dea",
"assets/images/tennisball.png": "8111d04fac4dd48112951a64f61d258a",
"assets/images/tennismatch.png": "7ad8ac9f5a6a27904587a5c008b9cdf4",
"assets/images/Tennisphoto.png": "9c75f63165d36d08e842dab5705a230f",
"assets/images/tournament.png": "5be795dc76878e5fb511eade0c800fac",
"assets/images/trophy32.png": "974aecbc8d81a24eea9a544d97999f49",
"assets/images/user32.png": "bc2475c83795792d24708bd12bd2dcc8",
"assets/NOTICES": "0b8505272c7400c6521494577a468516",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "3df05b065b39f0b3763cadc0532d59a4",
"icons/Icon-512.png": "88036a5fda874bbf400b48801669af37",
"icons/Icon-maskable-192.png": "b80873e59e28660b0f700440d2566cd1",
"icons/Icon-maskable-512.png": "68e2611dd7c8254eaae61132171cfb7e",
"index.html": "fa9a2c837aeeba74113d1a3bb1bd37dd",
"/": "fa9a2c837aeeba74113d1a3bb1bd37dd",
"main.dart.js": "10e532ca30c7b6d93db79abf4946f6a2",
"manifest.json": "1a1ee60a108c31e9b28ab80c3470b767",
"tennis.png": "cb60ecd7a9c3a5b3a20ce3e1486a9bd8",
"version.json": "8ab0813ed2ce81dc56c05454f12ea3b6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
