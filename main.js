document.addEventListener('DOMContentLoaded',(e)=>{
    const E1 = document.querySelector('#first')
    const E2_수입 = document.querySelector("#second_수입")
    const E2E_수입 = document.getElementById('second_수입').style
    const E2_지출 =  document.querySelector("#second_지출")
    const E2E_지출 = document.getElementById('second_지출').style
    const E3_식비 = document.querySelector('#third_식비')
    const E3E_식비 = document.getElementById('third_식비').style
    const E3_쇼핑 = document.querySelector('#third_쇼핑')
    const E3E_쇼핑 = document.getElementById('third_쇼핑').style
    const E3_여가 = document.querySelector('#third_여가')
    const E3E_여가 = document.getElementById('third_여가').style
    const E3_교통 = document.querySelector('#third_교통')
    const E3E_교통 = document.getElementById('third_교통').style
    const E3_의료 = document.querySelector('#third_의료')
    const E3E_의료 = document.getElementById('third_의료').style
    const E3_정기 = document.querySelector('#third_정기')
    const E3E_정기 = document.getElementById('third_정기').style
    const E3_기타 = document.querySelector('#third_기타')
    const E3E_기타 = document.getElementById('third_기타').style
    const E3_고정 = document.querySelector('#third_고정')
    const E3E_고정 = document.getElementById('third_고정').style
    const E3_특별 = document.querySelector('#third_특별')
    const E3E_특별 = document.getElementById('third_특별').style

    E1.addEventListener('change', (event)=>{
        const options = event.currentTarget.options
        const index = options.selectedIndex
        switch (options[index].textContent) {
            case  "수입":
                E2E_수입.display = 'inline'
                E2E_지출.display = 'none'
                break;
            case "지출":
                E2E_수입.display = 'none'
                E2E_지출.display = 'inline'
                break;
            default:
                E2E_수입.display = 'none'
                E2E_지출.display = 'none'
                break;
        }
    }) // 1차 완료

    E2_수입.addEventListener('change', (event)=>{
        const options = event.currentTarget.options
        const index = options.selectedIndex
        console.log(options[index].textContent)
        // 2nd에 수입이 선택된 경우
        switch (options[index].textContent){
            case "고정":
                E3E_고정.display = 'inline'
                E3E_특별.display = 'none'
                break;
            case "특별":
                E3E_고정.display = 'none'
                E3E_특별.display = 'inline'
                break;
            case "기타":
                E3E_고정.display = 'none'
                E3E_특별.display = 'none'
                break;
        }
   })
    E2_지출.addEventListener('change', (event)=>{
        // 2nd에 지출이 선택된 경우
        const options = event.currentTarget.options
        const index = options.selectedIndex
        // 2nd에 수입이 선택된 경우
        switch (options[index].textContent){
            case "식비":
                E3E_식비.display = 'inline'
                E3E_쇼핑.display = 'none'
                E3E_여가.display = 'none'
                E3E_교통.display = 'none'
                E3E_의료.display = 'none'
                E3E_정기.display = 'none'
                E3E_기타.display = 'none'
                break;
            case "쇼핑":
                E3E_식비.display = 'none'
                E3E_쇼핑.display = 'inline'
                E3E_여가.display = 'none'
                E3E_교통.display = 'none'
                E3E_의료.display = 'none'
                E3E_정기.display = 'none'
                E3E_기타.display = 'none'
                break;
            case "여가":
                E3E_식비.display = 'none'
                E3E_쇼핑.display = 'none'
                E3E_여가.display = 'inline'
                E3E_교통.display = 'none'
                E3E_의료.display = 'none'
                E3E_정기.display = 'none'
                E3E_기타.display = 'none'
                break;
            case "교통":
                E3E_식비.display = 'none'
                E3E_쇼핑.display = 'none'
                E3E_여가.display = 'none'
                E3E_교통.display = 'inline'
                E3E_의료.display = 'none'
                E3E_정기.display = 'none'
                E3E_기타.display = 'none'
                break;
            case "의료":
                E3E_식비.display = 'none'
                E3E_쇼핑.display = 'none'
                E3E_여가.display = 'none'
                E3E_교통.display = 'none'
                E3E_의료.display = 'inline'
                E3E_정기.display = 'none'
                E3E_기타.display = 'none'
                break;
            case "정기":
                E3E_식비.display = 'none'
                E3E_쇼핑.display = 'none'
                E3E_여가.display = 'none'
                E3E_교통.display = 'none'
                E3E_의료.display = 'none'
                E3E_정기.display = 'inline'
                E3E_기타.display = 'none'
                break;
            case "기타":
                E3E_식비.display = 'none'
                E3E_쇼핑.display = 'none'
                E3E_여가.display = 'none'
                E3E_교통.display = 'none'
                E3E_의료.display = 'none'
                E3E_정기.display = 'none'
                E3E_기타.display = 'inline'
                break;
        }
    })
})
