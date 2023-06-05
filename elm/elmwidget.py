#!/usr/bin/env python
# coding: utf-8

# Copyright (c) qzhang.
# Distributed under the terms of the Modified BSD License.

"""
This is the python file for interacting with the widget
elmwidget creates a custom widget for generating & sending elm run input parameters

The python side of the widget will basically be a class that is synced with a javascript model.

When you call the widget in the notebook, the python module will call the javascript model which will eventually be rendered in the browser.
"""

import io
import json
import ipywidgets as widgets
import getpass
import os
from IPython.display import display

from ipywidgets import DOMWidget, ValueWidget, register
from traitlets import Unicode, Bool, validate, TraitError, Dict, default
from traitlets import List, Enum, Instance

from ._frontend import module_name, module_version



@register
class ELMWidget(DOMWidget):
    """defines inputs for generating an ELM run input parameters
    """
    _model_name = Unicode('ELMModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('ELMView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    # widget model attributes
    site_code = Unicode('BR-Sa1').tag(sync=True)
    transient_years = Unicode('Transient year(s)').tag(sync=True)
    ad_spinup_years = Unicode('ad spinup years').tag(sync=True)
    final_spinup_years = Unicode('final spinup years').tag(sync=True)
    # mdsf_filepath = Unicode('MDSF file').tag(sync=True)
    clm_filepath = Unicode('CLM parameter file').tag(sync=True)
    job_id = Unicode('job_id').tag(sync=True)
    
    payload = Dict().tag(sync=True)
    status = Unicode('Starting').tag(sync=True)

    env_data = os.environ
    if env_data.get('JUPYTERHUB_CLIENT_ID', None):
        client_id = Unicode(env_data['JUPYTERHUB_CLIENT_ID']).tag(sync=True)
    else:
        client_id = Unicode('jupyterhub-user-user1').tag(sync=True)
    if env_data.get('JUPYTERHUB_USER', None):
        username = Unicode(env_data['JUPYTERHUB_USER']).tag(sync=True)
    else:
        username = Unicode('user1').tag(sync=True)
    if env_data.get('JUPYTERHUB_API_TOKEN', None):
        usertoken = Unicode(env_data['JUPYTERHUB_API_TOKEN']).tag(sync=True)
    else:
        usertoken = Unicode('060c9785630d4ef0909215f1239f2ef8').tag(sync=True)

    def send_data(self, payload):
        self.send({'data': json.dumps(payload)})

