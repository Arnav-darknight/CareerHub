async function loadComponent(elementId, file) {
      try {
        const response = await fetch(file);

        if (!response.ok) {
          throw new Error("Could not load " + file);
        }

        document.getElementById(elementId).innerHTML =
          await response.text();

      } catch (error) {
        console.error(error);
      }
    }

    loadComponent("header-placeholder", "components/header.html");
    loadComponent("footer-placeholder", "components/footer.html");