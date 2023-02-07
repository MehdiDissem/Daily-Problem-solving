function drawWigwam(n) {
    function replaceWithCharsAt(str, chars, index) {
        return str.slice(0, index) + chars + str.slice(index+chars.length);
      }
      function addSides(str) {
        return '/:' + str + ':\\';
      }
      function pad(str) {
        const padding = ' '.repeat( (2*n+1 - str.length) / 2);
        return padding + str + padding;
      }
      function addSideDash(str, i) {
        str = replaceWithCharsAt(str, '-', n-i+2);
        return replaceWithCharsAt(str, '-', n+i-2);
      }
      function addSideDecoration(str, i) {
        str = replaceWithCharsAt(str, '°', n-i+2);
        return replaceWithCharsAt(str, '°', n+i-2);
      }
      function addCenterDecoration(str) {
        return replaceWithCharsAt(str, '°', n);
      }
      function addDoorTop(str) {
        return replaceWithCharsAt(str, '/‾\\', n-1);
      }
      function addDoorBottom(str) {
        return replaceWithCharsAt(str, '/   \\', n-2);
      }
      const wigwam = [pad('\\ /'), pad('¥'), pad('/°\\')];
      for (let i = 2; i <= n; i++) {
        let row = (i%2 === 0) ?
          ':'.repeat(2*(i-2) + 1) :
          Array(i-1).fill('_').join(':');
        row = addSides(row);
        row = pad(row);
        if (i%2 === 0 && i > 3) row = addSideDash(row, i);
        if ((n-i-1)%4 === 0)    row = addSideDecoration(row, i);
        if ((i-1)%3 === 0)      row = addCenterDecoration(row);
        if (i === n-1)          row = addDoorTop(row);
        if (i === n)            row = addDoorBottom(row);
        
        wigwam.push(row)
      }
      
      return wigwam.join('\n');
  }