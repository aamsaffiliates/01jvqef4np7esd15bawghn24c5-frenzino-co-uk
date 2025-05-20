// Main JavaScript for Frenzino Casino

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initializeFAQToggle();
    initializeWelcomeBonusToggle();
    initializeSlider();
    initializeLatestWins();
    initializeMobileMenu();
});

// FAQ Toggle Functionality
function initializeFAQToggle() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherIcon = otherItem.querySelector('.faq-toggle i');
                    otherIcon.classList.remove('fa-minus');
                    otherIcon.classList.add('fa-plus');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
            const icon = item.querySelector('.faq-toggle i');
            
            if (item.classList.contains('active')) {
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    });
}

// Welcome Bonus Details Toggle
function initializeWelcomeBonusToggle() {
    const toggleBtn = document.querySelector('.toggle-btn');
    const bonusDetails = document.querySelector('.bonus-details');
    const toggleIcon = document.querySelector('.toggle-btn i');
    
    if (toggleBtn && bonusDetails && toggleIcon) {
        toggleBtn.addEventListener('click', function() {
            bonusDetails.classList.toggle('active');
            if (bonusDetails.classList.contains('active')) {
                toggleIcon.classList.remove('fa-chevron-down');
                toggleIcon.classList.add('fa-chevron-up');
            } else {
                toggleIcon.classList.remove('fa-chevron-up');
                toggleIcon.classList.add('fa-chevron-down');
            }
        });
    }
}

// Testimonial Slider
function initializeSlider() {
    const track = document.querySelector('.reviews-track');
    const slides = document.querySelectorAll('.review-card');
    const dots = document.querySelectorAll('.dot');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    
    if (!track || !slides.length || !dots.length || !prevButton || !nextButton) return;
    
    let currentIndex = 0;
    
    // Set width for each slide based on total slides
    slides.forEach(slide => {
        slide.style.flex = `0 0 100%`;
        slide.style.maxWidth = '100%';
    });
    
    // Function to move to selected slide
    function moveToSlide(index) {
        if (index < 0) {
            index = slides.length - 1;
        } else if (index >= slides.length) {
            index = 0;
        }
        
        track.style.transform = `translateX(-${index * 100}%)`;
        
        // Update active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        
        currentIndex = index;
    }
    
    // Event listeners for controls
    prevButton.addEventListener('click', () => {
        moveToSlide(currentIndex - 1);
    });
    
    nextButton.addEventListener('click', () => {
        moveToSlide(currentIndex + 1);
    });
    
    // Click on dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            moveToSlide(index);
        });
    });
    
    // Auto slide
    setInterval(() => {
        moveToSlide(currentIndex + 1);
    }, 5000);
}

// Latest Wins Live Updates
function initializeLatestWins() {
    // Array of sample wins to rotate
    const sampleWins = [
        { player: 'r***e69', game: 'Gates of Olympus', amount: '£2,105.45', time: 'Just now' },
        { player: 'd***n23', game: 'Wolf Gold', amount: '£1,781.30', time: 'Just now' },
        { player: 'g***l55', game: 'Sweet Bonanza', amount: '0.042 BTC', time: 'Just now' },
        { player: 'p***k78', game: 'Money Train 2', amount: '£3,250.75', time: 'Just now' },
        { player: 'c***s41', game: 'Fruit Party', amount: '£980.60', time: 'Just now' },
        { player: 'a***r17', game: 'Book of Dead', amount: '£1,470.25', time: 'Just now' },
        { player: 'f***z90', game: 'Gonzo\'s Quest', amount: '£2,840.15', time: 'Just now' },
        { player: 'o***i63', game: 'Bonanza Megaways', amount: '£5,120.80', time: 'Just now' }
    ];
    
    const winsTable = document.querySelector('.wins-table tbody');
    if (!winsTable) return;
    
    // Function to add a new win
    function addNewWin() {
        // Get a random win from the sample array
        const randomWin = sampleWins[Math.floor(Math.random() * sampleWins.length)];
        
        // Create a new row
        const newRow = document.createElement('tr');
        
        // Add cells to the row
        newRow.innerHTML = `
            <td>${randomWin.player}</td>
            <td>${randomWin.game}</td>
            <td>${randomWin.amount}</td>
            <td>${randomWin.time}</td>
        `;
        
        // Add the new row to the top of the table
        winsTable.insertBefore(newRow, winsTable.firstChild);
        
        // Remove the last row if there are more than 10 rows
        if (winsTable.children.length > 10) {
            winsTable.removeChild(winsTable.lastChild);
        }
        
        // Update the time for all other rows
        const rows = winsTable.children;
        for (let i = 1; i < rows.length; i++) {
            const timeCell = rows[i].lastChild;
            let time = timeCell.textContent;
            
            if (time === 'Just now') {
                timeCell.textContent = '1 min ago';
            } else if (time.includes('min')) {
                const minutes = parseInt(time);
                timeCell.textContent = (minutes + 1) + ' min ago';
            }
        }
    }
    
    // Add a new win every 15 seconds
    setInterval(addNewWin, 15000);
}

