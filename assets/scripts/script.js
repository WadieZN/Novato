const openModal = document.querySelector(".open-edit-modal");
const popupMenu = document.querySelector(".calendar-filter-menu");

// Check screen width 

const logo = document.querySelector(".error-logo");

function checkScreenWidth() {
  const errorMessage = document.createElement("div");
  errorMessage.setAttribute("class", "error-message");
  const errorText = document.createElement("h2");
  errorText.textContent = "This app is available on mobile devices only.";
  errorMessage.appendChild(errorText);

  if (window.innerWidth > 768) {
    document.body.appendChild(errorMessage);
    logo.style.display = "block";
  }
}

checkScreenWidth();

window.addEventListener("resize", function () {
  const existingMessage = document.querySelector(".error-message");
  if (window.innerWidth > 768) {
    if (!existingMessage) {
      checkScreenWidth();
      logo.style.display = "block";
    }
  } else {
    if (existingMessage) {
      existingMessage.remove();
      logo.style.display = "none";
    }
  }
});

// Check Orientation

function checkOrientation() {
  const checkOr = document.querySelector(".check-orientation");

  if (490 > window.innerHeight && this.window.innerWidth < 1125) {
    checkOr.style.display = 'flex';
  } else {
    checkOr.style.display = 'none';
  }
}

checkOrientation();

window.addEventListener("resize", function () {
  const checkOr = document.querySelector(".check-orientation");

  if (490 > window.innerHeight && this.window.innerWidth < 1125) {
    checkOr.style.display = 'flex';
  } else {
    checkOr.style.display = 'none';
  }
});


// Quick add Menu

const quickAddBtn = document.querySelector(".header-right button");
const quickAddCancel = document.querySelector(".quick-add-menu button");
const quickAddMenu = document.querySelector(".quick-add-menu");

if (quickAddBtn) {
  quickAddBtn.addEventListener("click", () => {
    quickAddMenu.style.display = "flex";
    darkLayer.style.display = "block";
  });
}

if (quickAddCancel) {
  quickAddCancel.addEventListener("click", () => {
    quickAddMenu.style.display = "none";
    darkLayer.style.display = "none";
  });
}

// Dashboard Display Button

const displayBtn = document.querySelector(".display-btn");
const displayMenu = document.querySelector(".display-menu");

if (displayBtn && displayMenu) {
  displayBtn.addEventListener("click", () => {
    if (displayMenu.style.transform === "scaleY(1)") {
      displayMenu.style.transform = "scaleY(0)";
    } else {
      displayMenu.style.transform = "scaleY(1)";
    }
  });
  document.addEventListener('DOMContentLoaded', function () {
    var el = document.querySelector('.display-menu');
    Sortable.create(el, {
        animation: 150,
        handle: '.small-hamburger',
        onEnd: function (evt) {
            var itemEl = evt.item;
            evt.to;
            evt.from;
            evt.oldIndex;
            evt.newIndex;
        },
    });
  });
}

const displayItems = document.querySelectorAll('.display-menu-item');

displayItems.forEach(displayItem => {
  displayItem.addEventListener('click', () => {
    displayItem.classList.toggle('visible-display-element');
    
    const displayEye = displayItem.querySelector('.display-eye img');
    
    if (displayEye.src.includes('visible.svg')) {
      displayEye.src = './assets/images/hide-eye.svg';
    } else {
      displayEye.src = './assets/images/visible.svg';
    }
  });
});

// Navigation Events

const navigation = document.querySelector("nav");
const navBtn = document.querySelector(".nav-btn");

navBtn.addEventListener("click", () => {
  darkLayer.style.display = "block";
  navigation.style.left = "0";
});

// Notifications Tab

const closeNTf = document.querySelector(".close-notifications");
const ntfBtn = document.querySelector(".notification-bell");
const ntfTab = document.querySelector(".notifications-tab");

ntfBtn.addEventListener("click", () => {
  darkLayer.style.display = "block";
  ntfTab.style.right = "0";
});

if (ntfTab) {
  closeNTf.addEventListener("click", () => {
    ntfTab.style.right = "-600px";
    darkLayer.style.display = "none";
  });
}

