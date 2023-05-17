// Copyright (c) qzhang
// Distributed under the terms of the Modified BSD License.
//
// This is the typecript file for displaying the widget and its components.


import {
  DOMWidgetModel,
  DOMWidgetView,
  ISerializers,
} from '@jupyter-widgets/base';

//import { FileBrowser } from '@jupyterlab/filebrowser';

import { MODULE_NAME, MODULE_VERSION } from './version';

// Import the CSS
import '../css/widget.css';


//The widget model will extend the DOMWidgetModel from DOMWidgetModel and set the default values.
export class ELMModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: ELMModel.model_name,
      _view_name: ELMModel.view_name,

      _model_module: ELMModel.model_module,
      _view_module: ELMModel.view_module,

      _model_module_version: ELMModel.model_module_version,
      _view_module_version: ELMModel.view_module_version,
        
      site_code: 'BR-Sa1',
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'ELMModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'ELMView'; // Set to null if no view
  static view_module = MODULE_NAME; // Set to null if no view
  static view_module_version = MODULE_VERSION;
}

// The widget view will extend DOMWidgetView and handle rendering the widget in the browser.
export class ELMView extends DOMWidgetView {
  /****View Elements
    HTMLElements: HTMLInputElement, HTMLTextAreaElement, HTMLButtonElement, HTMLDivElement,...
  ****/
  private _div0: HTMLDivElement;
  private _div1: HTMLDivElement;
  private _div2: HTMLDivElement;
  private _div3: HTMLDivElement;
  private _div4: HTMLDivElement;
  private _div5: HTMLDivElement;
  private _div6: HTMLDivElement;
  private _sitecodelbl: HTMLInputElement;
  private _sitecode: HTMLSelectElement;
  private _transientYslbl: HTMLInputElement;
  private _transientYs: HTMLInputElement;
  private _adspinupyearslbl: HTMLInputElement;
  private _adspinupyears: HTMLInputElement;
  private _finalspinupyearslbl: HTMLInputElement;
  private _finalspinupyears: HTMLInputElement;
  //private _mds_filelbl: HTMLInputElement;
  //private _mds_filepath: HTMLInputElement;
  private _clm_filelbl: HTMLInputElement;
  private _clm_filepath: HTMLInputElement;

  private _submitjobbtn: HTMLInputElement;
  private _queryjobbtn: HTMLInputElement;
  private _jobidlbl: HTMLInputElement;
  private _jobid: HTMLInputElement;
  private _status: HTMLTextAreaElement;
  private _statuslbl: HTMLInputElement;
  private job_info: any;

  render() {
    let options: string[] = ['BR-Sa1', 'CA-Man', 'US-Bo1', 'US-Me2', 'US-MOz', 'US-SPR', 'US-UMB']
    // ['AK-BEOG', 'AK-CLG', 'AK-K64G', 'AK-TLG'];
    this._div0 = document.createElement('div');
    this._div0.classList.add('widget-container', 'widget-box');
    this._div1 = document.createElement('div');
    this._div1.classList.add('widget-container', 'widget-box');
    this._div2 = document.createElement('div');
    this._div2.classList.add('widget-container', 'widget-box');
    this._div3 = document.createElement('div');
    this._div3.classList.add('widget-container', 'widget-box');
    this._div4 = document.createElement('div');
    this._div4.classList.add('widget-container', 'widget-box');
    this._div5 = document.createElement('div');
    this._div5.classList.add('widget-container', 'widget-box');
    this._div6 = document.createElement('div');
    this._div6.classList.add('widget-container', 'widget-box');

    this._sitecodelbl = document.createElement('input');
    this._sitecodelbl.type = 'label';
    this._sitecodelbl.value = 'site_code: ';
    this._sitecodelbl.disabled = true;
    this._sitecodelbl.classList.add('widget-glabel');
    this._div0.appendChild(this._sitecodelbl);

    this._sitecode = document.createElement('select');
    options.forEach((option) => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionElement.text = option;
        this._sitecode.add(optionElement);
    });
    this._sitecode.selectedIndex = 0;
    this._sitecode.disabled = false;
    this._sitecode.classList.add('widget-dropdown');
    this._div0.appendChild(this._sitecode);

    this._adspinupyearslbl = document.createElement('input');
    this._adspinupyearslbl.type = 'label';
    this._adspinupyearslbl.value = 'ad_spinup_years: ';
    this._adspinupyearslbl.disabled = true;
    this._adspinupyearslbl.classList.add('widget-glabel');
    this._div1.appendChild(this._adspinupyearslbl);

