
.. _installation:

Installation
============


The simplest way to install elm is via pip::

    pip install elm

or via conda::

    conda install elm


If you installed via pip, and notebook version < 5.3, you will also have to
install / configure the front-end extension as well. If you are using classic
notebook (as opposed to Jupyterlab), run::

    jupyter nbextension install [--sys-prefix / --user / --system] --py elm

    jupyter nbextension enable [--sys-prefix / --user / --system] --py elm

with the `appropriate flag`_. If you are using Jupyterlab, install the extension
with::

    jupyter labextension install elm

If you are installing using conda, these commands should be unnecessary, but If
you need to run them the commands should be the same (just make sure you choose the
`--sys-prefix` flag).


.. links

.. _`appropriate flag`: https://jupyter-notebook.readthedocs.io/en/stable/extending/frontend_extensions.html#installing-and-enabling-extensions