// Mobile Menu Toggle
function initializeMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (!menuToggle || !mainNav) return;
    
    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
}

// Sticky Header on Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.site-header');
    
    if (!header) return;
    
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});


// Banking Section JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initializeBankingTabs();
    initializeCategoryFilters();
    initializeAccordion();
    animateMethodCards();
});

// Initialize Banking Tabs
function initializeBankingTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Hide all tab panes
            tabPanes.forEach(pane => pane.classList.remove('active'));
            // Show the selected tab pane
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            
            // Reset category filters to 'all' for new tab
            resetCategoryFilters();
        });
    });
}

// Reset Category Filters
function resetCategoryFilters() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const methodCards = document.querySelectorAll('.method-card');
    
    // Set 'all' button as active
    categoryBtns.forEach(btn => {
        if (btn.getAttribute('data-category') === 'all') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Show all method cards
    methodCards.forEach(card => {
        card.style.display = 'flex';
    });
}

// Initialize Category Filters
function initializeCategoryFilters() {
    const categoryBtns = document.querySelectorAll('.tab-pane.active .category-btn');
    const methodCards = document.querySelectorAll('.tab-pane.active .method-card');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const parentTab = btn.closest('.tab-pane');
            const tabCategoryBtns = parentTab.querySelectorAll('.category-btn');
            const tabMethodCards = parentTab.querySelectorAll('.method-card');
            
            // Remove active class from all category buttons in this tab
            tabCategoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            
            // Show/hide method cards based on category
            tabMethodCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                    // Re-trigger animation
                    card.style.animation = 'none';
                    setTimeout(() => {
                        card.style.animation = '';
                    }, 10);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Initialize Accordion Functionality
function initializeAccordion() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Check if this item is already active
            const isActive = item.classList.contains('active');
            
            // Close all items
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            
            // If the clicked item wasn't active, make it active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Animate Method Cards on Visibility
function animateMethodCards() {
    // Reset animations
    const methodCards = document.querySelectorAll('.method-card');
    methodCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe each method card
    methodCards.forEach(card => {
        observer.observe(card);
    });
}

// Handle tab switching with smooth animations
document.querySelectorAll('.tab-btn').forEach(tab => {
    tab.addEventListener('click', function() {
        // Animate out current tab content
        const activePane = document.querySelector('.tab-pane.active');
        if (activePane) {
            activePane.style.opacity = '0';
            activePane.style.transform = 'translateY(10px)';
        }
        
        // Animate in new tab content after a short delay
        setTimeout(() => {
            const newTabId = this.getAttribute('data-tab');
            const newPane = document.getElementById(newTabId);
            if (newPane) {
                newPane.classList.add('active');
                newPane.style.opacity = '1';
                newPane.style.transform = 'translateY(0)';
                
                // Re-initialize category filters for the new tab
                initializeCategoryFilters();
                // Re-animate method cards
                animateMethodCards();
            }
        }, 300);
    });
});

// Add transition properties to tab panes
document.querySelectorAll('.tab-pane').forEach(pane => {
    pane.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
});

// Enhance accordion with smooth animations
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('mouseenter', function() {
        this.style.transition = 'background-color 0.3s ease';
        this.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
    });
    
    header.addEventListener('mouseleave', function() {
        if (!this.parentElement.classList.contains('active')) {
            this.style.backgroundColor = '';
        }
    });
});