    this._adspinupyears = document.createElement('input');
    this._adspinupyears.type = 'text';
    this._adspinupyears.value = '50';
    this._adspinupyears.disabled = false;
    this._adspinupyears.classList.add('widget-number');
    this._div1.appendChild(this._adspinupyears);

    this._finalspinupyearslbl = document.createElement('input');
    this._finalspinupyearslbl.type = 'label';
    this._finalspinupyearslbl.value = 'final_spinup_years: ';
    this._finalspinupyearslbl.disabled = true;
    this._finalspinupyearslbl.classList.add('widget-glabel');
    this._div2.appendChild(this._finalspinupyearslbl);

    this._finalspinupyears = document.createElement('input');
    this._finalspinupyears.type = 'text';
    this._finalspinupyears.value = '50';
    this._finalspinupyears.disabled = false;
    this._finalspinupyears.classList.add('widget-number');
    this._div2.appendChild(this._finalspinupyears);

    this._transientYslbl = document.createElement('input');
    this._transientYslbl.type = 'label';
    this._transientYslbl.value = 'transient year(s): ';
    this._transientYslbl.disabled = true;
    this._transientYslbl.classList.add('widget-glabel');
    this._div3.appendChild(this._transientYslbl);

    this._transientYs = document.createElement('input');
    this._transientYs.type = 'text';
    this._transientYs.value = '20';
    this._transientYs.disabled = false;
    this._transientYs.classList.add('widget-number');
    this._div3.appendChild(this._transientYs);

    /*this._mds_filelbl = document.createElement('input');
    this._mds_filelbl.type = 'label';
    this._mds_filelbl.value = 'global_coordinates_x_y: ';
    this._mds_filelbl.disabled = true;
    this._mds_filelbl.classList.add('widget-glabel');
    this._div4.appendChild(this._mds_filelbl);

    this._mds_filepath = document.createElement('input');
    this._mds_filepath.type = 'text';
    this._mds_filepath.value = 'global_coordinates_x_y';
    this._mds_filepath.disabled = false;
    this._mds_filepath.classList.add('widget-input');
    this._div4.appendChild(this._mds_filepath);*/

    this._clm_filelbl = document.createElement('input');
    this._clm_filelbl.type = 'label';
    this._clm_filelbl.value = 'clm_parameters_file: ';
    this._clm_filelbl.disabled = true;
    this._clm_filelbl.classList.add('widget-glabel');
    this._div4.appendChild(this._clm_filelbl);

    this._clm_filepath = document.createElement('input');
    this._clm_filepath.type = 'text';
    this._clm_filepath.value = 'clm_parameters_file';
    this._clm_filepath.disabled = false;
    this._clm_filepath.classList.add('widget-input');
    this._div4.appendChild(this._clm_filepath);

    // Python -> JavaScript update
    this.model.on('change:site_code', this._onSitecodeChanged, this);
    this.model.on('change:transient_years', this._onTransientYsChanged, this);
    this.model.on('change:ad_spinup_years', this._onADSpinupyearsChanged, this);
    this.model.on('change:final_spinup_years', this._onFinalSpinupyearsChanged, this);
    //this.model.on('change:mds_filepath', this._onMDSFilepathChanged, this);
    this.model.on('change:clm_filepath', this._onCLMFilepathChanged, this);
    this.model.on('change:status', this._onStatusChanged, this);
      
    // JavaScript -> Python update
    this._sitecode.onchange = this._onSCInputChanged.bind(this);
    this._transientYs.onchange = this._onTSInputChanged.bind(this);
    this._adspinupyears.onchange = this._onADSInputChanged.bind(this);
    this._finalspinupyears.onchange = this._onFSInputChanged.bind(this);
    //this._mds_filepath.onchange = this._onMFInputChanged.bind(this);
    this._clm_filepath.onchange = this._onCFInputChanged.bind(this);

    this._submitjobbtn = document.createElement('input');
    this._submitjobbtn.type = 'Submit';
    this._submitjobbtn.value = 'Submit Job';
    this._submitjobbtn.classList.add(
        //'jupyter-button',
        'widget-button',
    );
    this._submitjobbtn.setAttribute('href', '#');
    this._submitjobbtn.setAttribute('title', 'Submit a job with the above input.');
    this._submitjobbtn.style.outline = 'none';
    this._submitjobbtn.addEventListener(
        'click',
        this._onsubmitbuttonClicked()
    );
    this._div4.appendChild(this._submitjobbtn);

