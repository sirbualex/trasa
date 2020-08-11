import Constants from '../../Constants'
import {clickWithText} from "../../utils/utils";

require('expect-puppeteer')
const groupData=require('../../mock_data/groups')
import { ServicesMock } from '../../mock_data/services'



//create user
export const AddServiceToGroup = () => {
    beforeAll(async () => {
        await page.goto(Constants.TRASA_DASHBOARD+'/services')
    })

    it('Should add services to a group '+Constants.TRASA_DASHBOARD+'/services', async () => {
        await expect(page).toMatch('HTTPs applications')


        await clickWithText(page,"Service Groups",'span')

        await expect(page).toMatch("Service Group")

        await page.waitForSelector('#someservicegroup')

        await page.click('#someservicegroup')
        await page.waitForResponse(r=>r.url().includes('/api/v1/groups/service'))

        await page.click('#addServiceToGroupBtn')



        await clickWithText(page,'Select...','span')
          await page.waitFor(1000)

        await clickWithText(page,ServicesMock[0].name,'span')
        await clickWithText(page,'Add Services','span')

        await page.click('#addSelectedServicesBtn')

        const resp=await page.waitForResponse(r=>r.url().includes('groups/service/update'))
        await expect(resp.status()).toBe(200)

        await page.waitForNavigation()



    })




}