document.querySelectorAll(".nav-screen-expend").forEach((expendNav) => {
  const navLinkArrow = expendNav.querySelector(".nav-screen-arrow img");

  expendNav.addEventListener("click", () => {
      const otherNavLinks = expendNav.nextElementSibling;

      if (otherNavLinks && otherNavLinks.classList.contains("nav-screen-link-links")) {
          if (otherNavLinks.classList.contains("open")) {
              otherNavLinks.classList.remove("open");
              navLinkArrow.style.transform = "rotate(0deg)";
          } else {
              otherNavLinks.classList.add("open");
              navLinkArrow.style.transform = "rotate(90deg)";
          }
      }
  });
});

// Dark layer Events

const darkLayer = document.querySelector(".dark-layer");

darkLayer.addEventListener("click", () => {
  if (darkLayer) {
    darkLayer.style.display = "none";
  }
  if (navigation) {
    navigation.style.left = "-600px";
  }
  if (ntfTab) {
    ntfTab.style.right = "-600px";
  }
  if (popupMenu) {
    popupMenu.style.display = "none";
  }
  if (quickAddMenu) {
    quickAddMenu.style.display = "none";
  }
});

// Modal forms functions

const editModal = document.querySelector(".edit-modal");

if (openModal) {
  openModal.addEventListener("click", () => {
    editModal.style.display = "flex";
  });
}

const modals = document.querySelectorAll(".edit-modal");
modals.forEach((modal) => {
  const closeModal = modal.querySelector(".close-modal");
  const cancelModal = modal.querySelector(".cancel-modal-edit");

  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  if (cancelModal) {
    cancelModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
});

// Employee Modal 

const addEmployeeBtn = document.querySelector(".add-employee");
const addEmployeeModal = document.querySelector(".employee-modal");
const addEmployeeInfo = document.querySelector(".add-employee-info");
const addEmployeeContrat = document.querySelector(".add-employee-contrat");
const employeeModalInfo = document.querySelector(".employee-modal-info");
const employeeModalContrat = document.querySelector(".employee-modal-contrat");
const cancelInfoBtn = employeeModalInfo.querySelector(".cancel-modal-edit");
const cancelContratBtn = employeeModalContrat.querySelector(".cancel-modal-edit");

addEmployeeBtn.addEventListener("click", () => {
  addEmployeeModal.style.display = "block";
  quickAddMenu.style.display = "none";
  darkLayer.style.display = "none";
});

if (addEmployeeContrat && addEmployeeInfo) {
  addEmployeeContrat.addEventListener("click", () => {
    employeeModalInfo.style.display = "none";
    employeeModalContrat.style.display = "block";
    addEmployeeContrat.setAttribute("id", "employee-active-link");
    addEmployeeInfo.removeAttribute("id", "employee-active-link");
  });

  addEmployeeInfo.addEventListener("click", () => {
    employeeModalInfo.style.display = "block";
    employeeModalContrat.style.display = "none";
    addEmployeeContrat.removeAttribute("id", "employee-active-link");
    addEmployeeInfo.setAttribute("id", "employee-active-link");
  });
}

if (cancelInfoBtn) {
  cancelInfoBtn.addEventListener("click", () => {
    addEmployeeModal.style.display = "none";
  });
}

if (cancelContratBtn) {
  cancelContratBtn.addEventListener("click", () => {
    addEmployeeModal.style.display = "none";
  });
}

// Client Modal


const addClientInfo = document.querySelector(".client-info-btn");
const addClientPrincipalContact = document.querySelector(
  ".client-principal-contact-btn"
);
const clientInfo = document.querySelector(".client-info");
const clientPrincipalContact = document.querySelector(
  ".client-principal-contact"
);
const cancelClientInfo = clientInfo.querySelector(".cancel-modal-edit");
const cancelClientContrat =
  clientPrincipalContact.querySelector(".cancel-modal-edit");
const addClientModal = document.querySelector(".add-client");
const clientModal = document.querySelector(".client-modal");

if (addClientModal) {
  addClientModal.addEventListener("click", () => {
    clientModal.style.display = "block";
    quickAddMenu.style.display = "none";
    darkLayer.style.display = "none";
  });
}

if (addClientInfo && addClientPrincipalContact) {
  addClientInfo.addEventListener("click", () => {
    clientPrincipalContact.style.display = "none";
    clientInfo.style.display = "block";
    addClientInfo.setAttribute("id", "client-active-link");
    addClientPrincipalContact.removeAttribute("id", "client-active-link");
  });

  addClientPrincipalContact.addEventListener("click", () => {
    clientPrincipalContact.style.display = "block";
    clientInfo.style.display = "none";
    addClientInfo.removeAttribute("id", "client-active-link");
    addClientPrincipalContact.setAttribute("id", "client-active-link");
  });
}

if (cancelClientInfo) {
  cancelClientInfo.addEventListener("click", () => {
    clientModal.style.display = "none";
  });
}

if (cancelClientContrat) {
  cancelClientContrat.addEventListener("click", () => {
    clientModal.style.display = "none";
  });
}

// User Modal 

const addUserModal = document.querySelector(".add-user");
const userModal = document.querySelector(".user-modal");

if (addUserModal) {
  addUserModal.addEventListener("click", () => {
    userModal.style.display = "block";
    quickAddMenu.style.display = "none";
    darkLayer.style.display = "none";
  });
}

// Project Modal

const addProjectModal = document.querySelector(".add-project");
const projectModal = document.querySelector(".project-modal");

if (addProjectModal) {
  addProjectModal.addEventListener("click", () => {
    projectModal.style.display = "block";
    quickAddMenu.style.display = "none";
    darkLayer.style.display = "none";
  });
}

const assignTeamBtn = document.querySelector(".assign-team-btn");
const assignTeam = document.querySelector(".toggle-assign-team");
const closeAssignTeam = document.querySelector(".assign-team-close button");

if (assignTeamBtn) {
  assignTeamBtn.addEventListener("click", () => {
    assignTeam.style.display = "block";
    assignTeamBtn.style.display = "none";
  });
}

if (closeAssignTeam) {
  closeAssignTeam.addEventListener("click", () => {
    assignTeam.style.display = "none";
    assignTeamBtn.style.display = "flex";
  });
}

// Invoice Modal

const addInvoiceModal = document.querySelector(".add-invoice");
const invoiceModal = document.querySelector(".invoice-modal");

if (addInvoiceModal) {
  addInvoiceModal.addEventListener("click", () => {
    invoiceModal.style.display = "block";
    quickAddMenu.style.display = "none";
    darkLayer.style.display = "none";
  });
}

// Payroll Modal

const addPayrollBtn = document.querySelector(".add-payroll");
const PayrollModal = document.querySelector(".payroll-modal");

if (addPayrollBtn) {
  addPayrollBtn.addEventListener("click", () => {
    PayrollModal.style.display = "block";
    quickAddMenu.style.display = "none";
    darkLayer.style.display = "none";
  });
}

// Request Modal

const addRequestBtn = document.querySelector(".add-request");
const requestModal = document.querySelector(".request-modal");

if (addRequestBtn) {
  addRequestBtn.addEventListener("click", () => {
    requestModal.style.display = "block";
    quickAddMenu.style.display = "none";
    darkLayer.style.display = "none";
  });
}

// ------------------ GRH Screen Search Bar

const searchBtn = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");
const sectionNavBtn = document.querySelector(".section-nav-btn");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    if (searchBar.style.display === "flex") {
      searchBar.style.display = "none";
      sectionNavBtn.style.display = "flex";
    } else {
      searchBar.style.display = "flex";
      sectionNavBtn.style.display = "none";
    }
  });
}