    this._statuslbl = document.createElement('input');
    this._statuslbl.type = 'label';
    this._statuslbl.value = 'Run Status: ';
    this._statuslbl.disabled = true;
    this._statuslbl.classList.add('widget-glabel');
    this._div5.appendChild(this._statuslbl);

    this._status = document.createElement('textarea');
    this._status.value = '';
    this._status.disabled = true;
    this._status.setAttribute('rows', '5');
    this._status.setAttribute('cols', '330');
    this._status.setAttribute('wrap', 'hard');
    this._status.classList.add('widget-textarea');
    this._div5.appendChild(this._status);

    this._jobidlbl = document.createElement('input');
    this._jobidlbl.type = 'label';
    this._jobidlbl.value = 'job_id: ';
    this._jobidlbl.disabled = true;
    this._jobidlbl.classList.add('widget-glabel');
    this._div6.appendChild(this._jobidlbl);
      
    this._jobid = document.createElement('input');
    this._jobid.type = 'text';
    this._jobid.value = '';
    this._jobid.disabled = false;
    this._jobid.classList.add('widget-input');
    this._div6.appendChild(this._jobid);

    this._queryjobbtn = document.createElement('input');
    this._queryjobbtn.type = 'Submit';
    this._queryjobbtn.value = 'Query Job Status';
    this._queryjobbtn.classList.add(
        //'jupyter-button',
        'widget-button',
    );
    this._queryjobbtn.setAttribute('href', '#');
    this._queryjobbtn.setAttribute('title', 'Query the status of the given job ID');
    this._queryjobbtn.style.outline = 'none';
    this._queryjobbtn.addEventListener(
        'click',
        this._onquerybuttonClicked()
    );
    this._div6.appendChild(this._queryjobbtn);

    this.el.appendChild(this._div0);
    this.el.appendChild(this._div1);
    this.el.appendChild(this._div2);
    this.el.appendChild(this._div3);
    this.el.appendChild(this._div4);
    this.el.appendChild(this._div5);
    this.el.appendChild(this._div6);

