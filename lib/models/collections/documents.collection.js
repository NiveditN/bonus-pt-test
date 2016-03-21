Documents = new FS.Collection("documents", {
  stores: [
    new FS.Store.GridFS("original")
    // new FS.Store.GridFS("original", { path: "~/uploads" })
  ],
  filter: {
    allow: {
      contentTypes: ['image/*', 'application/pdf']
    }
  }
});
 
Documents.allow({
  insert: function (userId) {
    return (userId ? true : false);
  },
  remove: function (userId) {
    return (userId ? true : false);
  },
  download: function () {
    return true;
  },
  update: function (userId) {
    return (userId ? true : false);
  }
});