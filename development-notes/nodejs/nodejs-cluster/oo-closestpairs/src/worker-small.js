process.on('message', (message) => {
      process.send({ distance: 1 });
      process.exit();
    });