if (searchBar) {
  document.addEventListener("click", (event) => {
    if (
      searchBar.style.display === "flex" &&
      !searchBar.contains(event.target) &&
      !searchBtn.contains(event.target)
    ) {
      searchBar.style.display = "none";
      sectionNavBtn.style.display = "flex";
    }
  });
}

// GRH Screen Functions

const grhCards = document.querySelectorAll(".grh-employee-card button");
const grhDetails = document.querySelector(".grh-employee-details");
const grhDetailsBtn = document.querySelector(
  ".grh-employee-details-nav button"
);
const grhDetailsPopup = document.querySelector(
  ".grh-employee-details-nav-popup"
);

const calendarDetails = document.querySelector(".calendar-task-details");
  const closePopup = document.querySelector(".close-popup");
  
  if (closePopup) {
    if (calendarDetails) {
      closePopup.addEventListener("click", () => {
        calendarDetails.style.display = "none";
      });
    }
    if (grhDetails) {
      closePopup.addEventListener("click", () => {
        grhDetails.style.display = "none";
      });
    }
  }

grhCards.forEach((grhCard) => {
  grhCard.addEventListener("click", () => {
    grhDetails.style.display = "block";
  });
});

if (grhDetailsBtn) {
  grhDetailsBtn.addEventListener("click", () => {
    if (grhDetailsPopup.style.display === "flex") {
      grhDetailsPopup.style.display = "none";
    } else {
      grhDetailsPopup.style.display = "flex";
    }
  });
}

