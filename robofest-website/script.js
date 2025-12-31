
<script>
const aboutContent = {
    acharya: '<h3>About Acharya</h3><p>Acharya is a premier educational community in Bengaluru with over three decades of excellence in higher education. With 100+ academic programs and students from 75+ countries, Acharya promotes innovation, experiential learning, and global exposure.</p>',
    ait: '<h3>About Acharya Institute of Technology</h3><p>Established in 2000, Acharya Institute of Technology (AIT) is a VTU-affiliated and NAAC/NBA-accredited engineering institution. AIT focuses on hands-on learning, industry collaboration, and research-driven education.</p>'
};

document.getElementById('aboutAcharyaLink').addEventListener('click', function(e) {
    e.preventDefault();
    showAboutContent('acharya');
});

document.getElementById('aboutAITLink').addEventListener('click', function(e) {
    e.preventDefault();
    showAboutContent('ait');
});

document.getElementById('closeOverlay').addEventListener('click', function() {
    hideAboutContent();
});

function showAboutContent(type) {
    const overlay = document.getElementById('aboutOverlay');
    const contentBox = document.getElementById('aboutContentBox');
    contentBox.innerHTML = aboutContent[type];
    overlay.classList.add('active');
}

function hideAboutContent() {
    const overlay = document.getElementById('aboutOverlay');
    overlay.classList.remove('active');
}

function toggleAccordion(header) {
    const allHeaders = document.querySelectorAll('.accordion-header');
    const allContents = document.querySelectorAll('.accordion-content');
    const content = header.nextElementSibling;
    const isActive = header.classList.contains('active');
    
    allHeaders.forEach(h => h.classList.remove('active'));
    allContents.forEach(c => c.style.maxHeight = null);
    
    if (!isActive) {
        header.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}
</script>