file { '/var/www/':
	ensure => 'directory',
}

include nginx, php, mysqldb, mail
