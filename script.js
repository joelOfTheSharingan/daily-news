fetch('data.json')
        .then(response => response.json())
        .then(data => {
          document.getElementById("head1").textContent = data.video1.title;
          document.getElementById("line1").textContent = data.video1.body;
          document.getElementById("head2").textContent = data.video2.title;
          document.getElementById("line2").textContent = data.video2.body;
          document.getElementById("head3").textContent = data.video3.title;
          document.getElementById("line3").textContent = data.video3.body;
          document.getElementById("head4").textContent = data.video4.title;
          document.getElementById("line4").textContent = data.video4.body;
          document.getElementById("head5").textContent = data.video5.title;
          document.getElementById("line5").textContent = data.video5.body;
          document.getElementById("head6").textContent = data.video6.title;
          document.getElementById("line6").textContent = data.video6.body;
        })
        .catch(error => {
          console.error('Error fetching JSON:', error);
        });
      document.getElementById("header").textContent = "Hello, World!";