const requestCardBtns = document.querySelectorAll(".three-dots");
const requestDetails = document.querySelector(".request-details");
const closeRequestDetails = document.querySelector(".close-request-details");

requestCardBtns.forEach((requestCardBtn) => {
  requestCardBtn.addEventListener("click", () => {
    requestDetails.style.display = "block";
  });
});

if (closeRequestDetails) {
  closeRequestDetails.addEventListener("click", () => {
    requestDetails.style.display = "none";
  });
}


// CRM Screen Functions

const closeCrmBoards = document.querySelector(".close-crm-boards");
const closeCrmDetails = document.querySelector(".close-crm-details");
const crmBoards = document.querySelector(".crm-boards");
const crmCards = document.querySelectorAll(".crm-card");
const crmBoardCards = document.querySelectorAll(".crm-board-card");
const crmDetails = document.querySelector(".crm-details");

crmCards.forEach((crmCard) => {
  crmCard.addEventListener("click", () => {
    crmBoards.style.display = "block";
  });
});

if (closeCrmBoards) {
  closeCrmBoards.addEventListener("click", () => {
    crmBoards.style.display = "none";
  });
}

if (closeCrmDetails) {
  closeCrmDetails.addEventListener("click", () => {
    crmDetails.style.display = "none";
  });
}

crmBoardCards.forEach((crmBoardCard) => {
  crmBoardCard.addEventListener("click", () => {
    crmDetails.style.display = "block";
  });
});

// Projects Screen Functions

const projectDetails = document.querySelector(".project-details");
const closeProjectDetails = document.querySelector(
  ".project-details-header-left button"
);
const projectDetailsAdd = document.querySelector(
  ".project-details-header-right button"
);
const openProjectDetails = document.querySelectorAll(".projects-card button");

if (openProjectDetails) {
  openProjectDetails.forEach((btn) => {
    btn.addEventListener("click", () => {
      projectDetails.style.display = "block";
    });
  });
}

if (closeProjectDetails) {
  closeProjectDetails.addEventListener("click", () => {
    projectDetails.style.display = "none";
  });
}

const projectDetailsAddBtn = document.querySelector('.project-details-header-right button');
const taskModal = document.querySelector('.task-modal');

if (projectDetailsAddBtn) {
  projectDetailsAddBtn.addEventListener("click", () => {
    taskModal.style.display = "block";
  });
}


// Accounting Screen Functions

const invoiceCardBtns = document.querySelectorAll(
  ".accounting-invoices-card button"
);
const invoiceDetails = document.querySelector(".invoice-details");
const closeInvoiceDetails = document.querySelector(".close-invoice-details");

invoiceCardBtns.forEach((invoiceCardBtn) => {
  invoiceCardBtn.addEventListener("click", () => {
    invoiceDetails.style.display = "block";
  });
});

if (closeInvoiceDetails) {
  closeInvoiceDetails.addEventListener("click", () => {
    invoiceDetails.style.display = "none";
  });
}

const closeTvaPopup = document.querySelector(".close-tva-popup");
const tvaPopup = document.querySelector(".tva-popup");
const tvaCardsBtns = document.querySelectorAll(
  ".accounting-declarations-card-div button"
);

tvaCardsBtns.forEach((tvaCardsBtn) => {
  tvaCardsBtn.addEventListener("click", () => {
    tvaPopup.style.display = "block";
  });
});

if (closeTvaPopup) {
  closeTvaPopup.addEventListener("click", () => {
    tvaPopup.style.display = "none";
  });
}

const cdsBtn = document.querySelector("tva-card button");
const cdsPopup = document.querySelector("change-declaration-status-popup");
const cancelCds = document.querySelector(".cancel-cds");
const closeCds = document.querySelector(".close-cds");

if (cdsBtn) {
  cdsBtn.addEventListener("click", () => {
    cdsPopup.style.display = "block";
  });
}

if (cancelCds) {
  cancelCds.addEventListener("click", () => {
    cdsPopup.style.display = "none";
  });
}

if (closeCds) {
  closeCds.addEventListener("click", () => {
    cdsPopup.style.display = "none";
  });
}

// Account Settings Screen Functions

const weekdaysBtns = document.querySelectorAll(".weekdays button");

weekdaysBtns.forEach((weekdaysBtn) => {
  weekdaysBtn.addEventListener("click", () => {
    weekdaysBtn.classList.toggle("active");
  });
});

const buttons = document.querySelectorAll(".invoice-btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => btn.classList.remove("active"));

    button.classList.add("active");
  });
});