    this.el.classList.remove('jupyter-widgets');
    this.el.classList.add('jupyter-widgets');
  }
    

  /**** get/set and other helper methods for render()****/

  // get (Python -> JavaScript update)
  private _onSitecodeChanged() {
    let options: string[] = ['BR-Sa1', 'CA-Man', 'US-Bo1', 'US-Me2', 'US-MOz', 'US-SPR', 'US-UMB'];
    this._sitecode.value = this.model.get('site_code');
    const idx = options.indexOf(this._sitecode.value).toString();
    this._sitecode.setAttribute('selectedIndex', idx);
  }
  private _onTransientYsChanged() {
    this._transientYs.value = this.model.get('transient_years');
  }
  private _onADSpinupyearsChanged() {
    this._adspinupyears.value = this.model.get('ad_spinup_years');
  }
  private _onFinalSpinupyearsChanged() {
    this._finalspinupyears.value = this.model.get('final_spinup_years');
  }
  /*private _onMDSFilepathChanged() {
    this._mds_filepath.value = this.model.get('mdsf_filepath');
  }*/
  private _onCLMFilepathChanged() {
    this._clm_filepath.value = this.model.get('clm_filepath');
  }    
  private _onStatusChanged() {
    this._status.value = this.model.get('status');
    if (this._status.value.toLowerCase().includes('status complete')) {
        //this._parse_output();
    }
  }


  // set (JavaScript -> Python update)
  private _onSCInputChanged() {
    // get the values updated from the front-end to the Python kernel
    this._sitecode.value = this._sitecode.options[this._sitecode.selectedIndex].value;
    this.model.set('site_code', this._sitecode.value);
    this.model.save_changes();
  } 
  private _onTSInputChanged() {
    // get the values updated from the front-end to the Python kernel
    this.model.set('transient_years', this._transientYs.value);
    this.model.save_changes();
  } 
  private _onADSInputChanged() {
    // get the values updated from the front-end to the Python kernel   
    this.model.set('ad_spinup_years', this._adspinupyears.value);
    this.model.save_changes();
  }
  private _onFSInputChanged() {
    // get the values updated from the front-end to the Python kernel   
    this.model.set('final_spinup_years', this._finalspinupyears.value);
    this.model.save_changes();
  }
  /*private _onMFInputChanged() {
    // get the values updated from the front-end to the Python kernel
    this.model.set('mdsf_filepath', this._mds_filepath.value);
    this.model.save_changes();
  }*/
  private _onCFInputChanged() {
    // get the values updated from the front-end to the Python kernel
    this.model.set('clm_filepath', this._clm_filepath.value);
    this.model.save_changes();
  }

  private _onsubmitbuttonClicked() {
    return (_event: Event): void => {
        this._status.value = '';
        this._jobid.value = '';
        this._send_runNGEEArctic_job();
    };
  }


  private _onquerybuttonClicked() {
    return (_event: Event): void => {
        this._status.value = '';
        //Mocking job_info
        /*let job_info: any = {"job_id": "64331d808b201b4812e4f42b",
                             "job_status": 200,
                             "job_status_text": "OK"};
        */
        let job_id: string = this._jobid.value; //'6435db81244675d24dd2fc77';
        //alert("Getting job status for job: " + job_id);
            this._get_jobstatus(job_id);
    };
  }

  private _submit_job(url: string, task: string) {
    const xhr = new XMLHttpRequest();
    const method = "GET";
      
    //alert('GET url: ' + url);

    xhr.open(method, url, true);

    xhr.setRequestHeader("Accept", "application/json")
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer " + this.model.get('username') + ":" + this.model.get('usertoken'));

    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        const status = xhr.status;
        //alert('Response status: ' + status);
        //if (status === 0 || (status >= 200 && status < 400)) {
        if (status == 200) {
          // The request has been completed successfully
          this.job_info = xhr.responseText;
          this._status.value = this.job_info;
          //alert('xhr.responseText: ' + this.job_info);
          if (task == 'submit_job') {
              // Because xhr.responseText is a string, we need to convert it to a json object
              this._jobid.value = JSON.parse(this.job_info).job_id;
          }
        } else {
          // Oh no! There has been an error with the request!
          
        }
      }
    };
    xhr.send();
  }
 
  private build_query(data: any, method: string) {
      let query = '';
      if (method == 'runNGEEArctic') {
          const ts: number = +data.transientYs as number;
          const a_years: number = +data.ad_spinup_years as number;
          const f_years: number = +data.final_spinup_years as number;
          const clm_file: string = data.clm_parameters_file;
          query = query + '?site_code=' + data.site_code;
          query = query + '&transient_years=' + ts;
          query = query + '&ad_spinup_years=' + a_years;
          query = query + '&final_spinup_years=' + f_years;
          query = query + '&clm_parameters_file=' + clm_file;
          query = query + '&username=' + this.model.get('username');
      } else if (method == 'subXY') {
          query = query + '?x=' + data.x;
          query = query + '&y=' + data.y;
      } 

      return query;
  }


  // Want to use async/await, add the `async` keyword to your outer function/method.
  private async _send_runNGEEArctic_job() {
    //const base_url: string = 'http://sequoia.mcs.anl.gov:30002/run_Ameriflux_point_based_sim';
    const base_url: string = 'https://ess.cels.anl.gov/jobs_api/run_Ameriflux_point_based_sim';

    const sitecode: string = this._sitecode.value;
    const transientYs: number = +this._transientYs.value as number;
    const adspinup_years: number = +this._adspinupyears.value as number;
    const finalspinup_years: number = +this._finalspinupyears.value as number;
    const clm_file: string = this._clm_filepath.value;
    //const mds_file: string = this._mds_filepath.value;

    if (sitecode && transientYs && adspinup_years && finalspinup_years && clm_file) {
        let data = {
            site_code: sitecode,
            transientYs: transientYs,
            ad_spinup_years: adspinup_years,
            final_spinup_years: finalspinup_years,
            //global_coordinates_x_y: mds_file,
            clm_parameters_file: clm_file,
        };

        // alert(JSON.stringify(data,  null, 4));
        const query_str = this.build_query(data, 'runNGEEArctic');
        await this._submit_job(base_url + query_str, 'submit_job');
    }
    else {
        alert("Please enter all required input parameters.");
        console.log("Please enter all required input parameters.");
        return undefined;
    }
  }


  private async _get_jobstatus(jobid: string) {
    const url: string = 'https://ess.cels.anl.gov/jobs_api/jobs/';
    //alert(url + jobid);
    this._submit_job(url + jobid, 'query_job');
  }

}


