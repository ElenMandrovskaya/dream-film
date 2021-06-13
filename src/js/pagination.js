export const pagination = {
        startPage: 1,
        totalPages: 20,
        currentPage: 1,
        frame: 4,
        startIdx: 0,
        endIdx: 0,
        startDotFlag: false,
        endDotFlag: true,
        pushFirstElement: true,
        pushLastElement: true,
};

export function next() {
    pagination.currentPage = (pagination.currentPage >= pagination.totalPages) ? pagination.startPage : pagination.currentPage+1;
    info();
}

export function prev() {
    pagination.currentPage = (pagination.currentPage <= 1) ? pagination.totalPages : pagination.currentPage - 1;
    info();
}

export function info() {
        setPageList();
    }

export function getTotalPage(pageNum) {
        pagination.totalPages = pageNum;
    info();
    }

export function drawPages() {
        let pages = [];
        if (pagination.pushFirstElement)
            pages.push(pagination.startPage);
        if (pagination.startDotFlag)
            pages.push('...');

        for (let i = pagination.startIdx; i <= pagination.endIdx; i++) {
            pages.push(i === pagination.currentPage ? "->" + i : i);
        }

        if (pagination.endDotFlag)
            pages.push('...');
        if (pagination.pushLastElement)
            pages.push(pagination.totalPages);
    
        return pages;
    }

export function setPages() {
        if ((pagination.frame + 2) <= pagination.totalPages) {
            if (pagination.currentPage === pagination.startPage) {
                pagination.pushFirstElement = false;
                pagination.startDotFlag = false;
                pagination.startIdx = pagination.currentPage
                pagination.endIdx = pagination.currentPage + pagination.frame
                pagination.endDotFlag = true;
                pagination.pushLastElement = true;
            }
            else if (pagination.currentPage === pagination.startPage + 1) {
                pagination.pushFirstElement = true;
                pagination.startDotFlag = false;
                pagination.startIdx = pagination.currentPage;
                pagination.endIdx = pagination.currentPage + pagination.frame - 1;
                pagination.endDotFlag = true;
                pagination.pushLastElement = true;
            }
            else if (pagination.currentPage + pagination.frame + 1 <= pagination.totalPages) {
                pagination.pushFirstElement = true;
                pagination.startDotFlag = true;
                pagination.startIdx = pagination.currentPage;
                pagination.endIdx = pagination.currentPage + pagination.frame
                pagination.endDotFlag = true;
                pagination.pushLastElement = true;
            }
            else if (pagination.currentPage + pagination.frame + 1 >= pagination.totalPages) {
                pagination.pushFirstElement = true;
                pagination.startDotFlag = true;
                pagination.startIdx = pagination.totalPages - (pagination.frame + 1);
                pagination.endIdx = pagination.totalPages;
                pagination.endDotFlag = false;
                pagination.pushLastElement = false;
            }
        }
        else {
            pagination.pushFirstElement = false;
            pagination.startDotFlag = false;
            pagination.startIdx = pagination.startPage
            pagination.endIdx = pagination.totalPages
            pagination.endDotFlag = false;
            pagination.pushLastElement = false;
        }

        return drawPages();
    }

export function setPageList() {
    let menu = setPages();

        let menuLi = menu.map((item) => {
            let menuLiItem = String(item);
            if (menuLiItem === '...') {
                menuLiItem = '<button disabled class="pagination-list__item dot">' + menuLiItem + '</button>';
            }
            else if (menuLiItem.substring(0, 2) === '->') {
                menuLiItem = '<li><button disabled class="pagination-list__item active">' + menuLiItem.substr(2) + '</button></li>';
            }
            else {
                menuLiItem = '<li><button class="pagination-list__item">' + menuLiItem + '</button></li>';
            }
    
            return menuLiItem;
        });

        let elemList = document.getElementById('pagesList');
        elemList.innerHTML = '<ul class="pagination-list">' + menuLi.join('') + '</ul>';

        elemList.addEventListener('click', onClickBtn);

    function onClickBtn(e) {
            pagination.currentPage = +e.target.textContent;
            info();
        }
    }